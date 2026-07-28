import { Skeleton } from "@/components/ui/skeleton";
import { NewsSkeleton } from "../_components/news/NewsSkeleton";

export default function NewsLoading() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <Skeleton className="h-0.75 w-14 rounded-full" />
      <Skeleton className="mt-5 h-9 w-56" />
      <Skeleton className="mt-2 h-4 w-72" />
      <Skeleton className="mt-6 h-11 w-full rounded-md" />
      <div className="mt-4 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-16 rounded-full" />
        ))}
      </div>
      <div className="mt-8">
        <NewsSkeleton rows={4} />
      </div>
    </main>
  );
}
