import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremiumGate() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-lg border border-border">
      <div className="pointer-events-none h-40 bg-linear-to-b from-transparent to-background" />
      <div className="flex flex-col items-center gap-3 border-t border-border bg-secondary/40 px-6 py-10 text-center">
        <div className="prism-rule w-10" />
        <div className="flex items-center gap-2 text-foreground">
          <Lock className="h-4 w-4" />
          <span className="font-display text-lg font-semibold">
            This is a Premium article
          </span>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Subscribe to Prisma Press to read this article in full and support the
          writers behind it.
        </p>
        <Button asChild className="mt-2">
          <Link href="/payment">Unlock with Premium</Link>
        </Button>
      </div>
    </div>
  );
}
