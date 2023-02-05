import { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import { RegistrationInputContext } from './inputProvider';
import { RegistrationContext } from './provider';

export function SubmitButton() {
  const auth = useContext(RegistrationContext);
  const input = useContext(RegistrationInputContext);

  async function handleRegister() {
    input.checkInputs();
    return auth.register({
      email: input.email,
      password: input.password
    });
  }

  return (
    <Pressable onPress={handleRegister}>
      <Text>Sign Up</Text>
    </Pressable>
  );
}
