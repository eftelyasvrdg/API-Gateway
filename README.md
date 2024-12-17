API Gateway Documentation

Overview

The goal of this project is to create an API Gateway that can handle and forward API requests for numerous endpoints. The gateway ensures scalability, flexibility, and a clean architecture by combining requests to pre-existing backend services using Node.js, Docker, and middlewares.

Technologies Used

Backend Development: Node.js, JavaScript

Gateway Middleware: http-proxy-middleware

Containerization: Docker

Code Editor: Visual Studio Code

Project Structure

api-gateway/
├── Dockerfile               # Docker configuration (optional)
├── package.json             # Node.js project dependencies and metadata
├── package-lock.json        # Dependency lockfile
├── index.js                 # Main entry point for the API Gateway
├── config/
│   ├── routes.js            # Central configuration for routes/proxies
│   └── auth.js              # Authentication middleware (if needed)
├── middlewares/
│   ├── logger.js            # Middleware for logging requests
│   └── errorHandler.js      # Middleware for handling errors globally
└── tests/
    ├── gateway.test.js      # Tests for gateway functionality
    ├── mock-server.js       # Mock server to simulate backend services (for testing)

Key Features

API Routing & Proxying

Centralized gateways make managing many services easier by routing requests to backend endpoints according to specified parameters.

Middlewares

Logger Middleware: Logs incoming requests for monitoring.

Error Handler Middleware: Handles errors globally and provides user-friendly messages.

Docker Support

Dockerized the gateway for easier deployment and scalability.

Testing

Mock servers simulate backend API responses.

API Routes

The API Gateway manages the following routes:

Route

Target Service

Path Rewrite

/listings

http://localhost:3000

/listings

/listings-query

http://localhost:3000

/listings

/stays

http://localhost:3000

/stays

These routes are defined in config/routes.js for ease of management and scalability.

Learning Outcomes

API Gateway Design

Learned how to implement an API Gateway to mediate requests between clients and backend services.

Understood the benefits of separation of concerns, flexibility, and scalability.

Dockerization

Improved understanding of containerizing Node.js applications.

Learned how to deploy the gateway independently with Docker.

Middleware Implementation

Added middlewares to enhance user experience:

Request logging

Error handling

Testing

Simulated backend APIs with mock servers to ensure functionality.

Architectural Decisions

New Project vs Midterm Integration:

Decided to build the gateway as a separate project for:

Separation of Concerns

Scalability: Easy to add more services.

Risk Management: Avoid breaking the midterm project.

Challenges

Docker Integration

Even though it wasn’t my first time working with Docker, it still challenged me in ways. But this project really helped me understand its purpose and how it can be useful.

Gateway Design

Understanding http-proxy-middleware and configuring routes required initial research.

Before this project, I didn’t even understand the concept of gateway APIs, which is why I am very happy with the end result.

Conclusion

This project significantly enhanced my understanding of API gateways, middleware design, and Docker. By separating the gateway from the midterm project, I ensured a clean and scalable architecture. The testing and Dockerization process deepened my knowledge in managing APIs effectively.

