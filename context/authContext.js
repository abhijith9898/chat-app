import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../database/config'
import { doc, getDoc,setDoc } from "firebase/firestore";

export const AuthContext =  createContext();
export const AuthContextProvider =  ({children})=>{
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated]= useState(undefined)

    useEffect(()=>{        
        // setAuthenticated(false)
        const authcheck = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthenticated(true)
                setUser(user)
            } else{
                setAuthenticated(false)
                setUser(null)
            }
        });
        return authcheck;
    },[])

    const logIn = async(email, password)=>{
        try {
            
        } catch (error) {
            console.log("Error:", error)
        }
    }

    const logOut = async(email, password)=>{
        try {
            
        } catch (error) {
            console.log("Error:", error)
        }
    }

    const signUp = async(email, password, userName, profile)=>{
        try {
            const response =  await createUserWithEmailAndPassword(auth, email, password);
            console.log('response', response?.user)
            await setDoc(doc(database, 'users', response?.user?.uid, {
                userName,
                userId: response?.user?.uid
            }))
            let signUpData = {
                success: true,
                data: response?.user
            }
            return signUpData
        } catch (error) {
            console.log("Error:", error)
            return {
                success: false, message: error.message
            }
        }
    }

    return (
        <AuthContext.Provider value={{user, authenticated, logIn, logOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const data =  useContext(AuthContext);

    if(!data){
        throw new Error("useAuth should be wrapped inside AuthContextProvider")
    }

    return data;
}