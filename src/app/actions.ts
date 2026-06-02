'use server';

import { cookies } from 'next/headers';
import { sql } from '@/lib/db';
import { supabase } from '@/lib/supabase';

// Initialize tables helper
let tablesInitialized = false;
async function ensureTables() {
  if (tablesInitialized) return;
  
  try {
    // Only run initialization once per server instance
    tablesInitialized = true;
    
    // First try creating with sql proxy
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS products (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          category TEXT NOT NULL,
          name TEXT NOT NULL,
          description TEXT NOT NULL,
          price TEXT NOT NULL,
          original_price TEXT,
          specs JSONB DEFAULT '{}',
          featured BOOLEAN DEFAULT FALSE,
          badge TEXT,
          game_icon TEXT DEFAULT '⛏️',
          display_order INTEGER DEFAULT 0,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `;
      
      // Fire and forget migrations
      sql`ALTER TABLE products ADD COLUMN IF NOT EXISTS original_price TEXT`.catch(() => {});
      sql`ALTER TABLE products ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0`.catch(() => {});

      await sql`
        CREATE TABLE IF NOT EXISTS partners (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          name TEXT DEFAULT 'Unnamed Partner',
          logo_url TEXT DEFAULT 'https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048',
          server_link TEXT DEFAULT 'https://discord.gg/56VcDMZbrj',
          description TEXT DEFAULT '',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `;
    } catch (dbErr) {
      console.error('SQL migration failed, falling back to Supabase HTTP:', dbErr);
      // If SQL fails, the tables might still exist or we can try via Supabase dashboard manually
      // We don't block here as Supabase client doesn't need DDL for basic CRUD
    }
  } catch (err) {
    tablesInitialized = false; 
    console.error('Database initialization error:', err);
  }
}

export async function seedProducts(products: any[]) {
  try {
    const { error } = await (supabase.from('products') as any).insert(products);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error seeding products:', error);
    return { success: false, error: error.message };
  }
}

// Admin credentials hardcoded for panel access
export async function loginAction(email: string, password: string) {
  const adminEmail = 'akshitkanswal111@gmail.com';
  const adminPassword = 'Welcome@342';

  if (email === adminEmail && password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    // Fire and forget table check
    ensureTables();
    return { success: true };
  }

  return { success: false, message: 'Invalid credentials' };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
}

export async function checkSession() {
  const cookieStore = await cookies();
  return cookieStore.get('admin_session')?.value === 'true';
}

// Helper for database operations using Supabase HTTP Client
// This is much more stable than direct Postgres (sql) because it uses standard HTTPS (port 443)
// which is almost never blocked by ISPs or firewalls.
export async function getProducts() {
  try {
    const { data, error } = await (supabase
      .from('products') as any)
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return { success: true, data: data || [] };
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return { success: false, error: error.message || 'Database connection error' };
  }
}

export async function addProduct(product: any) {
  try {
    const dataToSubmit = {
      category: product.category || 'games',
      name: product.name || 'Unnamed Product',
      description: product.description || 'No description provided.',
      price: String(product.price || '0'),
      original_price: product.original_price ? String(product.original_price) : null,
      specs: typeof product.specs === 'string' ? JSON.parse(product.specs) : (product.specs || {}),
      featured: !!product.featured,
      badge: product.badge || '',
      game_icon: product.game_icon || '⛏️',
      display_order: parseInt(product.display_order || '0'),
    };

    const { error } = await (supabase.from('products') as any).insert([dataToSubmit]);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error adding product:', error);
    return { success: false, error: error.message || 'Failed to add product' };
  }
}

export async function updateProduct(id: string, product: any) {
  try {
    const dataToSubmit = {
      category: product.category || 'games',
      name: product.name || 'Unnamed Product',
      description: product.description || 'No description provided.',
      price: String(product.price || '0'),
      original_price: product.original_price ? String(product.original_price) : null,
      specs: typeof product.specs === 'string' ? JSON.parse(product.specs) : (product.specs || {}),
      featured: !!product.featured,
      badge: product.badge || '',
      game_icon: product.game_icon || '⛏️',
      display_order: parseInt(product.display_order || '0'),
    };

    const { error } = await (supabase.from('products') as any).update(dataToSubmit).eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error updating product:', error);
    return { success: false, error: error.message || 'Failed to update product' };
  }
}

export async function deleteProduct(id: string) {
  try {
    const { error } = await (supabase.from('products') as any).delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return { success: false, error: error.message || 'Failed to delete product' };
  }
}

// Partner Actions
export async function getPartners() {
  try {
    const { data, error } = await (supabase
      .from('partners') as any)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return { success: true, data: data || [] };
  } catch (error: any) {
    console.error('Error fetching partners:', error);
    return { success: false, error: error.message || 'Failed to fetch partners' };
  }
}

export async function addPartner(partner: any) {
  try {
    const dataToSubmit = {
      name: partner.name || 'Unnamed Partner',
      logo_url: partner.logo_url || '',
      server_link: partner.server_link || '',
      description: partner.description || '',
    };

    const { error } = await (supabase.from('partners') as any).insert([dataToSubmit]);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error adding partner:', error);
    return { success: false, error: error.message || 'Failed to add partner' };
  }
}

export async function updatePartner(id: string, partner: any) {
  try {
    const dataToSubmit = {
      name: partner.name,
      logo_url: partner.logo_url,
      server_link: partner.server_link,
      description: partner.description,
    };

    const { error } = await (supabase.from('partners') as any).update(dataToSubmit).eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error updating partner:', error);
    return { success: false, error: error.message || 'Failed to update partner' };
  }
}

export async function deletePartner(id: string) {
  try {
    const { error } = await (supabase.from('partners') as any).delete().eq('id', id);
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting partner:', error);
    return { success: false, error: error.message || 'Failed to delete partner' };
  }
}
