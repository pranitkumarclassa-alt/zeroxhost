'use server';

import { cookies } from 'next/headers';
import { sql } from '@/lib/db';

// Initialize tables helper
let tablesInitialized = false;
async function ensureTables() {
  if (tablesInitialized) return;
  
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        category TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price TEXT NOT NULL,
        specs JSONB DEFAULT '{}',
        featured BOOLEAN DEFAULT FALSE,
        badge TEXT,
        game_icon TEXT DEFAULT '⛏️',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
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
    tablesInitialized = true;
  } catch (err) {
    console.error('Database initialization error:', err);
  }
}

export async function loginAction(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

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

export async function getProducts() {
  try {
    const products = await sql`SELECT * FROM products ORDER BY created_at DESC`;
    return { success: true, data: products };
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return { success: false, error: error.message || 'Database connection error' };
  }
}

export async function addProduct(product: any) {
  try {
    await ensureTables();
    const dataToSubmit = {
      category: product.category || 'games',
      name: product.name || 'Unnamed Product',
      description: product.description || 'No description provided.',
      price: String(product.price || '0'),
      specs: typeof product.specs === 'string' ? JSON.parse(product.specs) : (product.specs || {}),
      featured: !!product.featured,
      badge: product.badge || '',
      game_icon: product.game_icon || '⛏️',
    };

    await sql`
      INSERT INTO products ${sql(dataToSubmit, 'category', 'name', 'description', 'price', 'specs', 'featured', 'badge', 'game_icon')}
    `;
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
      specs: typeof product.specs === 'string' ? JSON.parse(product.specs) : (product.specs || {}),
      featured: !!product.featured,
      badge: product.badge || '',
      game_icon: product.game_icon || '⛏️',
    };

    await sql`
      UPDATE products SET ${sql(dataToSubmit, 'category', 'name', 'description', 'price', 'specs', 'featured', 'badge', 'game_icon')}
      WHERE id = ${id}
    `;
    return { success: true };
  } catch (error: any) {
    console.error('Error updating product:', error);
    return { success: false, error: error.message || 'Failed to update product' };
  }
}

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`;
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting product:', error);
    return { success: false, error: error.message || 'Failed to delete product' };
  }
}

// Partner Actions
export async function getPartners() {
  try {
    const partners = await sql`SELECT * FROM partners ORDER BY created_at DESC`;
    return { success: true, data: partners };
  } catch (error: any) {
    console.error('Error fetching partners:', error);
    return { success: false, error: error.message || 'Failed to fetch partners' };
  }
}

export async function addPartner(partner: any) {
  try {
    await ensureTables(); // Ensure tables exist before adding
    const dataToSubmit = {
      name: partner.name || 'Unnamed Partner',
      logo_url: partner.logo_url || 'https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048',
      server_link: partner.server_link || 'https://discord.gg/56VcDMZbrj',
      description: partner.description || '',
    };
    
    await sql`
      INSERT INTO partners ${sql(dataToSubmit, 'name', 'logo_url', 'server_link', 'description')}
    `;
    return { success: true };
  } catch (error: any) {
    console.error('Error adding partner:', error);
    return { success: false, error: error.message || 'Failed to add partner' };
  }
}

export async function updatePartner(id: string, partner: any) {
  try {
    const dataToSubmit = {
      name: partner.name || 'Unnamed Partner',
      logo_url: partner.logo_url || 'https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048',
      server_link: partner.server_link || 'https://discord.gg/56VcDMZbrj',
      description: partner.description || '',
    };

    await sql`
      UPDATE partners SET ${sql(dataToSubmit, 'name', 'logo_url', 'server_link', 'description')}
      WHERE id = ${id}
    `;
    return { success: true };
  } catch (error: any) {
    console.error('Error updating partner:', error);
    return { success: false, error: error.message || 'Failed to update partner' };
  }
}

export async function deletePartner(id: string) {
  try {
    await sql`DELETE FROM partners WHERE id = ${id}`;
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting partner:', error);
    return { success: false, error: error.message };
  }
}
