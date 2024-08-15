import {View, Text, TextInput, TouchableOpacity, Image, Pressable, Alert} from 'react-native'
import { useState } from 'react';
import useStyles from './styles'
import { useRouter } from 'expo-router';
import Loader from '../../components/loader';
export default function SignUp(){
    const styles = useStyles();
    const router = useRouter();
    const [name, setName] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoader] = useState(false)

    const handleSignUp = () => {
        console.log('name', name)
        console.log('Username:', username);
        console.log('Password:', password);

        if(!name || !username || !password){
            Alert.alert("Failed", "Please enter all details")
        }

        // setLoader(true)


    };

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/connect-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Create Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder=" Enter Email Address"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Password"
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
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                )}
            </View>
            

            {/* <Pressable>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </Pressable> */}
            <Pressable onPress={()=>{
                router.push('logIn/logIn')
            }}>
                <Text style={styles.noAccount}>Already have an Account? Log In</Text>
            </Pressable>

        </View>
    )
}