provider "aws" {
  region = var.aws_region
}

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

resource "aws_route_table" "jung-main" {
  vpc_id = aws_vpc.jung-main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.jung-main.id
  }
  
  tags = {
    Name      = "jung-route-table"
    createdBy = "Jung"
  }
}

resource "aws_route_table_association" "jung-subnet-a-association" {
  subnet_id      = aws_subnet.jung-subnet-a.id
  route_table_id = aws_route_table.jung-main.id
}

resource "aws_route_table_association" "jung-subnet-b-association" {
  subnet_id      = aws_subnet.jung-subnet-b.id
  route_table_id = aws_route_table.jung-main.id
}
