#!/bin/bash

source .env

# Get the current version from package.json
VERSION=$(jq '.version' package.json | sed 's/"//g')

# Increment the patch version for development
NEW_VERSION=$(echo $VERSION | awk -F. -v OFS=. 'NF==1{print ++$NF}; NF>1{if(length($NF+1)>length($NF))$(NF-1)++; $NF=sprintf("%0*d", length($NF), ($NF+1)%(10^length($NF))); print}')

# Update the version in package.json
jq '.version = "'"$NEW_VERSION"'"' package.json > /dev/null

# Build the Docker image
docker build -t $DOCKERHUB_USERNAME/tasks:develop-$NEW_VERSION .

# Push the image to Docker Hub
docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD
docker push $DOCKERHUB_USERNAME/tasks:develop-$NEW_VERSION

echo "Image built and pushed with development tag: $DOCKERHUB_USERNAME/tasks:develop-$NEW_VERSION"
