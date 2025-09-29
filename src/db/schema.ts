import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const news = sqliteTable('news', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    content: text('content').notNull(),
    prompt: text('prompt').notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text()
      .notNull()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export const journalist = sqliteTable('journalist', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    bio: text('bio').notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text()
      .notNull()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export const journal = sqliteTable('journal', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    content: text('content').notNull(),
    avatar: text('avatar'),
    idJournalist: integer('id_journalist')
      .notNull()
      .references(() => journalist.id),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text()
      .notNull()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});

export const user = sqliteTable('user', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('username').notNull(),
    sendForEmail: integer('send_for_email', { mode: 'boolean' }).notNull().default(false),
    sendPushNotifications: integer('send_push_notifications', { mode: 'boolean' }).notNull().default(true),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text()
      .notNull()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
