# Base Image
FROM node:18-alpine
# Or your preferred Node.js base image

RUN apk add --no-cache curl

# Working Directory
WORKDIR /app 

# Copy project files
COPY package*.json ./ 
RUN npm install

# Copy the rest of your project 
COPY . .

## Run Migrations
CMD ["npx", "knex", "migrate:latest"]

# Expose the port your application listens on
EXPOSE 9000

# Command to start the application (adjust as needed)
CMD ["npm", "start"]
