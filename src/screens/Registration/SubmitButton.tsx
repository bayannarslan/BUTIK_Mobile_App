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
    <Pressable onPress={handleRegister}
      style={{
        backgroundColor: '#E2A5AE',
        padding: 20,
        margin: 10,
        width: 375,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
      }}
    >
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 24,
        }}
      >
        Create Account
      </Text>
    </Pressable>
  );
}
