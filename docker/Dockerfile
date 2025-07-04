# Use official Node LTS image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package files first to install deps
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port
EXPOSE 3000

# Run the compiled app
CMD [ "npm", "start","dist/index.js"] 
