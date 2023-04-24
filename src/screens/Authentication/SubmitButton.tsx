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
        LOG IN
      </Text>
    </Pressable>
  );
}
