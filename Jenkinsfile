pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "mmohit1271/todoapp:latest"
        DOCKER_REGISTRY = "hub.docker.com"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/mmohit1271/todoApp.git'
            }
        }

        stage('Install Node.js and Dependencies') {
            steps {
                script {
                    // Ensure Node.js is installed
                    sh '''
                        if ! [ -x "$(command -v node)" ]; then
                            curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
                            apt-get install -y nodejs
                        fi
                    '''
                    // Navigate to the correct directory and install dependencies
                    sh 'cd /var/lib/jenkins/workspace/todoApp && npm install'
                }
            }
        }
 // Comment out or remove the 'Test Application' stage if not required
        /*
        stage('Test Application') {
            steps {
                script {
                    // Run tests defined in package.json
                    sh 'cd /var/lib/jenkins/workspace/todoApp && npm test'
                }
            }
        }
 */
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh "cd /var/lib/jenkins/workspace/todoApp && docker build -t $DOCKER_IMAGE ."
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
                    // Deploy using Docker Compose
                    sh 'cd /var/lib/jenkins/workspace/todoApp && docker-compose up -d'
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
