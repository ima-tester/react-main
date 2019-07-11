terraform {
  required_version = ">= 0.11.3"
  backend "s3" {}
}

provider "aws" {
  version = "~> 1.25"
}

data "aws_route53_zone" "main" {
  name  = "${var.base_domain}"
}

module "r53" {
  source        = "github.com/agilestacks/terraform-modules//r53_alias"
  name          = "${var.name}"
  r53_zone_id   = "${data.aws_route53_zone.main.zone_id}"
  r53_domain    = "${data.aws_route53_zone.main.name}"
  alias_zone_id = "${module.s3.hosted_zone_id}"
  alias_name    = "${module.s3.website_domain}"
}

module "s3" {
  source      = "github.com/agilestacks/terraform-modules//s3_www"
  name        = "${var.name}.${var.base_domain}"
  environment = "${var.name}.${var.base_domain}"
}
