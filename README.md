# Book-Search-Engine
Module 18 Challenge
A full-stack application that allows users to search for books and save their favorite books using the Google Books API. The app is built with a **MERN** stack (MongoDB, Express, React, Node.js) and integrates **Apollo Server** and **GraphQL** for API management.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

## Features

- Search for books using the Google Books API.
- Save books to your profile for later reference.
- Authentication with JWT to manage user sessions.
- Real-time updates and live reloading in development with `ts-node-dev`.
- Modern, responsive UI built with Vite and React.

## Technologies

- **Backend**: Node.js, Express.js, Apollo Server, GraphQL, MongoDB
- **Frontend**: React, Vite, GraphQL
- **Additional Tools**: TypeScript, ts-node-dev, concurrently

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- MongoDB (Local instance or Atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Kol3wang/Book-Search-Engine.git
   cd Book-Search-Engine

2. Install dependencies: 
   npm run install

3.	Environment Variables:
•	Create a .env file in the server directory.
•	Set up the following environment variables:
    MONGODB_URI=<your-mongo-uri>
    JWT_SECRET=<your-jwt-secret>

4.	Run the App:
•	In development mode with live reloading:
    npm run develop

•	In production mode:
    npm run build
    npm start

Usage

	1.	Visit the app at http://localhost:3000 (or the specified port).
	2.	Register or log in to save your favorite books.
	3.	Use the search bar to find books and save them to your profile.

Scripts

	•	npm start: Starts the app in production mode.
	•	npm run develop: Starts the app in development mode with live reloading.
	•	npm run build: Builds the frontend and backend for production.

Deployment
	1.	Build:
        npm run build

    2.	Deploy:
    Follow deployment instructions for your platform (Render, Heroku, etc.) to serve the server/dist directory and the frontend build.

License
This project is licensed under the MIT License