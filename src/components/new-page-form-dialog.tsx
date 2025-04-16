import { createPage as createPageAction } from "@/db/actions";
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
}

export function NewPageFormDialog({ open, onOpenChange }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string>("IconHash");
  const [selectedColor, setSelectedColor] = useState<string>("#ffb14f");
  const router = useRouter();

  async function createPage(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;

      const { id } = await createPageAction({
        title,
        description,
        icon: selectedIcon,
        color: selectedColor,
      });
      onOpenChange(false);
      router.push(`/${id}`);
    } catch (_error) {
      toast.error("Failed to create page");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DialogOrDrawer open={open} onOpenChange={onOpenChange}>
      <DialogOrDrawerContent>
        <DialogOrDrawerHeader>
          <DialogOrDrawerTitle>New page</DialogOrDrawerTitle>
          <DialogOrDrawerDescription>Create a new page to start writing.</DialogOrDrawerDescription>
        </DialogOrDrawerHeader>
        <form className="space-y-4" onSubmit={createPage}>
          <Label>Name</Label>
          <Input name="title" placeholder="My new page" />
          <Label>Description</Label>
          <Textarea name="description" placeholder="Write a short description for your page" />
          <Label>Icon</Label>
          <IconOptions selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
          <Label>Color</Label>
          <ColorOptions selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          <Button className="w-full" type="submit" disabled={isLoading} isLoading={isLoading}>
            Create
          </Button>
        </form>
      </DialogOrDrawerContent>
    </DialogOrDrawer>
  );
}
