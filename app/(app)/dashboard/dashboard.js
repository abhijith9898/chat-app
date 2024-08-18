import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useAuth } from '../../../context/authContext'
import SideBar from '../../../components/sideBar/sideBar'
import { StatusBar } from 'expo-status-bar'
import ChatList from '../../../components/chatList/chatList'
import { getDocs, query, where } from 'firebase/firestore'
import { usersRef } from '../../../database/config'
import Loader from '../../../components/loader';


export default function Dashboard() {
  const {logOut, user} = useAuth();
  console.log("dashboard user", user)
  const [userList, setUserList] = useState([])
  
  const handleGetUsers = async () => {
    const customQuery = query(usersRef, where('userId', '!=', user?.userId))
    console.log('Custom query', customQuery, usersRef)
    const resData = await getDocs(customQuery);
    let userData = []
    resData.forEach(item => [
      userData.push({ ...item.data() })
    ])
    console.log("fetch users:", userData)
    setUserList(userData);
  }

  useEffect( ()=>{
    console.log("useeffect dashboard")
    if(user?.userId){
    console.log("useeffect dashboard user", user)

      handleGetUsers()
    }
  },[user?.userId])
  
  return (
    <View style={styles.container} >
      <StatusBar style='light'/>
      {
      userList?.length > 0?(
        <ChatList currentUser={user} userList={userList}/>
      )
      :(
        <View style={styles.loading}>
           <Loader/>
        </View>
      )
      }
    </View>
  )
}