import { updatePage as updatePageAction } from "@/db/actions";
import { Page } from "@/db/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ColorOptions } from "./color-options";
import { IconOptions } from "./icon-options";
import { Button } from "./ui/button";
import {
  DialogOrDrawer,
  DialogOrDrawerContent,
  DialogOrDrawerDescription,
  DialogOrDrawerHeader,
  DialogOrDrawerTitle,
} from "./ui/dialog-or-drawer";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  page: Page;
}

export function EditPageFormDialog({ open, onOpenChange, page }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string>(page.icon);
  const [selectedColor, setSelectedColor] = useState<string>(page.color);
  const router = useRouter();

  async function updatePage(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;

      await updatePageAction({
        id: page.id,
        title,
        description,
        icon: selectedIcon,
        color: selectedColor,
      });
      onOpenChange(false);
      router.refresh();
    } catch (_error) {
      toast.error("Failed to update page");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DialogOrDrawer open={open} onOpenChange={onOpenChange}>
      <DialogOrDrawerContent>
        <DialogOrDrawerHeader>
          <DialogOrDrawerTitle>Edit page</DialogOrDrawerTitle>
          <DialogOrDrawerDescription>Edit the page to start writing.</DialogOrDrawerDescription>
        </DialogOrDrawerHeader>
        <form className="space-y-4" onSubmit={updatePage}>
          <Label>Name</Label>
          <Input name="title" placeholder="My new page" defaultValue={page.title} />
          <Label>Description</Label>
          <Textarea
            name="description"
            placeholder="Write a short description for your page"
            defaultValue={page.description ?? ""}
          />
          <Label>Icon</Label>
          <IconOptions selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
          <Label>Color</Label>
          <ColorOptions selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          <Button className="w-full" type="submit" disabled={isLoading} isLoading={isLoading}>
            Update
          </Button>
        </form>
      </DialogOrDrawerContent>
    </DialogOrDrawer>
  );
}
