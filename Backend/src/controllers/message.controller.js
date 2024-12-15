import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getRecieverSocketId, io } from "../lib/socket.js";
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id
        const filteredUser = await User.find({_id: {$ne:  loggedInUser}}).select("-password")
        
        res.status(200).json(filteredUser)
    } catch (error) {
        console.log("Error in getUsersForSidebar: ",error.message );
        res.status(500).json({error: "Internal server error"})
        
        
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const myId = req.user._id

        const messages = await Message.find({
            $or: [
                {senderId : myId, receiverId: userToChatId},
                {senderId : userToChatId , receiverId: myId},  
            ],
        })
        
        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller : ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}

export const sendMessage = async (req, res) => {
    try {
       // Extracting receiverId from URL parameters (req.params)
       const { id:receiverId } = req.params;  // receiverId comes from URL

       // Extract text and image from req.body (data in request body)
       const { text, image } = req.body;

    //    console.log('Receiver ID:', receiverId);
    //    console.log('Message Text:', text);
    //    console.log('Message Image:', image);

        // Ensure receiverId is present
        if (!receiverId) {
            return res.status(400).json({ error: "Receiver ID is required" });
        }

        const senderId = req.user._id;

        // Handle image upload if it exists
        let imageUrl = null;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save()

        // realtime functionalities goes here
        const receiverSocketId = getRecieverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage)




    } catch (error) {
        console.log("Error in sendMessage controller : ", error.message);
        res.status(500).json({message: "Internal server error"})
        
        
        
    }
}

