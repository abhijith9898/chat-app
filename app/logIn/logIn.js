import {View, Text, TextInput, TouchableOpacity, Image, Pressable, Alert} from 'react-native'
import { useState } from 'react';
import useStyles from './styles'
import { useRouter } from 'expo-router';
import Loader from '../../components/loader';
import { useAuth } from '../../context/authContext';
export default function LogIn(){
    const styles = useStyles();
    const router = useRouter();
    const {logIn} = useAuth();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false)

    const handleLogin = async () => {
        console.log('Username:', userName);
        console.log('Password:', password);

        if(!userName || !password){
            Alert.alert("Failed", "Please enter Email and Password")
        }else{
            setLoader(true)
            const resData = await logIn(userName, password)
            setLoader(false)
            console.log("response", resData)
            if(!resData.success){
                Alert.alert('Failed', resData.message)
            }
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
                placeholder="Username / Email"
                value={userName}
                onChangeText={setUserName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
            <View style={styles.buttonView}>
                {loader?(
                    <View style={styles.loaderView}>
                        <Loader/>
                    </View>
                ):(
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                )}
            </View>
            

            {/* <Pressable>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </Pressable> */}
            <Pressable onPress={()=>{
                router.push('signUp/signUp')
            }}>
                <Text style={styles.noAccount}>Don't have an Account? Create One</Text>
            </Pressable>

        </View>
    )
}