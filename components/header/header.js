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
    console.log("header auth",)
  return (
      <View style={styles.container}>
          <Menu>
              <MenuTrigger>
                <ProfileCircle letter={user?.name?.charAt(0).toUpperCase()} color='#fff' />
              </MenuTrigger>
              <MenuOptions>
                  <MenuOption onSelect={() => {
                    
                }} >
                      <Text>Dark Mode
                          <MaterialIcons name="dark-mode" size={24} color="black" />
                      </Text>
                </MenuOption>
                  <MenuOption onSelect={() => {

                  }} >
                      <Text >Log out <Feather name="log-out" size={24} color="black" /></Text>
                  </MenuOption>
              </MenuOptions>
          </Menu>
      </View>
  )
}