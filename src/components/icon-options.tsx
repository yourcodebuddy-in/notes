"use client";

import { pageIcons } from "@/data/icons";
import { Button } from "./ui/button";

interface Props {
  selectedIcon?: string;
  setSelectedIcon?: (icon: string) => void;
}

export function IconOptions({ selectedIcon, setSelectedIcon }: Props) {
  return (
    <div className="flex justify-baseline flex-wrap gap-2">
      {Object.entries(pageIcons).map(([name, Icon]) => (
        <Button
          type="button"
          size="icon"
          key={name}
          aria-selected={name === selectedIcon}
          onClick={() => setSelectedIcon?.(name)}
          variant="outline"
          className="aria-selected:border-primary"
        >
          <Icon stroke={1.5} className="!size-6" />
        </Button>
      ))}
    </div>
  );
}
