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
            backgroundColor:colors.inboxHeader,
            paddingTop:top + 20,
            padding:20,
            paddingBottom:25,
        },
        headerContainer:{
           display:'flex',
           flexDirection:'row',
           alignItems:'center',
           gap:10,
           paddingTop:15,
           paddingBottom:15
           
        },
        profile:{
            display:'flex',
           flexDirection:'row',
           alignItems:'center',
           gap:12
        },
        profileName:{
            fontWeight:'bold',
            fontSize:20,
            color:colors.inboxHeaderName
        },
        callContainer:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:20
        }
      
    });
  };

  export default useStyles;