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
      inputStyle={{
        fontSize: input.email ? 16 : 20, // adjust font size based on whether input has a value or not
        color: input.email ? '#000' : '#BCBCBC', // adjust text color based on whether input has a value or not
        zIndex: 1, // ensure input is above the container border
        borderBottomWidth: 0
      }}
      containerStyle={{
        width: 374,
        height: 65,
        backgroundColor: '#FFFFFF',
        borderColor: '#BCBCBC',
        borderRadius: 10,
        borderBottomWidth: 0
      }}
    />
  );
}
