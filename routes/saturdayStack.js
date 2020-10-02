import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewDetails from "../screens/reviewDetails";
import Saturday from "../screens/saturday"
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (

  <Navigator headerMode="float">

  <Screen name="Aaj hai s̶a̶g̶a̶a̶i̶ Saturday"
    component={Saturday}
    options={{
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: '#576d69' , fontSize: 24, fontWeight: 'bold', fontFamily:'Raleway'},
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 
    <Screen name="Details"
    component={ReviewDetails}
    options={{
      headerStyle: { backgroundColor: 'e0f2f2' },
      headerTitleStyle: { color: '#576d69' , fontSize: 24, fontWeight: 'bold', fontFamily:'Raleway'},
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 
  </Navigator>
);

export const SaturdayStack = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default SaturdayStack;