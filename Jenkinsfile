#!/usr/bin/env groovy
ansiColor('xterm') {
  timestamps {
    if (env.BRANCH_NAME == 'master') {
      node('ec2') {
        stage('Clean') {
          sh 'sudo chown $(whoami) . -R' // docker runs can turn permissions into root on some runs
          deleteDir()
          cleanWs()
        }
    
        stage('Checkout') {
          checkout scm
        }
    
        stage('Deploy') {
          try {
            docker.image('node:9-alpine').inside("-u 0") {
              sh '''
                yarn
                yarn export
                echo http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories
                apk add -U aws-cli
                aws s3 sync --acl public-read out s3://oneup.stratasan.com/
              '''
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
  }
}
