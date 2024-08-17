import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useAuth } from '../../../context/authContext'
import SideBar from '../../../components/sideBar/sideBar'


export default function Dashboard() {
  const {logOut, user} = useAuth();
  const handleLogOut = async ()=>{
    await logOut();
  }
  console.log('User Details: ', user)
  return (
    <View style={styles.container} >
      <Pressable onPress={handleLogOut}>
        <Text>Log Out</Text>
      </Pressable>
      <Text>Name: {user.name}</Text>  

      {/* <SideBar /> */}
    </View>
  )
}