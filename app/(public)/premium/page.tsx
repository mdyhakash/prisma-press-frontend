import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PremiumNewsList } from "../_components/news/PremiumNewsList";

// Toggle to preview the non-subscriber banner state
const isSubscribed = true;

const premiumPosts = [
  {
    id: "3",
    title: "Inside Stripe's Approach to Developer Documentation",
    excerpt:
      "A breakdown of the writing principles that made Stripe's docs the industry gold standard.",
    tags: ["Engineering"],
    views: 3021,
    commentCount: 42,
    createdAt: "Jul 20, 2026",
    author: { name: "Nadia Rahman" },
  },
  {
    id: "1",
    title: "The Quiet Discipline Behind Every Great Newsroom",
    excerpt:
      "How the best editorial teams turn chaos into clarity, one deadline at a time.",
    tags: ["Culture", "Media"],
    views: 2210,
    commentCount: 31,
    createdAt: "Jul 24, 2026",
    author: { name: "Amelia Cho" },
  },
];

export default function PremiumPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="prism-rule w-14" />
      <h1 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
        Premium
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Exclusive, in-depth stories reserved for Prisma Press subscribers.
      </p>

      {!isSubscribed && (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-border bg-secondary/40 px-6 py-10 text-center">
          <Lock className="h-5 w-5 text-accent" />
          <p className="font-display text-lg font-semibold">
            Subscribe to read Premium articles
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Unlock every gated story on Prisma Press and support the writers
            behind them.
          </p>
          <Button asChild className="mt-2">
            <Link href="/payment">View plans</Link>
          </Button>
        </div>
      )}

      <div className="mt-8">
        <PremiumNewsList posts={premiumPosts} />
      </div>
    </main>
  );
}
