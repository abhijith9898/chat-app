import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

const useStyles = () => {
    const {top} = useSafeAreaInsets()
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme] || Colors.light;
    console.log("colors", colorScheme)
  
    return StyleSheet.create({
        container:{
            paddingTop:top + 10,
            display:'flex',
            flexDirection: 'row',
            justifyContent:'flex-end',
            padding:20,
            paddingBottom:25,
            backgroundColor: colors.dashboardHeader,
        }
      
    });
  };

  export default useStyles;