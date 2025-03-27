pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
        git 'Default'
    }
    
    stages {
        stage('Check Git Version') {
            steps {
                script {
                    def gitVersion = sh(script: 'git --version', returnStdout: true).trim()
                    echo "Git Version: ${gitVersion}"
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run UI Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
    
    post {
        always {
            junit 'reports/junit/*.xml'
            archiveArtifacts artifacts: 'reports/**/*', allowEmptyArchive: true
        }
    }
}
