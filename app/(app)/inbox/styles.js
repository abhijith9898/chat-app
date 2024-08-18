import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from '../../../constants/Colors';
import { useColorScheme } from 'react-native';

const useStyles = () => {
    const {top} = useSafeAreaInsets()
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme] || Colors.light;
    console.log("colors", colorScheme)
  
    return StyleSheet.create({
        container:{
            flex:1
        },
        messageContainer:{
            flex:1,
            justifyContent:'space-between',
            overflow:'visible',
            backgroundColor:colors.inboxBackground
        },
        messageList:{
            flex:1
        },
        sendContainer:{
            marginBottom:10,
            paddingTop:2
        },
        inputContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginHorizontal:3
        },
        inputView:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            borderWidth:1,
            padding:2,
            borderColor:'#0d1f2d',
            borderRadius:15,
            paddingLeft:10,
            backgroundColor:'#fff'
        },
        input:{
            fontSize:20,
            flex:1,
            marginRight:2,
            backgroundColor:'#fff'
        },
        sendButton:{
            padding:2,
            marginRight:1,
            borderRadius:15,
        }
    });
  };

  export default useStyles;