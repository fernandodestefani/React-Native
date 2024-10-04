import { SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";
import PokemonCard from "./aulas/codevolution/ExerciseOne/components/PokemonCard";

export default function App() {

  const charmanderData = {
    name: 'Charmander',
    image: require('./aulas/codevolution/ExerciseOne/assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };

  const squirtleData = {
    name: 'Squirtle',
    image: require('./aulas/codevolution/ExerciseOne/assets/squirtle.png'),
    type: 'Water',
    hp: 44, 
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass']
  };

  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./aulas/codevolution/ExerciseOne/assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image: require('./aulas/codevolution/ExerciseOne/assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunder Bolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData}/>
        <PokemonCard {...squirtleData}/>
        <PokemonCard {...bulbasaurData}/>
        <PokemonCard {...pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});