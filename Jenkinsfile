pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t portfolio-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop portfolio-container || exit 0'
                bat 'docker rm portfolio-container || exit 0'
                bat 'docker run -d --name portfolio-container -p 8080:80 portfolio-app'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps'
            }
        }
    }
}
