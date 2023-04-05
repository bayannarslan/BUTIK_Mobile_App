import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text } from 'react-native';
import { supabase } from '../../supabase';
import { AuthStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgetPassword'>;

export default function ({ navigation }: Props) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function forget() {
    setLoading(true);
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );
    if (!error) {
      setLoading(false);
      alert('Check your email to reset your password!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <View>
        <Text>Forgot Password? </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
