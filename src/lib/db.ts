import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

export const sql = postgres(connectionString, {
  ssl: { rejectUnauthorized: false }, // Use more lenient SSL for Supabase direct connection
  connect_timeout: 30,
  idle_timeout: 60,
  max: 10,
});

export interface Product {
  id: string;
  category: 'games' | 'web' | 'vps' | 'vds' | 'bots' | 'deals';
  name: string;
  description: string;
  price: string;
  specs: Record<string, string>;
  featured: boolean;
  badge?: string;
  game_icon?: string;
  created_at: Date;
}

export interface Partner {
  id: string;
  name: string;
  logo_url: string;
  server_link: string;
  description?: string;
  created_at: Date;
}
