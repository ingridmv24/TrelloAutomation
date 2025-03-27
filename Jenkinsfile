pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
        git 'Default'
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
