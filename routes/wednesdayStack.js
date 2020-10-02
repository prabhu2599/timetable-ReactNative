import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewDetails from "../screens/reviewDetails";
import Wednesday from "../screens/wednesday"
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (

  <Navigator headerMode="float">

<Screen name="Aaj hai s̶a̶g̶a̶a̶i̶ Wednesday"
    component={Wednesday}
    options={{
      headerStyle: { backgroundColor: 'e0f2f2' },
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

export const WednesdayStack = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default WednesdayStack;