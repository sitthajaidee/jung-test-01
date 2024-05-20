resource "aws_instance" "jung-ec2" {
  ami                    = "ami-0ac9397cab55f5044" # Ensure this is the correct AMI ID for your region and OS
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.jung-subnet-a.id
  vpc_security_group_ids = [aws_security_group.jung-sg.id]
  iam_instance_profile   = data.aws_iam_instance_profile.ssm_instance_profile.name

  tags = {
    Name      = "jung-ec2"
    createdBy = "Jung"
  }
}
