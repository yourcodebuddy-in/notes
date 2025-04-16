import { PageMenu } from "@/components/layout/page-menu";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pageIcons } from "@/data/icons";
import { Page } from "@/db/types";
import { IconDots, IconHash } from "@tabler/icons-react";
import { format } from "date-fns";
import Link from "next/link";

interface Props {
  page: Page;
}

export function PageCard({ page }: Props) {
  const Icon = pageIcons[page.icon as keyof typeof pageIcons] ?? <IconHash />;

  return (
    <Card className="p-4 rounded-md shadow-none hover:shadow-sm transition-all duration-200">
      <CardHeader className="p-0 flex items-start justify-between">
        <Link href={`/${page.id}/`}>
          <div className="space-y-3">
            <Icon className="size-8" style={{ color: page.color }} />
            <CardTitle>{page.title}</CardTitle>
            <CardDescription>Created on {format(page.createdAt, "MMM d, yyyy")}</CardDescription>
          </div>
        </Link>
        <PageMenu page={page}>
          <Button variant="ghost" size="icon">
            <IconDots className="size-4" />
          </Button>
        </PageMenu>
      </CardHeader>
    </Card>
  );
}
