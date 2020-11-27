import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AboutMe} from "./components/AboutMe"
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#0655ab",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'COMP3074 Assignment2'}}/>
        <Stack.Screen name="AboutMe" component={AboutMe}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// npx react-native run-android
