import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from './types';

import Authentication from '../screens/Authentication';
import Registration from '../screens/Registration';
import ForgetPassword from '../screens/auth/ForgetPassword';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Authentication} />
      <AuthStack.Screen name="Register" component={Registration} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

export default Auth;
