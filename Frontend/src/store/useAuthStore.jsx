import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"
import axios from "axios"


export const useAuthStore = create((set) => ({
    authUser: null, // to store the user data
    isSigningUp: false, // to show loading spinner
    isLoggingIn: false, // to show loading spinner
    isUpdatingProfile: false, // to show loading spinner
    isCheckingAuth: true, // to show loading spinner
    onlineUsers: [], // to store the online users

    checkAuth: async () => { // to check if the user is already logged in
        try {
            const res = await axiosInstance.get("/auth/check") // to send the checkAuth request to the server
            set({ authUser: res.data }) // to set the authUser state to the response data
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


    }

}))