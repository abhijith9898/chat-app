import { View, Text } from 'react-native'
import React from 'react'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import useStyles from './styles'

export default function MessageItem({message, currentUser}) {
    const styles = useStyles()
  if(currentUser?.userId == message?.userId){
    return (
        <View style={styles.container}>
            <View style={styles.containerWidth}>
                <View style={styles.rightMessage}>
                    <Text style={styles.text}>
                        {message?.message}
                    </Text>
                </View>
            </View>
        </View>
      )
  } else{
    return(
        <View style={styles.leftContainer}>
            <View style={styles.leftMessage}>
                <Text style={styles.text}>
                    {message?.message}
                </Text>
            </View>
        </View>
    )
  }
}