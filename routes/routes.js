import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../pages/Splash';
import Parent from '../pages/Parent';
import Dish from '../pages/Dish';

const Stack = createStackNavigator();

const StackNavigatior = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="parent"
          component={Parent}
          options={{ headerTitle: 'Select Dishes' }}
        />
        <Stack.Screen
          name="dish"
          component={Dish}
          options={{ headerTitle: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatior;
