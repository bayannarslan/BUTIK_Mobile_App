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
      containerStyle={{
        width: 374,
        height: 65,
        backgroundColor: '#FFFFFF',

        borderRadius: 10,

        borderBottomWidth: 0
      }}
      inputStyle={{
        fontSize: input.password ? 16 : 20, // adjust font size based on whether input has a value or not
        color: input.password ? '#000' : '#BCBCBC', // adjust text color based on whether input has a value or not
        zIndex: 1, // ensure input is above the container border
        borderBottomWidth: 0
      }}
    />
  );
}
