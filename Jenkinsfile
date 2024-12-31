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
                script {
                    // Ensure Node.js is available and install dependencies
                    sh 'node -v || curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs'
                    sh 'npm install'
                }
            }
        }

        stage('Test Application') {
            steps {
                script {
                    // Run tests as per package.json
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from the updated Dockerfile
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    sh "docker login -u mmohit1271 -p ${password}"
                    sh "docker push $DOCKER_IMAGE"
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    // Deploy application using Docker Compose
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
