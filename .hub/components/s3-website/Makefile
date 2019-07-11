.DEFAULT_GOAL := deploy

export AWS_PROFILE        ?= default
export AWS_DEFAULT_REGION ?= us-east-2

export TF_VAR_name        ?= dev
export TF_VAR_base_domain ?= stacks.delivery
DOMAIN_NAME  ?= $(TF_VAR_name).$(TF_VAR_base_domain)

export TF_LOG             ?= debug
export TF_LOG_PATH        ?= .terraform/$(TF_VAR_name).$(TF_VAR_base_domain).log
export TF_CLI_ARGS        ?= -no-color -input=false
export TF_DATA_DIR        ?= .terraform

COMPONENT_NAME     ?= slack-notifier-cloud
STATE_BUCKET ?= terraform.agilestacks.com
STATE_REGION ?= us-east-1

terraform    ?= terraform-v0.11

deploy: init plan
	$(MAKE) apply || \
	$(MAKE) import plan apply
.PHONY: deploy

$(TF_DATA_DIR):
	@ mkdir -p $@

init: $(TF_DATA_DIR)
	$(terraform) init -get=true -force-copy \
        -backend=true -reconfigure \
        -backend-config="bucket=$(STATE_BUCKET)" \
        -backend-config="region=$(STATE_REGION)" \
        -backend-config="key=$(DOMAIN_NAME)/app/$(TF_VAR_name)/s3-website/terraform.tfstate" \
        -backend-config="profile=$(AWS_PROFILE)"
.PHONY: init

plan:
	$(terraform) plan -refresh=true -module-depth=-1 -out=.terraform/terraform.tfplan
.PHONY: plan

refresh:
	$(terraform) refresh
.PHONY: refresh

apply:
	$(terraform) apply -auto-approve .terraform/terraform.tfplan
.PHONY: apply

output:
	@ $(terraform) output
.PHONY: output

clean:
	rm -rf .terraform
.PHONY: clean

undeploy: init
	$(MAKE) plan TF_CLI_ARGS="-destroy $(TF_CLI_ARGS)"
	$(MAKE) apply
.PHONY: undeploy

import:
	- $(terraform) import module.s3.aws_s3_bucket.main $(DOMAIN_NAME)
.PHONY: import
