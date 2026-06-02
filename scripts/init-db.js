const postgres = require('postgres');
require('dotenv').config({ path: '.env.local' });

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

async function initDB() {
  try {
    console.log('Initializing database...');
    
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        category TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        price TEXT NOT NULL,
        specs JSONB DEFAULT '{}',
        featured BOOLEAN DEFAULT false,
        badge TEXT,
        game_icon TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log('Table "products" created or already exists.');

    // Optional: Seed initial data if table is empty
    const count = await sql`SELECT count(*) FROM products`;
    if (parseInt(count[0].count) === 0) {
      console.log('Seeding initial data...');
      // Add a few sample plans
      await sql`
        INSERT INTO products (category, name, description, price, specs, featured, badge, game_icon)
        VALUES 
          ('games', 'Starter', 'Entry-level gaming', '50', '{"ram": "2GB DDR4", "cpu": "1 vCore", "ssd": "4GB NVMe"}', false, NULL, '⛏️'),
          ('games', 'Ultra Boost', 'Power players', '150', '{"ram": "6GB DDR4", "cpu": "200%", "ssd": "20GB NVMe"}', true, 'MOST POPULAR', '⛏️'),
          ('vps', 'Basic', 'Small apps & testing', '250', '{"ram": "2GB", "cpu": "1 vCore", "ssd": "30GB"}', false, NULL, NULL)
      `;
      console.log('Seeding complete.');
    }

  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    process.exit();
  }
}

initDB();
