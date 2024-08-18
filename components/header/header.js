import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'
import ProfileCircle from '../profileCircle/profileCircle'
import { useAuth } from '../../context/authContext'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header() {
    const styles = useStyles()
    const {logOut, user} = useAuth();

    const handleLogOut = async ()=>{
        await logOut();
    }

    const handleDarkMode = async ()=>{
        //Need to implement this
    }

    console.log("header auth",user)
  return (
      <View style={styles.container}>
          <Menu>
              <MenuTrigger>
                <ProfileCircle letter={user?.name?.charAt(0).toUpperCase()} bgColor='#fff' letterColor='#0d1f2d'/>
              </MenuTrigger>
              <MenuOptions customStyles={{
                optionsContainer:{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: 40,
                      marginLeft: -30,
                      shadowOpacity:0.2,
                      borderRadius: 10, 
                      width:150,    
                }
              }}>
                  <MenuOption>
                      <View>
                          <Text>{user?.name?.toUpperCase()}</Text>
                      </View>
                  </MenuOption>
                  <View style={styles.divider}></View>
                  <MenuOption onSelect={() => handleDarkMode()} >
                      <Text>Dark Mode
                          <MaterialIcons name="dark-mode" size={24} color="black" />
                      </Text>
                  </MenuOption>
                  <View style={styles.divider}></View>
                  <MenuOption onSelect={() => handleLogOut()} >
                      <Text >Log Out <Feather name="log-out" size={24} color="black" /></Text>
                  </MenuOption>
              </MenuOptions>
          </Menu>
      </View>
  )
}