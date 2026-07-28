import { Skeleton } from "@/components/ui/skeleton";

export function NewsSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 border-b border-border py-6 first:pt-0 sm:gap-6"
        >
          <div className="flex-1 space-y-3">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex gap-3 pt-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          <Skeleton className="hidden aspect-4/3 w-32 shrink-0 rounded-md sm:block sm:w-40" />
        </div>
      ))}
    </div>
  );
}
