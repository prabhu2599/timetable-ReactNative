import React,{useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Monday from "../screens/monday"
import Wednesday from "../screens/wednesday"
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (

  <Navigator headerMode="float">

<Screen name="Wednesday"
    component={Wednesday}
    options={{
      headerStyle: { backgroundColor: 'e0f2f2' },
      headerTitleStyle: { color: '#e0f2f2' },
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 
    {/* <Screen name="Home" 
    component={Home} 
    options={{
    headerStyle: { backgroundColor: 'e0f2f2' },
    headerTitleStyle: { color: 'e0f2f2' },
    headerTransparent: false,
    headerTintColor: '#aedbd3',
    headerTitleAlign: 'center',
  }}/> */}

    <Screen name="Details"
    component={ReviewDetails}
    options={{
      headerStyle: { backgroundColor: 'e0f2f2' },
      headerTitleStyle: { color: '#e0f2f2' },
      headerTransparent: false,
      headerTintColor: '#aedbd3',
      headerTitleAlign: 'center',
    }}
    /> 
  </Navigator>
);

export const HomeStack = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default HomeStack;

/// V2

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import Home from '../screens/home';
// import ReviewDetails from "../screens/reviewDetails";

// const { Navigator, Screen } = createStackNavigator();

// export default function HomeStack (){
//   return (
//   <Navigator
//     headerMode='screen'
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#eee',
//       },
//       headerTintColor: '#444',
//       height: 60
//     }}
//   >
//     <Screen
//       name='Home'
//       component={Home}
//       options={{ title: 'GameZone' }}
//     />
//     <Screen
//       name='ReviewDetails'
//       component={ReviewDetails}
//       options={{ title: 'Review Details' }}
//     />
//   </Navigator>
// )};