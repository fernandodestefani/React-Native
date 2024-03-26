import { View, Text, Image, ScrollView } from 'react-native'

const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  return (
  <View style={{ flex: 1, backgroundColor: 'plum', padding: 60}}>    
    <ScrollView>

      <Image source={logoImg} style={{width: 300, height: 300}}/>
      
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore vero molestiae rem repudiandae veniam quasi veritatis, non quas quisquam voluptates nihil placeat illum aliquid repellendus reiciendis, at magnam adipisci? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo similique, obcaecati fugit vero inventore omnis, totam eligendi quod nobis error, unde sunt deleniti laboriosam. Culpa molestiae esse minus! Nam, quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime asperiores voluptatibus, eligendi quo nobis quidem autem laboriosam qui necessitatibus, et labore facilis impedit officia exercitationem nesciunt. Rerum magnam facere consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
      
      <Image source={logoImg} style={{width: 300, height: 300}}/>
    
    </ScrollView>
  </View>
  );
}