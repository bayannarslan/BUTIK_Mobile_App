import { useContext } from 'react';
import { Pressable, Text } from 'react-native';
import { AuthenticationInputContext } from './inputProvider';
import { AuthenticationContext } from './provider';

export function SubmitButton() {
  const auth = useContext(AuthenticationContext);
  const input = useContext(AuthenticationInputContext);

  async function handleLogin() {
    return auth.login(input.email, input.password);
  }

  return (
    <Pressable
      onPress={handleLogin}
      style={{
        backgroundColor: 'red',
      }}
    >
      <Text
        style={{
          color: 'white'
        }}
      >
        Sign In
      </Text>
    </Pressable>
  );
}
