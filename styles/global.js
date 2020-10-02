import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding:24,
    backgroundColor: '#e0f2f2',
  },
  text: {
    color: "#000848",
    fontFamily:'Montserrat',
    fontSize: 20,
  },
  titleText: {
    color: "#576d69",
    fontFamily:'Montserrat',
    fontSize: 24,
    fontWeight: "bold"
  },
  para: {
    color: "#34413f",
    fontFamily:'Raleway',
    marginVertical: 8,
    fontSize: 18,
    lineHeight:20
  },
  flexrowwise: {
    flex:1
  },
  divider: {
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
});