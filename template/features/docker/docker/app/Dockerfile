# Create the container from the alpine linux image
FROM alpine:latest

# Add nodejs
RUN apk add --update --no-cache bash git nodejs nodejs-npm

# Set the directory we want to run the next commands for
WORKDIR /frontend

# Copy package.json & package-lock.json
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install the dependencies, can be commented out if you're running the same node version
RUN npm ci

# Copy our source code into the container
COPY . .

# run webpack and the vue-loader
RUN NODE_ENV=production npm run build

ENV HOST 0.0.0.0
ENV PORT 3000

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["npm", "start"]
