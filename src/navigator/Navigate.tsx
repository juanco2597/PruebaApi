/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import DetallePersonaje from '../screens/DetallePersonaje';
import {SimpleList} from './../interfaces/interface';

export type RootStackParams = {
  Home: undefined;
  DetallePersonaje: {SimpleList: SimpleList};
};

const Stack = createStackNavigator<RootStackParams>();
export const Navigate = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetallePersonaje" component={DetallePersonaje} />
    </Stack.Navigator>
  );
};
