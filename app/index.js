import {View, Text, ActivityIndicator} from 'react-native'
import styles from './styles/main'
import 'react-native-gesture-handler';


export default function App(){
    return(
        <View style={styles.container}>
            <ActivityIndicator style={styles.indicator} size='larger' color='gray'/>
        </View>
    )
}