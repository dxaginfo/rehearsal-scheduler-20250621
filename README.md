# Rehearsal Scheduler

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

## Overview

Rehearsal Scheduler is a comprehensive web application designed to help bands and musical groups efficiently schedule rehearsals, track attendance, and optimize practice time. This application solves the common challenges musicians face when coordinating practice sessions.

## 🎵 Key Features

### Core Features
- **User Management**: Registration, authentication, and profile management
- **Band Management**: Create and manage bands, invite members
- **Calendar System**: Shared calendar with scheduling and conflict detection
- **Rehearsal Management**: Detail pages, attendance tracking, notes
- **Notification System**: Email and optional SMS notifications
- **Venue Management**: Venue details, equipment, and booking history

### Advanced Features
- **Setlist Management**: Song organization and practice tracking
- **Smart Scheduling**: Intelligent scheduling based on availability
- **Integration Capabilities**: Calendar sync, third-party services
- **Analytics**: Progress tracking, attendance trends, performance metrics
- **Collaboration Tools**: Task assignment, resource sharing

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js with Redux
- **UI Library**: Material-UI for responsive design
- **Calendar**: FullCalendar.js for calendar visualization
- **Forms**: Formik with Yup for validation

### Backend
- **Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.io for live updates
- **Authentication**: JWT-based authentication
- **Notifications**: SendGrid (email) and Twilio (SMS)

### DevOps
- **Containerization**: Docker and Docker Compose
- **Deployment**: AWS ready

## 📋 Prerequisites

- Node.js (v18 or later)
- MongoDB (v4.4 or later)
- Docker and Docker Compose (for containerized deployment)

## 🚀 Getting Started

### Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/rehearsal-scheduler-20250621.git
   cd rehearsal-scheduler-20250621
   ```

2. Create `.env` file in the project root with the following variables:
   ```
   MONGO_ROOT_USER=admin
   MONGO_ROOT_PASSWORD=your_secure_password
   MONGO_DB=rehearsal-scheduler
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   CLIENT_URL=http://localhost:3000
   API_PORT=5000
   CLIENT_PORT=3000
   ```

3. Start the application:
   ```bash
   docker-compose up -d
   ```

4. Access the application at `http://localhost:3000`

### Manual Setup

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/rehearsal-scheduler
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   CLIENT_URL=http://localhost:3000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## 🌐 API Documentation

API documentation is available at `/api/docs` when running the backend server.

## 📐 Project Structure

```
rehearsal-scheduler/
├── backend/               # Backend Node.js application
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── index.js       # Entry point
│   ├── .env               # Environment variables (create this)
│   ├── package.json
│   └── Dockerfile
├── frontend/              # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── layouts/       # Page layouts
│   │   ├── pages/         # Application pages
│   │   ├── redux/         # State management
│   │   ├── utils/         # Utility functions
│   │   └── App.js         # Main component
│   ├── .env               # Environment variables (create this)
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # This file
```

## 🔒 Security

- JWT-based authentication with proper expiration
- Secure password storage with bcrypt
- Role-based access control
- Rate limiting to prevent brute force attacks
- HTTPS enforcement in production

## 📱 Mobile Responsiveness

The application is designed with mobile responsiveness in mind, ensuring a seamless user experience across all devices.

## 🧪 Testing

Run tests with the following commands:

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

For questions or support, please contact the project maintainer at [dxag.info@gmail.com](mailto:dxag.info@gmail.com).

---

Made with ❤️ for musicians