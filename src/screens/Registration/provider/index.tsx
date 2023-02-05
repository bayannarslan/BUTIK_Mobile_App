import { createContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import { supabase } from '../../../supabase';
import { Container } from './Container';
import Loading from '../../../components/Loading';
import type { ContextProps } from './ContextProps';
import type { RegisterProps } from './RegisterProps';

// @ts-ignore
export const RegistrationContext = createContext<ContextProps>();

interface Props {
  children: React.ReactNode;
}

export const RegistrationProvider: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);

  async function register(props: RegisterProps) {
    const { user, error } = await supabase.auth.signUp({
      email: props.email,
      password: props.password
    });

    if (!error && !user) {
      setLoading(false);
      alert('Check your email for the login link!');
    }

    if (error) {
      setLoading(false);
      alert(error.message);
    }
    await supabase.from('profile').insert({
      user_id: user?.id,
      name: faker.name.firstName(),
      image: faker.image.avatar(),
      description: faker.lorem.slug(7),
      token_amount: faker.random.numeric()
    });
  }

  function view() {
    if (loading) return <Loading />;

    return props.children;
  }

  return (
    <RegistrationContext.Provider value={{ register }}>
      <Container>{view()}</Container>
    </RegistrationContext.Provider>
  );
};
