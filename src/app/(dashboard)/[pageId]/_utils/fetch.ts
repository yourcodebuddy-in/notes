import { db } from "@/db";
import { notes, pages } from "@/db/schema/notes";
import { getSessionStrict } from "@/lib/auth";
import { and, desc, eq, ilike } from "drizzle-orm";

export async function getPage(pageId: string) {
  const session = await getSessionStrict();
  const [page] = await db
    .select()
    .from(pages)
    .where(and(eq(pages.id, pageId), eq(pages.userId, session.user.id)))
    .limit(1);

  return page;
}

export async function getNotes({
  pageId,
  status,
  search,
}: {
  pageId: string;
  status: "active" | "trashed" | "archived";
  search?: string;
}) {
  const session = await getSessionStrict();
  const data = await db
    .select({
      id: notes.id,
      title: notes.title,
      excerpt: notes.excerpt,
      pinned: notes.pinned,
      readTime: notes.readTime,
    })
    .from(notes)
    .where(
      and(
        eq(notes.pageId, pageId),
        eq(notes.userId, session.user.id),
        search ? ilike(notes.title, `%${search}%`) : undefined,
        eq(notes.status, status)
      )
    )
    .orderBy(desc(notes.createdAt));
  return data;
}

export async function getNote({ noteId, status }: { noteId: string; status: "active" | "trashed" | "archived" }) {
  const session = await getSessionStrict();
  const [note] = await db
    .select()
    .from(notes)
    .where(and(eq(notes.id, noteId), eq(notes.userId, session.user.id), eq(notes.status, status)))
    .limit(1);

  return note;
}
