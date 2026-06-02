import { createClient } from '@supabase/supabase-js';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

const initializeSupabase = () => {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = 'https://lylvdeeorhjxevbdlqhm.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5bHZkZWVvcmhqeGV2YmRscWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyOTEzNDUsImV4cCI6MjA5NTg2NzM0NX0.5xzVl-zz_4SjJuljDqQMp2IcfnUDlb1kEO1IdQw-C3Y';

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get: (target, prop) => {
    const client = initializeSupabase();
    return (client as any)[prop];
  },
});
