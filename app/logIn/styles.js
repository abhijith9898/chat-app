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
      color: '#333',
    },
    input: {
      width: '100%',
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    button: {
      width: '100%',
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#6200ee',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export default useStyles;
