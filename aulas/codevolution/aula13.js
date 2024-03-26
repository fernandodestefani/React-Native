import { View, Text, Image, Button, Pressable } from 'react-native'

const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  return (
  <View style={{ flex: 1, backgroundColor: 'plum', padding: 60}}>    
    <Button 
    title='Press' 
    onPress={() => console.log('Button pressed')}
    color={'midnightblue'}
    />
    <Pressable onPress={() => console.log('Image pressed')}>
      <Image source={logoImg} style={{width: 300, height: 300}}/>
    </Pressable>
    <Pressable onPress={() => console.log('Text pressed')}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore itaque dignissimos obcaecati, omnis incidunt molestias autem magnam! Cupiditate blanditiis voluptate sed cumque voluptates veritatis assumenda tempora accusamus quod, sit dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat voluptatem assumenda nisi ad, sapiente veniam eius fugit at sequi delectus voluptatibus harum? Ipsam quis adipisci, ab similique rerum tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, facere nam deserunt praesentium deleniti architecto voluptatem atque ea, corporis fuga blanditiis animi error minus magnam, quidem unde temporibus exercitationem perferendis!
      </Text>
    </Pressable>
  </View>
  );
}