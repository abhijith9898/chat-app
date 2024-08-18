import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { TouchableOpacity } from 'react-native';
import ProfileCircle from '../profileCircle/profileCircle';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { database } from '../../database/config';

export default function ChatItem({item,router,currentUser, index}) {
    const styles = useStyles();
    console.log('currentuser', currentUser)
    console.log("item:", item)
    const handleOpenInbox = ()=>{
        router.push({pathname:'inbox/inbox', params:item})
    }

    const [lastMessage, setLastMessage]=useState(undefined)

    const getInboxId = (userId1, userId2)=>{
      console.log('two users', userId1, userId2)
      let sortId = [userId1, userId2].sort();
      const inboxId = sortId.join('-');
      console.log("joined", inboxId)
      return inboxId;
    };

    useEffect(()=>{
     
      let inboxId = getInboxId(currentUser?.userId, item?.userId)
      const docRef = doc(database, 'inboxes', inboxId);
      const messagesRef = collection(docRef, 'messages');
      const customQuery = query(messagesRef, orderBy('createdAt', 'desc'))
      let response = onSnapshot(customQuery, (snapshot)=>{
        let allMessages = snapshot.docs.map(doc=>{
          return doc.data()
        })
        setLastMessage(allMessages[0]? allMessages[0]:null)
      })
  
      return response;
    }, [])

    const renderlastMessage = ()=>{
      if(typeof lastMessage == 'undefined'){
        return 'Loading..'
      }
      if(lastMessage){
          if(currentUser?.userId == lastMessage?.userId){
            return "You: " + lastMessage?.message
          } else{
            return lastMessage?.message
          }
      }else{
          return 'Say Hi '
      }
    }

    console.log('last message', lastMessage)

  return (
    <View style={styles.container}>
      {/* <Text>ChatItem</Text> */}
          <TouchableOpacity onPress={handleOpenInbox} style={styles.profileContainer}>
              <ProfileCircle letter={item?.name?.charAt(0).toUpperCase()} bgColor='#546a7b' letterColor='#fff' />

              <View style={styles.profileDetailContainer}>
                  <View style={styles.profileInfo}>
                      <Text style={styles.name}>{item?.name}</Text>
                      <Text style={styles.time}>Time</Text>
                  </View>
                  <Text style={styles.lastMessage}>{renderlastMessage()}</Text>
              </View>
          </TouchableOpacity>
      
    </View>
  )
}