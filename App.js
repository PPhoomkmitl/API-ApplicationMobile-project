// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screen/Splash'
 import Home from './screen/Home'
 import Detail from './screen/Detail'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} 
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false}} 
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Detail", headerTitleStyle: { fontWeight: "bold" },headerStyle: { backgroundColor: "#5837D0" },headerTintColor: "white"}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>

  )
  
}

export default App
