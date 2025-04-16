"use client";

import { cn } from "@/lib/utils";
import type React from "react";

interface Props {
  title: string;
  color: string;
  icon: React.ReactNode;
  description?: string;
  className?: string;
}

export default function FolderCard({ title, color, icon, description, className }: Props) {
  return (
    <div className={cn("relative w-60 sm:w-64 md:w-72 h-44 sm:h-48 md:h-52 cursor-pointer group", className)}>
      <div className="relative w-full h-full">
        {/* Folder Back */}
        <div
          className="absolute top-6 left-0 w-full h-[calc(100%-6px)] rounded-lg rounded-tl-none z-10"
          style={{ backgroundColor: color, opacity: 0.8 }}
        />

        {/* Folder Tab */}
        <div
          className="absolute top-0 left-0 w-3/4 h-8 sm:h-10 rounded-t-lg z-30"
          style={{ backgroundColor: color, filter: "brightness(0.9)" }}
        />

        {/* Content */}
        <div
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[80%] bg-white rounded-md z-30",
            "transition-all duration-700 ease-out border group-hover:-translate-y-1/2"
          )}
          style={{ boxShadow: `0 4px 6px -1px ${color}30` }}
        >
          <div className="w-full h-full flex flex-col items-center justify-start p-4 sm:p-6 pt-3 sm:pt-6">
            <div className="mb-1">{icon}</div>
            <h3 className="text-sm sm:text-base font-medium text-gray-800 text-center mb-2 truncate">{title}</h3>
            {description && <p className="text-xs sm:text-sm text-gray-600 text-center line-clamp-3">{description}</p>}
          </div>
        </div>

        {/* Folder Front */}
        <div
          className="absolute top-6 left-0 w-full h-[calc(100%-6px)] rounded-lg rounded-tl-none z-30 overflow-hidden"
          style={{
            backgroundColor: color,
            boxShadow: `0 4px 6px -1px ${color}50`,
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 10% 0%, 10% 20%, 90% 20%, 90% 0%, 100% 0%, 100% 8px, calc(100% - 8px) 0%)",
          }}
        ></div>
      </div>
    </div>
  );
}
