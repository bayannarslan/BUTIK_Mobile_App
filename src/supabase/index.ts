import { createClient } from '@supabase/supabase-js';


// Ideally these values would go into a .env file (look into dotenv)
export const supabase = createClient(
  'https://qooyiztqmoqhbourlzes.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvb3lpenRxbW9xaGJvdXJsemVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MjIzOTcsImV4cCI6MTk5MTE5ODM5N30.xlO3V_SX0Qer8T4AkEm_0RNe5quW1IKrzgJnDghyRMU'
);
