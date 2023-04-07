# se an official Node.js runtime as a parent image
FROM node:14-alpine

# Install Yarn
RUN apk add --no-cache yarn

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json ./

# Install the project dependencies
RUN yarn 

# Copy the rest of the project files to the working directory
COPY . .

# Build the production version of the project
RUN yarn build

# Expose port 3000 for the application
EXPOSE 3000

# Set the default command to start the application
CMD ["yarn", "dev"]
