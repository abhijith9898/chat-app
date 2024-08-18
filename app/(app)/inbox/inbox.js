import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useStyles from './styles'
import Header from '../../../components/header/header'
import InboxHeader from '../../../components/inboxHeader/inboxHeader'
import MessageList from '../../../components/messageList/messageList'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../../constants/Colors';
import { useColorScheme } from 'react-native';
import { useAuth } from '../../../context/authContext'
import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, snapshotEqual, Timestamp } from 'firebase/firestore'
import { dismissBrowser } from 'expo-web-browser'
import { database, usersRef } from '../../../database/config'
import { useRef } from 'react'

export default function Inbox() {
  const styles = useStyles()
  const item = useLocalSearchParams()
  const user = useAuth() //logged user
  console.log('logged user', user)
  const router = useRouter()
  const [messageList, setMessageList] = useState([])
  const messageRef = useRef()
  const inputRef = useRef(null)
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme] || Colors.light;
  console.log('got item data', item)

  useEffect(()=>{
    createChatIfNotExist()

    let inboxId = getInboxId(user?.user?.userId, item?.userId)
    const docRef = doc(database, 'inboxes', inboxId);
    const messagesRef = collection(docRef, 'messages');
    const customQuery = query(messagesRef, orderBy('createdAt', 'asc'))
    let response = onSnapshot(customQuery, (snapshot)=>{
      let allMessages = snapshot.docs.map(doc=>{
        return doc.data()
      })
      setMessageList([...allMessages])
    })

    return response;
  }, [])

  const getInboxId = (userId1, userId2)=>{
    console.log('two users', userId1, userId2)
    let sortId = [userId1, userId2].sort();
    const inboxId = sortId.join('-');
    console.log("joined", inboxId)
    return inboxId;
  };

  const createChatIfNotExist= async ()=>{
    let inboxId = getInboxId(user?.user?.userId, item?.userId);
    await setDoc(doc(database, 'inboxes', inboxId ),{
      inboxId,
      createdAt: Timestamp.fromDate(new Date())
    })
  };

  const handleSend = async()=>{
    let message = messageRef.current.trim()
    if(!message){
      return
    }
    try{
      let inboxId = getInboxId(user?.user?.userId, item?.userId)
      const docRef = doc(database, 'inboxes', inboxId)
      const messagesRef = collection(docRef, 'messages')

      messageRef.current = '';
      if(inputRef){
        inputRef?.current?.clear()
      }

      const newDoc = await addDoc(messagesRef, {
        userId: user?.user?.userId,
        message: message,
        sender: user?.user?.name,
        createdAt: Timestamp.fromDate(new Date)
      })

      console.log("new message id", newDoc.id)
    } catch(error){
      console.log("Error", error.message)
      Alert.alert("Message Send Error", error.message)
    }
  }

  console.log("messages:", messageList)

  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <InboxHeader user={item} router={router}/>
      <View style={styles.messageContainer}>
        <View style={styles.messageList}>
          <MessageList messageList={messageList} currentUser = {user?.user}/>
        </View>
        <View style={styles.sendContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
              ref={inputRef}
                onChangeText={value => messageRef.current = value}
                style={styles.input}
                placeholder='Type Message Here' />
              <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                <Ionicons name="send" size={35} color={colors.messageSendButton} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}