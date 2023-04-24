import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AuthStackParamList } from '../../navigation/types';

import { AuthenticationInputProvider } from './inputProvider';
import { AuthenticationProvider } from './provider';

import { Text, View, Image } from 'react-native';

import { EmailTextInput } from './EmailTextInput';
import { PasswordTextInput } from './PasswordTextInput';
import { SubmitButton } from './SubmitButton';
import { RegisterButton } from './RegisterButton';

import Logo from '../../../src/images/RJ.png';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function (props: Props) {
  return (
    <AuthenticationInputProvider>
      <AuthenticationProvider>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            padding: 20,
            paddingTop: 100,
            paddingBottom: 1000,
          }}
        >
          <Image source={Logo} />
          <View style={{height: 50}}/>
          <EmailTextInput />
          <View style={{height: 50}}>
            <PasswordTextInput />
            <Text>Forgot your password?</Text>
          </View>
          <View style={{height: 50}}></View>
          <SubmitButton />
          <RegisterButton navigation={props.navigation} />
        </View>
      </AuthenticationProvider>
    </AuthenticationInputProvider>
  );
}
