import { useState } from 'react';
import { View, StatusBar, Button } from 'react-native'

export default function App() {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false)
  return (
  <View style={{ flex: 1, backgroundColor: 'plum', padding: 60}}>
    <Button
     title='Hide / Show StatusBar?'
     onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
     color='midnightblue'
    />
    <StatusBar
     backgroundColor='lightgreen'
     barStyle='dark-content'
     hidden={isStatusBarVisible}
    />
  
  </View>
  );
}