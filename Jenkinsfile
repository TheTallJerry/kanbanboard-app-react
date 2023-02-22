pipeline{
    agent any

    options {
        timestamps()
    }

    stages{
        stage('Deploy') {
            steps {
                script {
                    sh 'npm run deploy'
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
