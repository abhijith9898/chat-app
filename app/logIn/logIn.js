import {View, Text, TextInput, TouchableOpacity, Image, Pressable, Alert} from 'react-native'
import { useState } from 'react';
import useStyles from './styles'
import { useRouter } from 'expo-router';
import Loader from '../../components/loader';
export default function LogIn(){
    const styles = useStyles();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoader] = useState(false)

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
            <Text style={styles.title}>Log In</Text>
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
            
            <View style={styles.buttonView}>
                {loading?(
                    <View style={styles.loaderView}>
                        <Loader/>
                    </View>
                ):(
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                )}
            </View>
            

            <Pressable>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </Pressable>
            <Pressable onPress={()=>{
                router.push('signUp/signUp')
            }}>
                <Text style={styles.noAccount}>Don't have an Account? Create One</Text>
            </Pressable>

        </View>
    )
}