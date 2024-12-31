# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy the app's source code into the container
COPY app/ .

# Expose the port the app will run on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]

