import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      toggleButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
      },
      sidebar: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
      },
      content: {
        padding: 20,
      },
      switchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
})