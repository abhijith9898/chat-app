import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { Stack } from 'expo-router'
import ProfileCircle from '../profileCircle/profileCircle'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function InboxHeader({user, router}) {
    const styles = useStyles()
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme] || Colors.light;
  return (
    // <View style={styles.container}>
    //   <Text>InboxHeader</Text>
    // </View>
    <Stack.Screen style={styles.container} options={{
        title: '',
        headerShadowVisible:false,
        headerStyle:{
            backgroundColor: colors.inboxHeader,
        },
        headerLeft:()=>(
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=> router.back()}>
                    <Ionicons name="chevron-back" size={24} color={colors.inboxHeaderBack} />
                </TouchableOpacity>
                <View style={styles.profile}>
                    {/* <ProfileCircle letter={'A'}  bgColor='#fff' letterColor='#0d1f2d'/> */}
                    <ProfileCircle letter={user?.name?.charAt(0).toUpperCase()} bgColor='#fff' letterColor='#0d1f2d'/>
                    <Text style={styles.profileName}>{user?.name}</Text>
                </View>
            </View>
        ),
        headerRight:()=>(
            <View style={styles.callContainer}>
                <Ionicons name="call" size={24} color={colors.inboxHeaderCall} />
                <Feather name="video" size={24} color={colors.inboxHeaderCall} />
            </View>
        )
    }}/>
  )
}