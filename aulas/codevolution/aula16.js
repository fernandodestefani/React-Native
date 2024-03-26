import { useState } from 'react';
import { View, ActivityIndicator, Button } from 'react-native'

export default function App() {
  const [isActivityIndicatorVisible, setIsActivityIndicatorVisible] = useState(false)
  return (
  <View style={{ flex: 1, backgroundColor: 'midnightblue', padding: 60}}>
    <Button
     title='Hide / Show ActivityIndicator'
     color='black'
     onPress={() => setIsActivityIndicatorVisible(!isActivityIndicatorVisible)}
    />
    <ActivityIndicator />
    <ActivityIndicator size={'large'}/>
    <ActivityIndicator size={'large'} color={'white'}/>
    <ActivityIndicator size={'large'} color={'white'} animating={isActivityIndicatorVisible}/>
  </View>
  );
}