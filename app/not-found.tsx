import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
      <span className="font-display text-8xl font-semibold prism-text sm:text-9xl">
        404
      </span>

      <div className="prism-rule mt-6 w-14" />

      <h1 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
        This page ran out of print
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        The article or page you're looking for doesn't exist, was moved, or may
        have been unpublished.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
        <Button variant="outline" asChild className="gap-2">
          <Link href="/categories">
            <Search className="h-4 w-4" />
            Browse articles
          </Link>
        </Button>
      </div>
    </main>
  );
}
