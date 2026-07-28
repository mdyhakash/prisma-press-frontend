"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsSearchBar({
  placeholder = "Search articles, authors, tags...",
}: {
  placeholder?: string;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-11 border-border pl-10 pr-9"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2"
          onClick={() => setValue("")}
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      )}
    </div>
  );
}
