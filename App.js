import { 
  StyleSheet, 
  Text, 
  View, 
  SectionList, 
  ScrollView, 
  SafeAreaView, 
  StatusBar
 } from "react-native";
import pokemonList from './aulas/codevolution/data.json';
import groupedPokemonList from './aulas/codevolution/grouped-data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            )
          }}
          renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeaderText}>{section.type}</Text>
        )}
          ItemSeparatorComponent={() => <View style={{height: 16}}/>}
          SectionSeparatorComponent={() => <View style={{height: 16}}/>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: 'bold'
  }
});
