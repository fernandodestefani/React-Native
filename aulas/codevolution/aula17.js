import { View, Button, Alert } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title='Alert' color={'maroon'} onPress={() => Alert.alert('Invalid data!')} />
      <Button title='Alert 2' color={'grey'} onPress={() => Alert.alert('Invalid data!', 'DOB incorrect')} />
      <Button
        title='Alert 3'
        color={'midnightblue'}
        onPress={() => Alert.alert('Invalid data!', 'DOB incorrect', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel pressed')
          },
          {
            text: 'OK',
            onPress: () => console.log('OK pressed')
          }
        ])}
      />
    </View>
  );
}