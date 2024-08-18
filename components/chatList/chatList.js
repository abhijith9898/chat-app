import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { FlatList } from 'react-native'
import ChatItem from '../chatItem/chatItem'
import { useRouter } from 'expo-router'

export default function ChatList({currentUser, userList}) {
    const styles = useStyles()
    const router = useRouter()
  return (
    <View style={styles.container}>
      {/* <Text>ChatList</Text> */}
          <FlatList
              data={userList}
              contentContainerStyle={{
                //   flex: 1,
                  paddingVertical: 25,
              }}
              keyExtractor={item => Math.random()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => <ChatItem item={item} currentUser={currentUser} router={router} index={index}/>}
      />
    </View>
  )
}