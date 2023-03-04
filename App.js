/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Notes from './src/screens/Notes';
import Settings from './src/screens/Settings';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Notes">
          <Drawer.Screen name="Notes" component={Notes} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
