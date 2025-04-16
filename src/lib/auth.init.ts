import { projectPlanningTemplate } from "@/data/templates/project-planning";
import { db } from "@/db";
import { notes, pages } from "@/db/schema/notes";
import { User } from "better-auth";
import { calculateReadTime, parseEditorJSContentToExcerpt } from "./editorjs";

export async function initUser(user: User) {
  try {
    const [page] = await db
      .insert(pages)
      .values({
        title: "Personal",
        color: "#F27700",
        userId: user.id,
        description: "This is your personal page",
        icon: "IconHash",
      })
      .returning({ id: pages.id });

    if (!page) return;

    const excerpt = parseEditorJSContentToExcerpt(projectPlanningTemplate.content);
    const readTime = calculateReadTime(projectPlanningTemplate.content);

    await db.insert(notes).values({
      title: projectPlanningTemplate.title,
      excerpt,
      content: JSON.stringify(projectPlanningTemplate.content),
      readTime,
      pinned: true,
      status: "active",
      userId: user.id,
      pageId: page.id,
    });
  } catch (_error) {}
}
