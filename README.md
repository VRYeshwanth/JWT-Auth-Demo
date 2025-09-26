# JWT Authentication Demo

This is a backend-only application that implements authentication using JSON Web Tokens (JWT). It provides API endpoints for user registration, login, and accessing protected routes

## ⚡ Features

- User registration and login via API endpoints
- JWT token generation and verification

## Prerequisites

- Node.js
- PostgreSQL
- Environment Variables (.env)

# Getting Started

## 1. Clone the repository
```bash
git clone https://github.com/VRYeshwanth/JWT-Auth-Demo
cd JWT-Auth-Demo
```

## 2. Install the dependencies
```bash
npm install
```

## 3. Setup environment variables (.env) file
```
PORT=your_port
DATABASE_URL=your_postgres_connection_string
```

## 4. Running the server
```bash
npm run dev
```

# API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /auth/register | Register new user |
| POST | /auth/login | Login user |
| GET | /api/profile | Access protected routes |

## Usage

- Register a user using `/auth/register` endpoint
- Login via `/auth/login` endpoint to get a JWT token
-Access protected endpoints by including the JWT in the `Authorization` header as `Bearer <token>`