import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

export default function Loader() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme] || Colors.light;
    console.log("colors", colorScheme)
  return (
    <View >
      <ActivityIndicator size='larger' color={colors.loginLoader}/>
    </View>
  )
}