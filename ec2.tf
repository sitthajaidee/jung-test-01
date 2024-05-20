resource "aws_instance" "jung-ec2" {
  ami           = "ami-0ac9397cab55f5044"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.jung-subnet-a.id
  security_groups = [aws_security_group.jung-sg.name]
  iam_instance_profile = aws_iam_instance_profile.ssm_instance_profile.name

  tags = {
    Name      = "jung-ec2"
    createdBy = "Jung"
  }
}
