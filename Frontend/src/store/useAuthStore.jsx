import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"
import {io} from "socket.io-client"

const BASE_URL = "http://localhost:5002"


export const useAuthStore = create((set, get) => ({
    authUser: null, // to store the user data
    isSigningUp: false, // to show loading spinner
    isLoggingIn: false, // to show loading spinner
    isUpdatingProfile: false, // to show loading spinner
    isCheckingAuth: true, // to show loading spinner
    onlineUsers: [], // to store the online users
    socket: null,
    

    checkAuth: async () => { // to check if the user is already logged in
        try {
            const res = await axiosInstance.get("/auth/check") // to send the checkAuth request to the server
            set({ authUser: res.data }) // to set the authUser state to the response data

            get().connectSocket()
        } catch (error) {
            console.log("Error in checkAuth : ", error);
            set({ authUser: null })
        }
        finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => { // to handle the signup request
        set({ isSigningUp: true }) // to show loading spinner 
        try {
            const res = await axiosInstance.post("/auth/signup", data) // to send the signup request to the server
            set({ authUser: res.data }) // to set the authUser state to the response data
            toast.success("Account created successfully")

            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message) // to show error message
        }
        finally {
            set({ isSigningUp: false }); // to hide loading spinner
        }

    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout") // to send the logout request to the server
            set({ authUser: null }) // to set the authUser state to null
            toast.success("Logged out successfully")
            get().disconnectSocket() 

        } catch (error) {
            toast.error(error.response.data.message) // to show error message

        }
    },

    login: async (data) => { // to handle the login request
        set({ isLoggingIn: true }) // to show loading spinner
        try {
            const res = await axiosInstance.post("/auth/login", data) // to send the login request to the server
            set({ authUser: res.data }) // to set the authUser state to the response data
            toast.success("Account logged in successfully")

            get().connectSocket()
        } catch (error) {
            toast.error(error.response.data.message) // to show error message
        }
        finally {
            set({ isLoggingIn: false }); // to hide loading spinner
        }

    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })

        try {
            const res = await axiosInstance.put("auth/update-profile", data)
            set({authUser: res.data})
            toast.success("Profile updated successfully")

        } catch (error) {
            console.log("Error in update profile pic : ", error);
            toast.error(error.response.data.message)
        }
        finally{
            set({isUpdatingProfile: false})
        }


    },

    connectSocket: () => {
        const {authUser} = get()
        if(!authUser || get().socket?.connected) return // user is not authenticated or user is already connected

        const socket = io(BASE_URL,{
            query: {
                userId: authUser._id,
            }
        })
        socket.connect()
        set({socket: socket})

        socket.on("getOnlineUsers",(userIds)=>{
            set({onlineUsers: userIds})

        })
    },
    disconnectSocket: () => {
        if(get().socket?.connected) get().socket.disconnect() 
    },


}))