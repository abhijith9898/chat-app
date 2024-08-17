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
        circle: {
            width: 40,
            height: 40,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          },
          letter: {
            fontSize: 25,
            color: '#000',
            fontWeight: 'bold',
          },
      
    });
  };

  export default useStyles;