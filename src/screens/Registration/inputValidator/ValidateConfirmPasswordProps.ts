export interface ValidateConfirmPasswordProps {
  password: string;
  confirmPassword: string;
  setConfirmPasswordError: React.Dispatch<React.SetStateAction<string>>;
}
