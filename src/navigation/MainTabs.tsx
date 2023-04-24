import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; // Import Image from react-native
import type { MainTabsParamList } from './types';
import Auth from './AuthStack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import QRcode from '../screens/QRcode';
import Likes from '../screens/Likes';
import MyButik from '../screens/MyButik';

const Tabs = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E2A5AE',
        tabBarShowLabel: false
      }}
      >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/home.png')}
              style={{ tintColor: color, width: size, height: size }} // use 'color' and 'size' instead of hard-coded values
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/cart.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="QRcode"
        component={QRcode}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/qrcode.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/heart.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyButik"
        component={user ? MyButik : Auth}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/user.png')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;