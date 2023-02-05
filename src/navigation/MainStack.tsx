import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';

import { MainStackParamList } from './types';

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
    </MainStack.Navigator>
  );
};

export default Main;
