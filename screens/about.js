import React from 'react';
import { Text, View, Linking } from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'


export default function About() {
  return(
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>Yo, Homie! this is PG..</Text>
        <Text style={globalStyles.titleText}>Wish I could sing and give my intro :p</Text>
      </Card>

      <Card>
        <Text style={globalStyles.titleText}>I made this app using React Native</Text>
      </Card>
      <Card>
        <Text style={globalStyles.titleText}>It took 9.6666 Hrs to build this app from scratch :p</Text>
      </Card>
      <Card>
        <Text style={globalStyles.titleText} 
        onPress={() => Linking.openURL('https://github.com/prabhu2599')}>Check my Github Here</Text>
        <View style={globalStyles.divider}>
          <Text style={globalStyles.para}>1. Get Sourcecode of this app</Text>
          <Text style={globalStyles.para}>2. Get Algo + ML assignments :p</Text>
          <Text style={globalStyles.para}>3. And many more !!!</Text>
        </View>
      </Card>
      <Card>
        <Text style={globalStyles.titleText} 
        onPress={() => Linking.openURL('https://www.youtube.com/channel/UCx8voY09K4YQRE28O4vWnNQ/featured')}>Check my Youtube Channel Here</Text>
        <View style={globalStyles.divider}>
          <Text style={globalStyles.para}>1. For ML related videos</Text>
          <Text style={globalStyles.para}>2. Coding related</Text>
          <Text style={globalStyles.para}>3. Maybe singing bhi XD </Text>
        </View>
      </Card>
    </View>
  )
};
