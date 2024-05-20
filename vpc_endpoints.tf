resource "aws_vpc_endpoint" "ssm" {
  vpc_id       = aws_vpc.jung-main.id
  service_name = "com.amazonaws.ap-southeast-1.ssm"
  subnet_ids   = [aws_subnet.jung-subnet-a.id, aws_subnet.jung-subnet-b.id]
  security_group_ids = [aws_security_group.jung-sg.id]

  tags = {
    Name      = "jung-ssm-endpoint"
    createdBy = "Jung"
  }
}

resource "aws_vpc_endpoint" "ec2messages" {
  vpc_id       = aws_vpc.jung-main.id
  service_name = "com.amazonaws.ap-southeast-1.ec2messages"
  subnet_ids   = [aws_subnet.jung-subnet-a.id, aws_subnet.jung-subnet-b.id]
  security_group_ids = [aws_security_group.jung-sg.id]

  tags = {
    Name      = "jung-ec2messages-endpoint"
    createdBy = "Jung"
  }
}

resource "aws_vpc_endpoint" "ssmmessages" {
  vpc_id       = aws_vpc.jung-main.id
  service_name = "com.amazonaws.ap-southeast-1.ssmmessages"
  subnet_ids   = [aws_subnet.jung-subnet-a.id, aws_subnet.jung-subnet-b.id]
  security_group_ids = [aws_security_group.jung-sg.id]

  tags = {
    Name      = "jung-ssmmessages-endpoint"
    createdBy = "Jung"
  }
}
