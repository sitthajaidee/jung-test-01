output "instance_id" {
  value = aws_instance.jung-ec2.id
}

output "public_ip" {
  value = aws_instance.jung-ec2.public_ip
}
