import { Slot, useRouter, useSegments } from 'expo-router';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { useEffect } from 'react';

const MainLayout = ()=>{
  const {authenticated} = useAuth()
  const segments = useSegments()
  const router = useRouter();

  useEffect(()=>{
    if(typeof authenticated=='undefined'){
      return;
    }
    const inApp = segments[0]=='(app)';
    if(authenticated && !inApp){
      //redirect to home
      router.replace('chatList')
    } else if(!authenticated){
      //redirect to logIn
      router.replace('logIn/logIn')
    }
  }, [authenticated])

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout/>
    </AuthContextProvider>
  )
}
