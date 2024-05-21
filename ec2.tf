resource "aws_instance" "jung-ec2" {
  ami                    = "ami-0ac9397cab55f5044"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.jung-subnet-a.id
  vpc_security_group_ids = [aws_security_group.jung-sg.id]
  iam_instance_profile   = data.aws_iam_instance_profile.ssm_instance_profile.name
  associate_public_ip_address = true

  user_data = <<-EOF
              #!/bin/bash
              yum install -y amazon-ssm-agent
              systemctl enable amazon-ssm-agent
              systemctl start amazon-ssm-agent

              # Add the MongoDB repository
              tee /etc/yum.repos.d/mongodb-org-6.0.repo <<EOL
              [mongodb-org-6.0]
              name=MongoDB Repository
              baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/
              gpgcheck=1
              enabled=1
              gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
              EOL

              # Install mongodb-org-shell
              yum install -y mongodb-org-shell
              EOF

  tags = {
    Name      = "jung-ec2"
    createdBy = "Jung"
  }
}
