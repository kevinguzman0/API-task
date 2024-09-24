# Backend API-tasks

This is a backend API built with Node.js and Express, which is used to manage tasks. The API allows creating, reading, updating, and deleting tasks.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setting Up the Local Environment](#setting-up-the-local-environment)
- [Running in Docker](#running-in-docker)
- [Architecture and Design Decisions](#architecture-and-design-decisions)
- [Running Tests](#running-tests)

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Docker](https://www.docker.com/get-started) (optional, if you want to run the application in a container)

## Setting Up the Local Environment

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/repository-name.git

2. Navigate to the project directory:

   ```bash
   cd repository-name

3. Install the dependencies:

   ```bash
   npm install

4. Create an environment file .env to configure the necessary environment variables:

    ```bash
    MONGO_URI=mongodb://localhost/tasksdb
    PORT=3000

5. Start the application:

    ```bash
    npm start

The API will be available at http://localhost:3000.

## Running in Docker

1. Make sure Docker and Docker Compose are installed.
2. Run Docker Compose:

     ```bash
     docker-compose up --build

This will spin up the application and the database. The API will be available at http://localhost:3000.


## Architecture and Design Decisions

The architecture of the API is based on the MVC (Model-View-Controller) pattern. Design decisions include:

- Express.js as the framework to handle routing and HTTP requests.
- MongoDB as the database for data persistence.
- Mongoose for data modeling and interaction with MongoDB.

## Running Tests

Tests have been implemented using Jest, a JavaScript testing framework.

1. To run the tests, ensure all dependencies are installed (as mentioned earlier).
2. Execute the following command:

    ```bash
    npm test

This will run the unit tests and display a report in the console.



