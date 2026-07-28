import { NewsCard, type NewsCardProps } from "./NewsCard";

export function PublicNewsList({ posts }: { posts: NewsCardProps[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
        <p className="font-display text-lg font-semibold">No articles yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          New stories will show up here as soon as they're published.
        </p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <NewsCard key={post.id} {...post} />
      ))}
    </div>
  );
}
