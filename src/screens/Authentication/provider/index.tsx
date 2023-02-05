import { createContext, useState } from 'react';
import { supabase } from '../../../supabase';
import { Container } from './Container';
import Loading from '../../../components/Loading';
import type { ContextProps } from './ContextProps';

// @ts-ignore
export const AuthenticationContext = createContext<ContextProps>();

interface Props {
  children: React.ReactNode;
}

export const AuthenticationProvider: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);

  async function login(email: string, password: string) {
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password
    });
    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  function view() {
    if (loading) return <Loading />;

    return props.children;
  }

  return (
    <AuthenticationContext.Provider value={{ login }}>
      <Container>{view()}</Container>
    </AuthenticationContext.Provider>
  );
};
