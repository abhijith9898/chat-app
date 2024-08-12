import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useColorScheme } from 'react-native';

const useStyles = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme] || Colors.light;
  console.log("colors", colorScheme)

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: colors.loginBackground,
    },
    logo: {
      width: 200,
      height: 200,
      marginBottom: 32,
    },
    title: {
      fontSize: 32,
      marginBottom: 32,
      color: colors.text,
      fontWeight:'500'
    },
    input: {
      width: '80%',
      padding: 12,
      marginBottom: 16,
      borderRadius: 10,
      backgroundColor: colors.inputBackground,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      color:colors.inputText,
      fontWeight:'900'
    },
    forgot:{
      color:colors.text,
      width:'80%',
      textAlign:'right',
      marginTop:10
    },
    noAccount:{
      color:colors.text,
      width:'80%',
      textAlign:'center',
      marginTop:10
    },
    button: {
      width: '80%',
      padding: 16,
      borderRadius: 10,
      backgroundColor: colors.loginButton,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      marginTop:18
    },
    buttonText: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export default useStyles;
