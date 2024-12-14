
import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast"

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            const res = await axiosInstance.get("/messages/users")
            set({ users: res.data })
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to fetch users")
        } finally {
            set({ isUsersLoading: false })
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true })
        try {
            const res = await axiosInstance.get(`/messages/${userId}`)
            set({ messages: res.data })
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to fetch messages")
        } finally {
            set({ isMessagesLoading: false })
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get()

        // Ensure selectedUser is set before proceeding
        if (!selectedUser || !selectedUser._id) {
            toast.error("No selected user. Please select a user to send a message.");
            return;
        }

        console.log('Selected User:', selectedUser);
        console.log('Message Data:', messageData);

        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, {
                text: messageData.text,   // The message text
                image: messageData.image, // The message image (if any)
            });
            set({ messages: [...messages, res.data] });
        } catch (error) {
            // Handle the error gracefully and log it
            const errorMessage = error?.response?.data?.message || "Failed to send message";
            console.error("Error sending mes    sage:", errorMessage);
            toast.error(errorMessage);
        }
    },

    setSelectedUser: (selectedUser) => {
        set({ selectedUser })
    }
}));
