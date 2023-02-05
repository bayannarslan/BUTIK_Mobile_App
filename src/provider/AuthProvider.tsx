import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Session } from '@supabase/supabase-js';

interface ContextProps {
  user: null | boolean;
  session: Session | null;
}

export const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = (props) => {
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session ? true : false);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session ? true : false);
      }
    );
    return () => {
      authListener!.unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, session }}>
      {props.children}
    </AuthContext.Provider>
  );
};
