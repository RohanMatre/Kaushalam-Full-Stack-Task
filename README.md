# Kaushalam Full Stack Task - ToDo App

This is a Full-Stack ToDo application built with PostgreSQL, React, Node.js, Express, uuidv4, CORS, bcrypt, and JWT for authentication.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (Sign Up, Log In) with secure password hashing (bcrypt) and JSON Web Tokens (JWT).
- CRUD operations for managing ToDo tasks.
- RESTful API built with Node.js and Express.
- PostgreSQL database for storing user and task data.
- Frontend built with React for a dynamic user interface.
- CORS enabled for cross-origin requests.

## Technologies Used
- **Backend**: Node.js, Express, PostgreSQL, bcrypt, JWT, uuidv4
- **Frontend**: React
- **Others**: CORS

## Setup and Installation

### Prerequisites
- Node.js
- PostgreSQL
- Git

## Features
### Sign Up Page
![Sign Up Page](https://github.com/user-attachments/assets/e530a8cf-a36a-40bc-bda0-0eadfac627e4)
- Users can create a new account by entering their email and password.

### Login Page
![Login Page](https://github.com/user-attachments/assets/2b7c7653-bfe0-40a9-b731-28cd1a224271)
- Users can log in using their registered email and password.

### Dashboard and Task Management

#### Add Task
![Add Task](https://github.com/user-attachments/assets/98a88324-ec1b-40e2-9cb6-ceda0a739211)
- Input task details, including title, progress, and due date.

![Add Task](https://github.com/user-attachments/assets/fde74eed-3167-4526-98c4-aa87b2759e77)
- Submit the task to add it to the ToDo list.

#### Edit Task
![Edit Task](https://github.com/user-attachments/assets/da73187f-47ab-4efc-9f5d-6718ca5046c7)
- Edit existing tasks to update details.

![Edit Task](https://github.com/user-attachments/assets/b338f3e7-54dc-410e-b776-921286f6134b)
- Modify task information with ease.

#### Delete Task
![Delete Task](https://github.com/user-attachments/assets/17554758-f712-4c79-93a7-1cf409dd2460)
- Delete tasks that are no longer needed.

![Delete Task](https://github.com/user-attachments/assets/7550531b-64c3-49f3-96af-8f4101709b5e)
- Confirmation dialog to prevent accidental deletions.

### Sign Out
![Sign Out](https://github.com/user-attachments/assets/1d967328-659b-4d41-a582-9e3ec7d5687b)
- Sign out to terminate the session.

![After Sign Out](https://github.com/user-attachments/assets/66d3bcfd-131c-40ea-a17f-7e161b0e0854)
- Redirected back to the Login page.

### Terminal Screenshots

#### Client-Side
![Client-Side](https://github.com/user-attachments/assets/dca24ad1-922d-4a10-a8eb-04c991e93233)
- Displays client-side application logs and API calls.

#### Server-Side
![Server-Side](https://github.com/user-attachments/assets/1e7cc559-06c3-41fa-983a-a597664f1b9f)
- Shows incoming requests and database interactions.

### PostgreSQL Database Setup
![PostgresDB Setup](https://github.com/user-attachments/assets/19b17a47-0c3b-498d-ad3b-ecd0261cee54)
- Configured to store user information and task data for persistence and retrieval.

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/RohanMatre/kaushalam-full-stack-todo.git
    cd kaushalam-full-stack-todo
    ```

2. **Backend Setup**:
    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Install backend dependencies:
        ```bash
        npm run install
        ```
    - Create a `.env` file in the backend directory with the following variables:
        ```
        PORT=5000
        DATABASE_URL=your_postgres_database_url
        JWT_SECRET=your_jwt_secret
        ```
    - Run PostgreSQL and create a database for the app.
    - Start the backend server:
        ```bash
        npm run start
        ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
        ```bash
        cd ../client
        ```
    - Install frontend dependencies:
        ```bash
        npm install
        ```
    - Start the React development server:
        ```bash
        npm run start
        ```

## API Endpoints

### Authentication
- **POST** `/api/auth/signup` - Register a new user.
- **POST** `/api/auth/login` - Log in with existing user credentials.

### ToDo Operations (Require JWT Token)
- **GET** `/api/todos` - Get all ToDo tasks for the authenticated user.
- **POST** `/api/todos` - Create a new ToDo task.
- **PUT** `/api/todos/:id` - Update an existing ToDo task.
- **DELETE** `/api/todos/:id` - Delete a ToDo task.

## Running the Application
1. Start the backend server (Express + PostgreSQL).
2. Start the frontend React application.
3. Open your browser and navigate to `http://localhost:3000` to access the app.

## Contributing
Feel free to open issues or create pull requests if you want to contribute!

## License
This project is licensed under the MIT License.
