# Rehearsal Scheduler

A comprehensive web application for bands to schedule rehearsals, track attendance, and optimize practice time.

## 🎵 Overview

Rehearsal Scheduler is a specialized tool designed to solve the common challenges musicians face when coordinating practice sessions. The application streamlines the entire rehearsal process, from finding optimal practice times to tracking progress and managing resources.

## ✨ Features

### Core Features

- **Shared Calendar System**: View and manage rehearsal schedules in an intuitive calendar interface with personal calendar integration
- **Availability Management**: Poll band members for availability and get intelligent suggestions for optimal rehearsal times
- **Notification System**: Automatic reminders and customizable notifications about schedule changes
- **Attendance Tracking**: Track attendance patterns and generate reports
- **Setlist Management**: Create and share setlists for specific rehearsals with time tracking
- **Task Assignment**: Assign preparation tasks to ensure everyone comes prepared
- **Venue Management**: Save venue details and track availability

### Advanced Features

- **Smart Scheduling Algorithm**: Suggests optimal rehearsal times based on historical data and member preferences
- **Progress Tracking**: Monitor rehearsal productivity and progress on songs over time
- **Equipment Coordination**: Coordinate equipment needs for rehearsals
- **Communication Hub**: Dedicated chat and resource sharing for each rehearsal

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux with Redux Toolkit
- Material-UI for responsive design
- FullCalendar.js for calendar visualization
- Chart.js for attendance and progress visualization

### Backend
- Node.js with Express
- MongoDB for data storage
- Socket.io for real-time updates
- JWT authentication
- SendGrid for email notifications
- Twilio for SMS notifications (optional)

### DevOps
- Docker for containerization
- AWS for hosting
- GitHub Actions for CI/CD
- MongoDB Atlas for database hosting

## 📱 Mobile Support

- Responsive web design with Progressive Web App capabilities
- Future expansion: Native mobile applications using React Native

## 📋 Requirements

- Node.js (v18+)
- MongoDB (v5+)
- npm or yarn
- Modern web browser

## 🚀 Getting Started

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dxaginfo/rehearsal-scheduler-20250621.git
   cd rehearsal-scheduler-20250621
   ```

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables
   ```bash
   # In the backend directory, create a .env file with the following:
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/rehearsal-scheduler
   JWT_SECRET=your_jwt_secret
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

4. Start development servers
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server in a new terminal
   cd frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Docker Setup

1. Build and run using Docker Compose
   ```bash
   docker-compose up -d
   ```

2. Access the application at `http://localhost:3000`

## 🏗️ Project Structure

```
rehearsal-scheduler/
├── backend/               # Express server
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   └── utils/             # Utility functions
├── frontend/              # React application
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store and slices
│   │   ├── services/      # API service calls
│   │   └── utils/         # Utility functions
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile.backend     # Backend Dockerfile
└── Dockerfile.frontend    # Frontend Dockerfile
```

## 🔐 Security Features

- JWT-based authentication with proper expiration
- Role-based access control (member, leader, admin)
- Password storage using bcrypt
- HTTPS for all traffic
- Input validation and sanitization
- Rate limiting to prevent brute force attacks

## 🌐 Integration Capabilities

- Google/Apple/Microsoft Calendar integration
- Spotify integration for setlist creation
- SoundCloud/YouTube integration for sharing reference tracks
- Slack/Discord webhook integration for notifications
- Dropbox/Google Drive integration for file sharing

## 📊 Database Schema

The application uses MongoDB with the following main collections:

- **Users**: Band members and administrators
- **Bands**: Musical groups with members
- **Rehearsals**: Scheduled practice sessions
- **Attendance**: Tracking who attended which rehearsal
- **Availability**: Member availability for scheduling
- **Venues**: Practice and performance locations
- **Setlists**: Songs for specific rehearsals
- **Tasks**: Preparation tasks for rehearsals

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

Project Link: [https://github.com/dxaginfo/rehearsal-scheduler-20250621](https://github.com/dxaginfo/rehearsal-scheduler-20250621)