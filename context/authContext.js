import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext =  createContext();
export const AuthContextProvider =  ({children})=>{
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated]= useState(undefined)

    useEffect(()=>{        
        setAuthenticated(false)
    })

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
            
        } catch (error) {
            console.log("Error:", error)
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