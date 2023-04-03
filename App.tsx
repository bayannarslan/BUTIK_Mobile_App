import 'react-native-url-polyfill/auto';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/provider/AuthProvider';

import Navigation from './src/navigation';
import React from 'react';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
