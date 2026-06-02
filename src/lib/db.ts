import postgres from 'postgres';

let sqlInstance: ReturnType<typeof postgres> | null = null;

const initializeSql = () => {
  if (sqlInstance) return sqlInstance;

  // Use URL-encoded connection string for maximum compatibility with special characters
  const connectionString = 'postgresql://postgres:Welcome%40342@db.lylvdeeorhjxevbdlqhm.supabase.co:5432/postgres';

  sqlInstance = postgres(connectionString, {
    ssl: 'require',
    connect_timeout: 60,
    idle_timeout: 30,
    max: 10,
    onnotice: () => {},
  });

  return sqlInstance;
};

// Export a proxy that initializes the connection on first use
export const sql = new Proxy((() => {}) as any, {
  apply: (target, thisArg, argArray) => {
    const instance = initializeSql();
    return (instance as any)(...argArray);
  },
  get: (target, prop) => {
    const instance = initializeSql();
    const value = (instance as any)[prop];
    return typeof value === 'function' ? value.bind(instance) : value;
  },
}) as ReturnType<typeof postgres>;

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
