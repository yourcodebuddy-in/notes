"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconSearch } from "@tabler/icons-react";
import { useQueryState } from "nuqs";

interface Props {
  className?: string;
}

export function Search({ className }: Props) {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
    throttleMs: 1000,
    shallow: false,
  });

  return (
    <div className={cn("relative", className)}>
      <IconSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        className="rounded-full p-5 !pl-10"
        value={search ?? ""}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
}
