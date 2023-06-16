import React, { createContext, useEffect, useState } from 'react';
import app1 from '../../firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,sendEmailVerification,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext=createContext();
const auth=getAuth(app1);
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

  
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
       
          setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo={user,googleSignIn,logOutUser,createUser,logInUser,loading,updateUserProfile,verifyEmail,setLoading}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;