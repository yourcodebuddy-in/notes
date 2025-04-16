import { db } from "@/db";
import { pages } from "@/db/schema/notes";
import { getSessionStrict } from "@/lib/auth";
import { desc, eq, ilike } from "drizzle-orm";

export async function getPages({ search }: { search?: string }) {
  const session = await getSessionStrict();
  const data = await db.query.pages.findMany({
    where: eq(pages.userId, session.user.id),
    ...(search ? { where: ilike(pages.title, `%${search}%`) } : {}),
    orderBy: [desc(pages.createdAt)],
  });
  return data;
}
