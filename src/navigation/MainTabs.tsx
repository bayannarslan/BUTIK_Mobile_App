import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabsParamList } from './types';

import Home from '../screens/Home';
import MyButik from '../screens/MyButik';

const Tabs = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="MyButik" component={MyButik} />
    </Tabs.Navigator>
  );
};

export default MainTabs;
