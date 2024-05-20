resource "aws_vpc" "jung-main" {
  cidr_block = "10.7.0.0/16"
  
  tags = {
    Name      = "jung-vpc"
    createdBy = "Jung"
  }
}

resource "aws_subnet" "jung-subnet-a" {
  vpc_id            = aws_vpc.jung-main.id
  cidr_block        = "10.7.7.0/24"
  availability_zone = "ap-southeast-1a"
  
  tags = {
    Name      = "jung-subnet-a"
    createdBy = "Jung"
  }
}

resource "aws_subnet" "jung-subnet-b" {
  vpc_id            = aws_vpc.jung-main.id
  cidr_block        = "10.7.8.0/24"
  availability_zone = "ap-southeast-1b"
  
  tags = {
    Name      = "jung-subnet-b"
    createdBy = "Jung"
  }
}

resource "aws_internet_gateway" "jung-main" {
  vpc_id = aws_vpc.jung-main.id
  
  tags = {
    Name      = "jung-internet-gateway"
    createdBy = "Jung"
  }
}
