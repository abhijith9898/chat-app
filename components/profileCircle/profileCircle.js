import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'

export default function ProfileCircle({letter, color}) {
    const styles = useStyles()
  return (
    <View style={[styles.circle, { backgroundColor: color }]}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  )
}