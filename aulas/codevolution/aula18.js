import { View, Text } from 'react-native'
import Greet from './aulas/codevolution/Greet';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Greet name='Bruce Wayne'/>
      <Greet name='Clark Kent'/>      
    </View>
  );
}