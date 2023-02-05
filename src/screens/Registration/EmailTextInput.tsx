import { useContext } from 'react';
import { RegistrationInputContext } from './inputProvider';
import TextInputBox from '../../components/TextInputBox';

export function EmailTextInput() {
  const input = useContext(RegistrationInputContext);

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
