"use client";
import { IconCheck, IconEdit, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  children: React.ReactNode;
  onSave?: (value: string) => void;
}

export default function EditableHeading({ as = "h1", className = "", children, onSave }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(children as string);
  const [tempValue, setTempValue] = useState(value);

  const Tag = as;

  function handleSave() {
    setValue(tempValue);
    setIsEditing(false);
    if (onSave) {
      onSave(tempValue);
    }
  }

  function handleCancel() {
    setTempValue(value);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          className={`${className} bg-transparent outline-none flex-1`}
          autoFocus
        />
        <Button variant="ghost" size="icon" onClick={handleSave}>
          <IconCheck />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleCancel}>
          <IconX />
        </Button>
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-2">
      <Tag className={className}>{value}</Tag>
      <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
        <IconEdit />
      </Button>
    </div>
  );
}
