"use client";
import { Button } from "@/components/ui/button";
import { clearTrash as clearTrashAction } from "@/db/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function ClearTrashButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function clearTrash() {
    try {
      setIsLoading(true);
      clearTrashAction();
      router.refresh();
    } catch (_error) {
      toast.error("Failed to clear trash");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button variant="destructive" onClick={clearTrash} disabled={isLoading} isLoading={isLoading}>
      Clear Trash
    </Button>
  );
}
