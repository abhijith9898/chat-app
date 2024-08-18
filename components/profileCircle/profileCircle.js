import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'

export default function ProfileCircle({letter, bgColor, letterColor}) {
    const styles = useStyles()
  return (
    <View style={[styles.circle, { backgroundColor: bgColor }]}>
      <Text style={[styles.letter, { color: letterColor}]}>{letter}</Text>
    </View>
  )
}