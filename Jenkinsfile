node {
def seleniumPID

stage('testecho') {
    echo "testecho"
}

stage('Build') {
    if (isUnix()) {

        sh "npm install"
    } else {

        bat "npm install"
    }
}
}