#!/usr/bin/env groovy
if (env.BRANCH_NAME == 'master') {
  node('ec2') {
    stage('Checkout') {
      checkout scm
    }
    timestamps {
      try {
        stage('Deploy') {
          docker.image('node:9-alpine').inside("-u 0") {
            sh '''
            npm install -g yarn
            yarn
            yarn export
            echo http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories
            apk update
            apk add -U aws-cli
            aws s3 sync --acl public-read out s3://oneup.stratasan.com/
            '''
          }
        }
        currentBuild.result = 'SUCCESS'

      } catch (err) {
        currentBuild.result = 'FAILURE'
        throw err
      } finally {
        node('master') {
          logstashSend failBuild: false
        }
      }
    }
  }
}
