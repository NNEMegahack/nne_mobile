import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Pages/Home';
import ScanBarCode from './Pages/ScanBarCode';
import AddProduct from './Pages/AddProduct';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF404A" />
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen component={Home} name="Home" />
          <AppStack.Screen component={ScanBarCode} name="ScanBarCode" />
          <AppStack.Screen component={AddProduct} name="AddProduct" />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}
