import {View, Text, TextInput, TouchableOpacity, Image, Pressable, Alert} from 'react-native'
import { useState } from 'react';
import useStyles from './styles'
import { useRouter } from 'expo-router';
export default function LogIn(){
    const styles = useStyles();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

        if(!username || !password){
            Alert.alert("Failed", "Please enter Username and Password")
        }

    };

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/connect-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Sign In</Text>
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

            <Pressable>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </Pressable>
            <Pressable onPress={()=>{
                router.push('signUp/signUp')
            }}>
                <Text style={styles.noAccount}>Don't have an Account? Sign Up</Text>
            </Pressable>

        </View>
    )
}