import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AuthStackParamList } from '../../navigation/types';

import { AuthenticationInputProvider } from './inputProvider';
import { AuthenticationProvider } from './provider';

import { Text } from 'react-native';

import { EmailTextInput } from './EmailTextInput';
import { PasswordTextInput } from './PasswordTextInput';
import { SubmitButton } from './SubmitButton';
import { RegisterButton } from './RegisterButton';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function (props: Props) {
  return (
    <AuthenticationInputProvider>
      <AuthenticationProvider>
        <EmailTextInput />
        <PasswordTextInput />
        <SubmitButton />
        <Text>------------------------------------------------------------------</Text>
        <RegisterButton navigation={props.navigation} />
      </AuthenticationProvider>
    </AuthenticationInputProvider>
  );
}
