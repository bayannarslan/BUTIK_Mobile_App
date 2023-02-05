import { useContext } from 'react';
import { AuthenticationInputContext } from './inputProvider';
import TextInputBox from '../../components/TextInputBox';

export function EmailTextInput() {
  const input = useContext(AuthenticationInputContext);

  const validate = () => {
    input.checkInputs('email');
  };

  return (
    <TextInputBox
      placeholder="Email"
      value={input.email}
      setValue={input.setEmail}
      onBlur={validate}
    />
  );
}
