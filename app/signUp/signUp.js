import {View, Text, TextInput, TouchableOpacity, Image, Pressable, Alert} from 'react-native'
import { useState } from 'react';
import useStyles from './styles'
import { useRouter } from 'expo-router';
import Loader from '../../components/loader';
import { useAuth } from '../../context/authContext';
export default function SignUp(){
    const styles = useStyles();
    const router = useRouter();
    const {signUp} = useAuth()
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoader] = useState(false)

    const handleSignUp = async () => {
        console.log('name', name)
        console.log('UserName:', userName);
        console.log('Password:', password);

        if(!name || !userName || !password){
            Alert.alert("Failed", "Please enter all details")
        } else{
            setLoader(true)
            let resData = await signUp(name, userName, password)
            setLoader(false)
            console.log("response", resData)
            if (!resData.success) {
                Alert.alert("Failed", resData.message)
            }
        }

        

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
                value={userName}
                onChangeText={setUserName}
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