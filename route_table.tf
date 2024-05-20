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
