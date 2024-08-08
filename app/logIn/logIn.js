import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { useState } from 'react';
import useStyles from './styles'

export default function LogIn(){
    const styles = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/connect-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}