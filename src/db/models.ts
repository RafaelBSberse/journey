import { news, journal, journalist, user } from "./schema";

export type News = typeof news.$inferSelect;
export type Journalist = typeof journalist.$inferSelect;
export type Journal = typeof journal.$inferSelect;
export type User = typeof user.$inferSelect;