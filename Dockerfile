FROM node:15.3.0-alpine

# Creating work directory
WORKDIR /usr/src/app

# COPY package files
COPY package*.json ./

# install required packages
RUN npm install

# Copy project dir
COPY index.js .

# setup for deploying the helm charts
ARG PORT=2000

# Set the kubernetes and helm versions as environment variables
ENV PORT=${PORT} 

EXPOSE ${PORT}
CMD [ "node", "index.js" ]
