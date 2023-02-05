import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Main from './MainStack';
import Auth from './AuthStack';

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;

  const renders = () => {
    switch (user) {
      case null:
      case undefined:
      case false:
        return <Auth />;
      case true:
        return <Main />;
    }
  };
  return <NavigationContainer>{renders()}</NavigationContainer>;
};
