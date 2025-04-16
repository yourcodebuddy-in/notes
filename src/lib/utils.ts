import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeJSONParse(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
