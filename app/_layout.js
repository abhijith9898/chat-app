import { Slot, useRouter, useSegments } from 'expo-router';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

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
      router.replace('dashboard/dashboard')
    } else if(!authenticated){
      router.replace('logIn/logIn')
    }
  }, [authenticated])

  return <Slot />
}

export default function RootLayout() {
  return (
    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </MenuProvider>
  )
}
