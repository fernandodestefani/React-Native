import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style Inheritance <Text style={styles.boldText}>in bold</Text></Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red'}}>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}
{/* quando estiver mergindo múltiplos estilos, o último estilo inserido no array, tem precedência
  */}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'plum', padding: 60},
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2, 
    borderColor: 'purple',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  darkMode: {
    backgroundColor: 'black'
  },
  darkModeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold'
  },
  lightblueBg: {backgroundColor: 'lightblue'},
  lightgreenBg: {backgroundColor: 'lightgreen'},
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: '#333333'
  }

});