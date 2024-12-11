import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from './Pages/HomePage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import Navbar from './Components/Navbar.jsx'
import { useAuthStore } from './store/useAuthStore.jsx'
import {Loader} from "lucide-react"
import {Toaster } from "react-hot-toast"

function App() {
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();
  useEffect(()=>{
    checkAuth()
  }, [checkAuth])

  console.log({authUser}); 

  if(isCheckingAuth && !authUser){ // if the user is checking the auth and the user is not authenticated
    return(
      <div className=' flex items-center justify-center h-screen'>
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to = "/login"/> } />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to = "/" /> } />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to = "/"/>} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to = "/login"/> } />
      </Routes>

      <Toaster/>

    </div>
  )
}

export default App