import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (
  <Navigator headerMode="screen">
    {/* other options: "float", "screen", "None" */}
    <Screen name="Chutti!! So suno about the App" 
    component={About} 
    options={{
    headerStyle: { backgroundColor: 'white' },
    headerTitleStyle: { color: '#576d69' , fontSize: 24, fontWeight: 'bold', fontFamily:'Raleway'},
    headerTransparent: false,
    headerTintColor: '#000',
    headerTitleAlign: 'center',
  }}/>
  </Navigator>
);

export const AboutStack = () => (
  <NavigationContainer>
    <AboutNavigator />
  </NavigationContainer>
);

export default AboutStack;