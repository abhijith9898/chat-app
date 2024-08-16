import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../database/config'
import { doc, getDoc,setDoc, collection } from "firebase/firestore";

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

    const signUp = async(name, email, password)=>{
        try {
            const response =  await createUserWithEmailAndPassword(auth, email, password);
            console.log('auth context response', response?.user.uid)

            const dbCollection = collection(database, 'users');
            const document = {
                name: name,
                email: email,
                userId: response?.user?.uid
            }
            const docRef = doc(dbCollection, response?.user?.uid)
            await setDoc(docRef, document);

            console.log("setDoc worked")

            let signUpData = {
                success: true,
                data: response?.user
            }
            return signUpData
        } catch (error) {
            console.log("Error:", error)
            let message
            if(error.message.includes('auth/invalid-email')){
                message = 'Invalid Email'
            }
            return {
                
                success: false, message: message
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