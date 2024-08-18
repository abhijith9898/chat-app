import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

const useStyles = () => {
    const {top} = useSafeAreaInsets()
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme] || Colors.light;
    console.log("colors", colorScheme)
  
    return StyleSheet.create({
        container:{
            display:'flex',
            justifyContent:'flex-end',
            marginBottom:3,
            marginRight:3,
            marginTop:5
        },
        containerWidth:{
            width:'95%'
        },
        rightMessage:{
            display:'flex',
            alignSelf:'flex-end',
            padding:10,
            paddingLeft:15,
            paddingRight:15,
            borderRadius:10,
            // marginBottom:5,
            backgroundColor:colors.sendMessageBg,
        },
        text:{
            fontSize:17
        },
        leftContainer:{
            width:'90%',
            marginLeft:15,
            marginBottom:5,
            marginTop:5
        },
        leftMessage:{
            display:'flex',
            alignSelf:'flex-start',
            padding:10,
            paddingLeft:15,
            paddingRight:15,
            paddingHorizontal:4,
            // marginBottom:5,
            borderRadius:10,
            backgroundColor:colors.receiveMessageBg
        }
      
    });
  };

  export default useStyles;