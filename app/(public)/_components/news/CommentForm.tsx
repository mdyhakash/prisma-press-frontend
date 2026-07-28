"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface CommentFormProps {
  currentUser?: { name: string; avatar?: string | null };
  onSubmit?: (content: string) => void;
  placeholder?: string;
  submitLabel?: string;
  autoFocus?: boolean;
}

export function CommentForm({
  currentUser,
  onSubmit,
  placeholder = "Add to the discussion...",
  submitLabel = "Comment",
  autoFocus,
}: CommentFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    if (!value.trim()) return;
    onSubmit?.(value);
    setValue("");
  }

  return (
    <div className="flex gap-3">
      <Avatar className="h-9 w-9 shrink-0">
        <AvatarImage src={currentUser?.avatar ?? ""} alt={currentUser?.name} />
        <AvatarFallback className="text-xs">
          {currentUser?.name?.[0] ?? "U"}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="min-h-20 resize-none border-border"
        />
        <div className="mt-2 flex justify-end">
          <Button size="sm" onClick={handleSubmit} disabled={!value.trim()}>
            {submitLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
