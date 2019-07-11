variable "name" {
  type = "string"
  description = "name of a stack"
}

variable "base_domain" {
  type = "string"
  description = "Base DNS name for a stack"
  default = "stacks.delivery"
}

variable "aws_profile" {
  type = "string"
  description = "describes aws profile"
  default = "default"
}
