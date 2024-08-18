import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}> 
      {/* o ultimo da ordem dos estilos é o com maior precedência */}
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

  export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'plum', padding: 60},
    box: {
      width: 250,
      height: 250,
      /* padding: 10 */
      paddingHorizontal: 10,
      paddingVertical: 20,
      margin: 10,
      borderWidth: 2,
      borderColor: 'purple',
      borderStyle: 'solid',
      borderRadius: 6
    },
    lightblueBg: {
      backgroundColor: 'lightblue',
    },
    lightgreenBg: {
      backgroundColor: 'lightgreen',
    },
    boxShadow: {
      shadowColor: '#333333',
      shadowOffset: {
        width: 6,
        height: 6
      },
      shadowOpacity: 0.6,
      shadowRadius: 4
    },
    androidShadow: {
      elevation: 10,
      shadowColor: '#333333'
    }
})
/* shadow properties dont work on android, use instead elevation */