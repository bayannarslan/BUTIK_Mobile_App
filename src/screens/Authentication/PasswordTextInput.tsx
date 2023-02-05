import { useContext } from 'react';
import { AuthenticationInputContext } from './inputProvider';
import TextInputBox from '../../components/TextInputBox';

export function PasswordTextInput() {
  const input = useContext(AuthenticationInputContext);

  const validate = () => {
    input.checkInputs('password');
  };

  return (
    <TextInputBox
      secureTextEntry={true}
      placeholder="Password"
      value={input.password}
      setValue={input.setPassword}
      onBlur={validate}
    />
  );
}
