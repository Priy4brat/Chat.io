# Chat.io

Chat.io is a modern messaging app for seamless, instant communication. Built with React, Node.js, and Socket.io, it features real-time messaging, customizable profiles, and media sharing. Designed for speed and responsiveness, it's perfect for connecting with friends, family, or teams effortlessly!

---

## Key Features

- **Instant Messaging**: Exchange messages in real-time without any delay.  
- **Signup Using Email ID**: Easily create an account using your email.  
- **Real-Time Messaging with Socket.io**: Live, bidirectional communication for an uninterrupted chat experience.  
- **Online User Status**: See when users are online or offline.  
- **Responsive Design**: Fully optimized for both desktop and mobile devices.  
- **Customizable Profiles**: Upload avatars and personalize user profiles.  
- **Emoji and Media Sharing**: Add a personal touch to your chats with emojis and media uploads.  
- **Authentication & Authorization**: Secure login and access control using JWT.  
- **Secure Communication**: Messages are transmitted using secure protocols to ensure privacy.  

---

## 🌟 Tech Stack

- **MERN**: MongoDB, Express.js, React.js, Node.js  
- **Real-Time Communication**: Socket.io  
- **UI Styling**: Tailwind CSS + Daisy UI  
- **State Management**: Zustand  
- **Authentication & Authorization**: JWT for secure access control  
- **HTTP Requests**: Axios for making API calls from the frontend  

---

## Installation and Setup

Follow these steps to set up the project locally:


1. **Clone the repository:**
   ```bash
   git clone https://github.com/Priy4brat/Chat.io.git
   cd chatio
   ```

2. **Install dependencies:**
   ```bash
   npm run build
   ```

3. **Start the development server:**
   ```bash
   npm run start
   ```

4. **Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   # MongoDB Configuration
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0
   MONGODB_PASS=<password>

   # Server Configuration
   PORT=5001

   # JWT Secret Key
   JWT_SECRET=mysecretkey

   # Environment Mode
   NODE_ENV= development 

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

## Usage

- Open the app in your browser at `http://localhost:5001`.
- Sign up or log in to start chatting.
- Customize your profile and enjoy real-time messaging!

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the app.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
