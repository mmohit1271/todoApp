pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "todoapp:latest"
        DOCKER_REGISTRY = "docker.io" // or use your own registry
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mmohit1271/todoApp.git'
            }
        }

        stage('Build Image') {
            steps {
                script {
                    // Build Docker image from the Dockerfile
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'docker login -u mmohit1271 -p $password'
                }
        }

        stage('Push Image to Docker Hub') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Deploy the app using Docker Compose
                    sh 'docker-compose up -d'
                }
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
