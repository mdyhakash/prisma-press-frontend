import { Lock } from "lucide-react";
import { NewsCard, type NewsCardProps } from "./NewsCard";

export function PremiumNewsList({ posts }: { posts: NewsCardProps[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
        <Lock className="h-6 w-6 text-muted-foreground" />
        <p className="mt-3 font-display text-lg font-semibold">
          No premium articles yet
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Premium stories from your favorite authors will appear here.
        </p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <NewsCard key={post.id} {...post} isPremium />
      ))}
    </div>
  );
}
