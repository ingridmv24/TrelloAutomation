node {
def seleniumPID

stage('testecho') {
    echo "probando comando echo"
}

stage('Install') {
    git 'https://github.com/ingridmv24/TrelloAutomation.git'
}

stage('Build') {
    if (isUnix()) {
        sh "cd TrelloAutomation"
        sh "npm install"
    } else {
        bat "cd TrelloAutomation"
        bat "npm install"
    }
}
}