import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AuthStackParamList } from '../../navigation/types';

import { RegistrationInputProvider } from './inputProvider';
import { RegistrationProvider } from './provider';

import { EmailTextInput } from './EmailTextInput';
import { PasswordTextInput } from './PasswordTextInput';
import { ConfirmPasswordTextInput } from './ConfirmPasswordTextInput';
import { SubmitButton } from './SubmitButton';
import { View } from 'react-native';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export default function (props: Props) {
  return (
    <RegistrationInputProvider>
      <RegistrationProvider>
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
        <EmailTextInput />
        <PasswordTextInput />
        <ConfirmPasswordTextInput />
        <SubmitButton />
      </View>
      </RegistrationProvider>
    </RegistrationInputProvider>
  );
}
