pipeline {
  triggers {
    githubPush()
    pollSCM('H/15 * * * *')
  }
  parameters {
    booleanParam(
          name: 'CLEAN_WORKSPACE',
          defaultValue: false,
          description: 'Start with empty workspace'
      )
  }
  agent {
    kubernetes {
      inheritFrom 'toolbox'
      label 'pod'
      containerTemplate(
        name: 'buildbox',
        image: 'node:10',
        ttyEnabled: true,
        command: 'cat'
      )
    }
  }
  stages {
    stage('Init') {
      steps {
        script {
          if (params.CLEAN_WORKSPACE) {
            echo "Wiping out workspace"
            deleteDir()
          } else {
            echo 'Skipping cleanup due to user setting'
          }
        }
      }
    }
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Prepare') {
      steps {
        container('toolbox') {
          script {
            dir ('.hub') {
              hub.render(template: 'templates/package.json.template', state: params.APP_STATE_FILE)
              sh script: 'cp templates/package.json ../'
            }
            echo readFile('package.json')
          }
        }
      }
    }
    stage('Build') {
      environment {
        CONTEXT_PATH = "${params.INGRESS_CONTEXT}"
        APPLICATION_REPOSITORY = "${gitscm.remote}"
        APPLICATION_BRANCH = "${gitscm.branch}"
      }
      steps {
        container('toolbox') {
          script {
            dir ('.hub') {
              final outputs = hub.explain(manifest: 'hub.yaml', state: params.APP_STATE_FILE).stackOutputs
              appBucket = outputs['application.bucket'] as String
              appPath = outputs['application.path'] as String
              appTheme = outputs['application.theme'] as String
              if (appTheme?.trim()) {
                println "Application theme is defined as \"${appTheme}\""
                env.APPLICATION_THEME = appTheme.trim()
              }
            }
          }
        }
        container('buildbox') {
          sh script: 'npm install'
          sh script: 'npm run junit:test'
          sh script: 'npm run build'
        }
      }
    }
    stage('Lint') {
      steps {
        container('buildbox') {
          script {
            try {
              sh script: 'npm run junit:lint'
            } catch (err) {
              currentBuild.result = 'UNSTABLE'
              currentBuild.description = 'Found lint violations'
            }
          }
        }
      }
    }
    stage('Deploy Application') {
      steps {
        container('toolbox') {
          script {
            withAWS(role:params.AWS_TRUST_ROLE) {
              sh script: "aws s3 sync --delete dist/ s3://${appBucket}/${appPath}"
            }
          }
        }
      }
    }
  }
  post {
    always {
      junit testResults: './tests-*.xml', allowEmptyResults: true
    }
    changed {
      slackSend color: slack.buildColor, message: slack.buildReport
    }
  }
}
