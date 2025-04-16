"use server";

import { db } from "@/db/";
import { notes, pages } from "@/db/schema/notes";
import { getSessionStrict } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { Note, Page } from "./types";

export async function createPage({
  title,
  description,
  icon,
  color,
}: Pick<Page, "title" | "description" | "icon" | "color">) {
  const session = await getSessionStrict();
  const [page] = await db
    .insert(pages)
    .values({
      title,
      description,
      userId: session.user.id,
      icon,
      color,
    })
    .returning({ id: pages.id });

  if (!page) {
    throw new Error("Failed to create page");
  }

  return { id: page.id };
}

export async function updatePage({ id, ...data }: Partial<Page> & { id: string }) {
  const session = await getSessionStrict();
  await db
    .update(pages)
    .set(data)
    .where(and(eq(pages.id, id), eq(pages.userId, session.user.id)));
}

export async function deletePage(id: string) {
  const session = await getSessionStrict();
  await db.delete(pages).where(and(eq(pages.id, id), eq(pages.userId, session.user.id)));
}

export async function updateNote({ id, ...data }: Partial<Note> & { id: string }) {
  const session = await getSessionStrict();
  await db
    .update(notes)
    .set(data)
    .where(and(eq(notes.id, id), eq(notes.userId, session.user.id)));
}

export async function createNote(
  data: Pick<Note, "title" | "pageId"> & { content?: string; excerpt?: string; readTime?: number }
) {
  const session = await getSessionStrict();
  await db.insert(notes).values({
    ...data,
    userId: session.user.id,
    content: data.content || "",
    excerpt: data.excerpt || "Write something...",
    readTime: data.readTime || 0,
  });
}

export async function deleteNote(id: string) {
  const session = await getSessionStrict();
  await db.delete(notes).where(and(eq(notes.id, id), eq(notes.userId, session.user.id)));
}

export async function clearTrash() {
  const session = await getSessionStrict();
  await db.delete(notes).where(and(eq(notes.status, "trashed"), eq(notes.userId, session.user.id)));
}
