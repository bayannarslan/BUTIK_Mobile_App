import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';

import { MainStackParamList } from './types';
import Beauty from '../screens/Beauty';
import Womens from '../screens/Womens';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: true
};

const Main = () => {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          headerShown: false
        }}
      />
      <MainStack.Screen
        name="Beauty"
        component={Beauty}
        />
        <MainStack.Screen
        name="Womens"
        component={Womens}
        />
    </MainStack.Navigator>
  );
};

export default Main;
