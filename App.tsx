import 'react-native-url-polyfill/auto';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/provider/AuthProvider';

import Navigation from './src/navigation';
import React from 'react';
import MyButikStoreProvider from './src/context/MyButikStoreProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
      <MyButikStoreProvider>
        <Navigation />
        </MyButikStoreProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
