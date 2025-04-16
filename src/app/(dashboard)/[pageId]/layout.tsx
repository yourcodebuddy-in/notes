import { pageIcons } from "@/data/icons";
import { IconHash } from "@tabler/icons-react";
import { redirect } from "next/navigation";
import React from "react";
import { PageFloatingOptions } from "./_components/page-floating-options";
import { getPage } from "./_utils/fetch";

interface Props {
  children: React.ReactNode;
  task: React.ReactNode;
  params: Promise<{ pageId: string }>;
}

export default async function Layout({ children, task, params }: Props) {
  const { pageId } = await params;
  const page = await getPage(pageId);
  if (!page) {
    redirect("/");
  }

  const Icon = pageIcons[page.icon as keyof typeof pageIcons] ?? IconHash;

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-[1.5fr_2fr] gap-4">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Icon style={{ color: page.color }} /> {page.title}
          </h1>
          <p className="text-sm text-muted-foreground">{page.description}</p>
        </div>
        {children}
      </div>
      <div>{task}</div>
      <PageFloatingOptions pageId={pageId} />
    </div>
  );
}
