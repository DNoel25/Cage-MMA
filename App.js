import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from './App/Index';
import Gradiant from './App/Gradiant';

//Import pages
import C_Login from './App/Screens/Coach/C_Login';
import F_Login from './App/Screens/Fighters/F_Login';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions = {{headerShown : false}}>
      <Stack.Screen name='index' component = {Index}/> 
      <Stack.Screen name='C_Login' component = {C_Login}/>
      <Stack.Screen name='F_Login' component = {F_Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


