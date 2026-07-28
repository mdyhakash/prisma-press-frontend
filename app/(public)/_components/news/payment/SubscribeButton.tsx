"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SubscribeButton({
  label,
  highlighted = false,
  onSubscribe,
}: {
  label: string;
  highlighted?: boolean;
  onSubscribe?: () => void;
}) {
  // UI-only loading state — swap with real mutation/pending state
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    onSubscribe?.();
    // Remove this timeout once wired to a real request
    setTimeout(() => setLoading(false), 1200);
  }

  return (
    <Button
      className={cn("w-full gap-2", !highlighted && "")}
      variant={highlighted ? "default" : "outline"}
      onClick={handleClick}
      disabled={loading}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {loading ? "Redirecting..." : label}
    </Button>
  );
}
