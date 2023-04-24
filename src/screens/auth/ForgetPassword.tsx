import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text } from 'react-native';
import { supabase } from '../../supabase';
import { AuthStackParamList } from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgetPassword'>;

export default function ({ navigation }: Props) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function forget(email: any) {
    setLoading(true);
    try {
      const [data] = await Promise.all([
        supabase.auth.api.resetPasswordForEmail(email),
        alert('Check your email to reset your password!')
      ]);
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  }
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <View>
        <Text>Forgot Password? </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
