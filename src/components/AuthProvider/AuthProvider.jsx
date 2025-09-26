import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config'


export const AuthContext = createContext()  // export authContext use overall
    const auth = getAuth(app) // get app from ../Firebase/firebase.config

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // user register with firebase using email and password
    const createUser =(email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    };

    // const user = {name:"ismail"} // for check context and provide
    const authData ={
        user,        //pass everywhere for where need user
        setUser,     //pass everywhere for where need user
        createUser,  // pass to register page for register
    }

    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;