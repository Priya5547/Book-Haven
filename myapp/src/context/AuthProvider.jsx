import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'

import {
  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,
  onAuthStateChanged, signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'


export const AuthContext=createContext()

const googleprovider = new GoogleAuthProvider()
export const AuthProvider = ({children}) => {
  // get Auth
  const auth=getAuth(app)
  
  
  const [user,setUser] =useState(null)
  const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
const signUpWithGmail=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleprovider)
}
const login=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)

}
const logout=()=>{
  localStorage.removeItem('user-data')
  return signOut(auth)
}
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
    console.log(currentUser)
    setUser(currentUser)
    setLoading(false)
  })
  return() => unsubscribe()
},[])
const authInfo={
  user,
  loading,
  createUser,
  signUpWithGmail,
  login,
  logout
}
return(
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
)


  return (
    <div>AuthProvider</div>
  )
}
export default AuthProvider
