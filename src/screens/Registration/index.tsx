import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AuthStackParamList } from '../../navigation/types';

import { RegistrationInputProvider } from './inputProvider';
import { RegistrationProvider } from './provider';

import { EmailTextInput } from './EmailTextInput';
import { PasswordTextInput } from './PasswordTextInput';
import { ConfirmPasswordTextInput } from './ConfirmPasswordTextInput';
import { SubmitButton } from './SubmitButton';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export default function (props: Props) {
  return (
    <RegistrationInputProvider>
      <RegistrationProvider>
        <EmailTextInput />
        <PasswordTextInput />
        <ConfirmPasswordTextInput />
        <SubmitButton />
      </RegistrationProvider>
    </RegistrationInputProvider>
  );
}
