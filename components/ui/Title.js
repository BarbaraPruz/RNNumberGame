import { Platform, StyleSheet, Text } from 'react-native'

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.OS === 'ios' ? 0 : 2, // just for demo purposes
    borderWidth: Platform.select({ ios: 0, android: 2 }), // just for demo purposes
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
})

export default Title
