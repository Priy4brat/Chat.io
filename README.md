# Chat.io

Chat.io is a modern messaging app for seamless, instant communication. Built with React, Node.js, and Socket.io, it features real-time messaging, secure user authentication, customizable profiles, and media sharing. Designed for speed and responsiveness, it's perfect for connecting with friends, family, or teams effortlessly!

## Key Features

- **Instant Messaging**: Exchange messages in real-time without any delay.
- **User Authentication**: Secure login system to protect user data and conversations.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.
- **Customizable Profiles**: Upload avatars and personalize user profiles.
- **Emoji and Media Sharing**: Add a personal touch to your chats with emojis and media uploads.
- **Secure Communication**: Messages are transmitted using secure protocols to ensure privacy.

## Tech Stack

- **Frontend**: React.js with Tailwind CSS for a sleek and intuitive user interface.
- **Backend**: Node.js/Express for scalable server-side logic.
- **Database**: MongoDB for real-time data storage and retrieval.
- **Real-Time Communication**: Socket.io for live, bidirectional communication between users.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Priy4brat/Chat.io.git
   cd chatio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run the backend server:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

5. **Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   # MongoDB Configuration
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0
   MONGODB_PASS=<password>

   # Server Configuration
   PORT=5002

   # JWT Secret Key
   JWT_SECRET=mysecretkey

   # Environment Mode
   NODE_ENV=development

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

## Usage

- Open the app in your browser at `http://localhost:3000`.
- Sign up or log in to start chatting.
- Customize your profile and enjoy real-time messaging!

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the app.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
