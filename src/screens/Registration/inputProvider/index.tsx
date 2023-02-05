import { createContext, useState } from 'react';
import {
  ValidateEmail,
  ValidatePassword,
  ValidateConfirmPassword
} from '../inputValidator';

import type { ContextProps } from './ContextProps';
import type { CheckInputType } from './CheckInputType';

// @ts-ignore
export const RegistrationInputContext = createContext<ContextProps>({});

interface Props {
  children: React.ReactNode;
}

export const RegistrationInputProvider: React.FC<Props> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  function checkInputs(type?: CheckInputType) {
    switch (type) {
      case 'email':
        ValidateEmail.validate({ email, setEmailError });
        break;
      case 'password':
        ValidatePassword.validate({ password, setPasswordError });
        break;
      case 'confirmPassword':
        ValidateConfirmPassword.validate({
          password,
          confirmPassword,
          setConfirmPasswordError
        });
        break;
      default:
        ValidateEmail.validate({ email, setEmailError });
        ValidatePassword.validate({ password, setPasswordError });
        ValidateConfirmPassword.validate({
          password,
          confirmPassword,
          setConfirmPasswordError
        });
    }
  }

  return (
    <RegistrationInputContext.Provider
      value={{
        email,
        setEmail,
        emailError,
        setEmailError,

        password,
        setPassword,
        passwordError,
        setPasswordError,

        confirmPassword,
        setConfirmPassword,
        confirmPasswordError,
        setConfirmPasswordError,

        checkInputs
      }}
    >
      {props.children}
    </RegistrationInputContext.Provider>
  );
};
