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
            // flex:1
        },
        profileContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginHorizontal:4,
            alignItems:'center',
            gap:3,
            marginBottom:4,
            paddingBottom:10,
            paddingLeft:10,
            paddingTop:10,
            borderBottomWidth:0.5,
            borderBottomColor:'#9ea3b0'
        },
        profileDetailContainer:{
            flex:1,
            gap:5,
            paddingLeft:10,
            paddingRight:10
            // display:'flex',
            // flexDirection:'row'
        },
       profileInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
       },
       name:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.profileName
       },
       time:{
        fontSize:10,
        fontWeight:'medium',
        color:colors.prifileTime
       },
       lastMessage:{
        fontWeight:'medium',
        color:colors.prifileTime
       }
    });
  };

  export default useStyles;