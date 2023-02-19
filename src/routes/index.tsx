import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PixDetail, PixList } from '../screens';

const Stack = createNativeStackNavigator();

export const PixStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="PixList" component={PixList} />
      <Stack.Screen name="PixDetail" component={PixDetail} />
    </Stack.Navigator>
  )
}
