data "aws_iam_role" "ssm_role" {
  name = "ssm-role"
}

data "aws_iam_instance_profile" "ssm_instance_profile" {
  name = "ssm-instance-profile"
}
