import { accounts, sessions, users, verifications } from "./schema/auth";
import { notes, pages, templates } from "./schema/notes";

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Account = typeof accounts.$inferSelect;
export type Verification = typeof verifications.$inferSelect;
export type Page = typeof pages.$inferSelect;
export type Template = typeof templates.$inferSelect;
export type Note = typeof notes.$inferSelect;
