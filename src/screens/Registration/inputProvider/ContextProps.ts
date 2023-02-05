import type { CheckInputType } from './CheckInputType';

export interface ContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailError: string;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;

  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordError: string;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>;

  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPasswordError: string;
  setConfirmPasswordError: React.Dispatch<React.SetStateAction<string>>;

  checkInputs: (type?: CheckInputType) => void;
}
