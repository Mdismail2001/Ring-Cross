import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'


export const AuthContext = createContext()  // export authContext use overall
    const auth = getAuth(app) // get app from ../Firebase/firebase.config

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(false);
    // console.log(user)

    // user register with firebase using email and password
    const createUser =(email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    };

    // current user manager or onAuth state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setUser(user);
            setLoad(false);
        })
        return unsubscribe;
    },[]);

    // logout function 

    const logout =()=>{
       return signOut(auth)
    };

    // login function

    const login =( email, password)=>{
        setLoad(true);
       return signInWithEmailAndPassword(auth, email, password)
    };

    // const user = {name:"ismail"} // for check context and provide
    const authData ={
        user,        //pass everywhere for where need user
        setUser,     //pass everywhere for where need user
        createUser,  // pass to register page for register
        logout,     // pass to home 
        login,    // pass to the login page
    }

    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;