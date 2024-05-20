resource "aws_key_pair" "jung-key" {
  key_name   = "jung-key"
  public_key = file("~/.ssh/id_rsa.pub")
}
