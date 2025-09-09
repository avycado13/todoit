import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: ['./db/schema.ts', './db/auth/schema.ts'],
  out: './drizzle',
});
