pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "mmohit1271/todoapp:latest"
        DOCKER_REGISTRY = "hub.docker.com"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mmohit1271/todoApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test Application') {
            steps {
                // Run tests (assuming tests are defined in package.json)
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'echo $password | docker login -u $user --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
