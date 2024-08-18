import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MessageItem from '../messageItem/messageItem'

export default function MessageList({messageList, currentUser}) {
  return (
    <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle= {{paddingTop: 10}}>
       {
         messageList.map((message, index)=>{
            return (
              <MessageItem message={message} key={index} currentUser = {currentUser} />
            )
        })
       }
    </ScrollView>
  )
}