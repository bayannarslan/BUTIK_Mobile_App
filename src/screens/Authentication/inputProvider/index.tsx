import { createContext, useState } from 'react';
import { ValidateEmail, ValidatePassword } from '../inputValidator';

import type { ContextProps } from './ContextProps';
import type { CheckInputType } from '../../Registration/inputProvider/CheckInputType';

// @ts-ignore
export const AuthenticationInputContext = createContext<ContextProps>({});

interface Props {
  children: React.ReactNode;
}

export const AuthenticationInputProvider: React.FC<Props> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  function checkInputs(type?: CheckInputType) {
    switch (type) {
      case 'email':
        ValidateEmail.validate({ email, setEmailError });
        break;
      case 'password':
        ValidatePassword.validate({ password, setPasswordError });
        break;
      default:
        ValidateEmail.validate({ email, setEmailError });
        ValidatePassword.validate({ password, setPasswordError });
    }
  }

  return (
    <AuthenticationInputContext.Provider
      value={{
        email,
        setEmail,
        emailError,
        setEmailError,

        password,
        setPassword,
        passwordError,
        setPasswordError,

        checkInputs
      }}
    >
      {props.children}
    </AuthenticationInputContext.Provider>
  );
};
