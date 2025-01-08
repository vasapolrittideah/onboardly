import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';

import { timestamps } from './column.helpers';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  full_name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  ...timestamps,
});
