pipeline{
    agent any

    options {
        timestamps()
    }

    stages{
        stage('Deploy') {
            steps {
                script {
                    sh 'npm i && npm run deploy'
                }
            }
        }
    }

    post {
        always {
            script {
                cleanWs()
            }
        }
    }
}
