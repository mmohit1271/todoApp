
To-Do App

This is a simple To-Do application built using **Node.js** and **Express**, containerized using **Docker**, and deployed with **Jenkins**. The app allows users to view and manage tasks in a simple list format.

Features

- Displays a list of tasks (`Learn Docker`, `Build ToDo app`).
- Built with **Node.js** and **Express**.
- Containerized using **Docker** for easy deployment.
- Jenkins pipeline to automate the build and deployment process.

Prerequisites

Before you can run this application, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Jenkins](https://www.jenkins.io/download/), if you want to use the Jenkins pipeline for CI/CD.

Project Structure

/todo-app
    /app
        index.js
        package.json
    Dockerfile
    docker-compose.yml
    Jenkinsfile

- **/app**: Contains the app's source code, including `index.js` (the main entry point) and `package.json` (for managing dependencies).
- **Dockerfile**: The file used to build a Docker image for the app.
- **docker-compose.yml**: A configuration file for Docker Compose, making it easier to run the app with Docker.
- **Jenkinsfile**: A file used to define a Jenkins pipeline that automates the build and deployment of the app.

How to Run the App Locally

1. Clone the Repository

First, clone the repository:

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

