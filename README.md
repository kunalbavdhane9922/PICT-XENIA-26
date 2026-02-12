# FlowState: AI-Enhanced Task & Energy Manager

![FlowState Banner](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80)

## 🚀 Overview

**FlowState** is a premium, AI-enhanced productivity dashboard designed to help users optimize their work sessions based on their real-time energy levels. By tracking work velocity, error rates, and fatigue, FlowState provides actionable insights to maintain peak performance (the "Flow State").

## ✨ Features

- **⚡ Real-time Energy Tracking**: Visualizes current energy levels (Focused, Neutral, Fatigued) with a dynamic energy meter.
- **📊 Live Productivity Metrics**: Tracks current task velocity, error rates, and overall productivity score.
- **🎮 Productivity Arena**: A high-fidelity gamification system with streaks, heatmaps, rewards, and leaderboards.
- **📈 Advanced Analytics**: Deep dives into weekly, monthly, and yearly productivity trends with data-driven insights.
- **🔐 Secure Authentication**: Full user authentication system using JWT, bcrypt password hashing, and MongoDB data isolation.
- **🤖 AI Task Recommendations**: Intelligent next-task suggestions based on your current performance patterns.

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React Hooks & Context API

### Backend
- **Server**: Node.js & Express
- **Database**: MongoDB (Mongoose)
- **Security**: JWT (JSON Web Tokens), Bcrypt.js
- **Architecture**: Modular Controller-Route-Model pattern

## 📦 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or on Atlas)

### 1. Database Setup
Ensure MongoDB is running on your machine. By default, the app looks for `mongodb://localhost:27017/flowstate`.

### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the `backend` folder (or use the provided `.env` if it exists):
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/flowstate
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the `flowstate` directory:
   ```bash
   cd flowstate
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
├── flowstate/               # React Frontend (Vite)
│   ├── src/
│   │   ├── components/      # UI Components (Energy Panels, Task Queues)
│   │   ├── pages/           # Dashboard, Planner, Analytics, Gamification
│   │   └── App.jsx          # Main routing logic
├── backend/                 # Node.js/Express Backend
│   ├── src/
│   │   ├── models/          # Mongoose Schemas (User, Task, Activity)
│   │   ├── controllers/     # Business logic
│   │   ├── routes/          # API Endpoints
│   │   ├── middleware/      # Auth & Security
│   │   └── server.js        # Entry point
└── README.md                # Project documentation
```

## 🔐 Auth & Data Isolation
- **Authentication**: Uses JWT sent in the `Authorization` header as a Bearer token.
- **Isolation**: Every database query is scoped to the `userId` extracted from the JWT, ensuring users can never access each other's data.

## 📄 License

This project is licensed under the MIT License.

---
Built with ❤️ for advanced productivity management.
