# Kalrav | The Chat App

Kalrav is a real-time chat application designed to facilitate seamless communication between users. The application supports user authentication, real-time messaging, and a responsive user interface. Built with modern web technologies, Kalrav ensures a smooth and interactive user experience.

## 🚀 Features

### 🔐 User Authentication
- Secure user registration and login using JWT.
- Password hashing with Bcrypt.js.
- Protected routes to ensure secure access to resources.

### 💬 Real-Time Messaging
- Real-time chat functionality using Socket.io.
- Instant message delivery and updates.
- Typing indicators and read receipts.

### 📱 Responsive Design
- Mobile-first design with Tailwind CSS.
- Responsive layout for various screen sizes.
- Smooth transitions and animations.

### 🔔 Notifications
- Real-time notifications for new messages.
- Toast notifications for user feedback.

---

## 🛠️ Technologies Used

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For styling and responsive design.
- **React Hot Toast**: For notifications.
- **React Icons**: For iconography.

### Backend
- **Node.js**: For server-side logic.
- **Express**: For building the RESTful API.
- **Mongoose**: For MongoDB object modeling.
- **Socket.io**: For real-time communication.
- **JWT**: For authentication and authorization.
- **Bcrypt.js**: For password hashing.

### Database
- **MongoDB Atlas**: For cloud-based database management.

---

## 📂 Project Structure

### Frontend
- **Components/**: Reusable UI components such as `Message`, `MessageInput`, and `MessageContainer`.
- **Hooks/**: Custom hooks for managing state and side effects, such as `useLogin` and `useSendMessage`.
- **Context/**: Context providers for managing global state, such as `AuthContext` and `SocketContext`.
- **Styles/**: Tailwind CSS for styling and responsive design.

### Backend
- **Routes/**: RESTful API routes for authentication, messaging, and user management.
- **Controllers/**: Logic for handling API requests and responses.
- **Models/**: Mongoose models for MongoDB collections.
- **Middleware/**: Middleware for authentication and error handling.
- **Socket/**: Socket.io setup for real-time communication.

---

## ⚙️ Installation

### Prerequisites
- **Node.js** installed
- **npm** package manager
- **MongoDB Atlas** account

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/rebeljelly2147/Kalrav.git
   cd Kalrav
   ```

2. **Install dependencies:**
   ```sh
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory and add the following:
   ```sh
   PORT=8000
   MONGO_DB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

---

## ▶️ Usage

### Running the Application
1. **Start the backend server:**
   ```sh
   cd backend
   npm run server
   ```

2. **Start the frontend development server:**
   ```sh
   cd ../frontend
   npm run dev
   ```

3. **Open the application in your browser:**
   ```
   http://localhost:3000
   ```

---

## 🚀 Deployment

### 🌐 Backend (Render)
1. **Create a new web service on Render:**
   - Connect your GitHub repository.
   - Set the build command: `npm install && npm run build`.
   - Set the start command: `npm start`.
   
2. **Add environment variables:**
   ```sh
   MONGO_DB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=production
   PORT=8000
   ```

### 🎯 Frontend (Vercel)
1. **Create a new project on Vercel:**
   - Connect your GitHub repository.
   - Set the build command: `npm run build`.
   - Set the output directory: `dist`.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## 📜 License

This project is licensed under the MIT License.

---

🌟 **Kalrav - Connecting People, One Message at a Time!** 🚀
