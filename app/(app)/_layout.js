import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Header from '../../components/header/header'

export default function _layout() {
  return (
    // <Stack screenOptions={{
    //   headerShown: false
    // }}/>
    <Stack>
      <Stack.Screen 
      name='dashboard/dashboard'
      options={{
        header: ()=> <Header/>  
      }}/>
    </Stack>
  )
}