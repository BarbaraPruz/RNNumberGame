import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // android box shadow
    // ios shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})

export default Card
