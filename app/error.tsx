"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting service here
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10">
          <AlertTriangle className="h-7 w-7 text-destructive" />
        </div>

        <div className="prism-rule mt-6 w-14" />

        <h1 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
          Something broke in the press room
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
          An unexpected error stopped this page from loading. Try again, or head
          back to the homepage.
        </p>

        {error.digest && (
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            Error reference: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => reset()} className="gap-2">
            <RefreshCcw className="h-4 w-4" />
            Try again
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
