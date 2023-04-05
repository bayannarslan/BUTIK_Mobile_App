import { Pressable, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/types';
import { withTheme } from '@rneui/themed';

interface Props {
  navigation: NativeStackScreenProps<AuthStackParamList, 'Login'>['navigation'];
}

export const RegisterButton: React.FC<Props> = (props) => {
  async function handleRegisterNavigation() {
    return props.navigation.navigate('Register');
  }

  return (
    <Pressable 
      onPress={handleRegisterNavigation}
      style={{
        backgroundColor: 'light gray '
      }}  
    >
      <Text
        style={{
          color: 'black'
        }}
      >
        Don't have an account? Register
      </Text>
    </Pressable>
  );
};
