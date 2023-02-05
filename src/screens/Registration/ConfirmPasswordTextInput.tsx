import { useContext } from 'react';
import { RegistrationInputContext } from './inputProvider';
import TextInputBox from '../../components/TextInputBox';

export function ConfirmPasswordTextInput() {
  const input = useContext(RegistrationInputContext);

  const validate = () => {
    input.checkInputs('confirmPassword');
  };

  return (
    <TextInputBox
      secureTextEntry={true}
      placeholder="Confirm Password"
      value={input.confirmPassword}
      setValue={input.setConfirmPassword}
      onBlur={validate}
    />
  );
}
