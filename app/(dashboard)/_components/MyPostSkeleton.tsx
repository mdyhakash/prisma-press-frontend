import { Skeleton } from "@/components/ui/skeleton";

export function MyPostSkeleton() {
  return (
    <>
      {/* Desktop table skeleton */}
      <div className="hidden overflow-hidden rounded-lg border border-border sm:block">
        <div className="border-b border-border bg-secondary/40 px-4 py-3">
          <div className="flex gap-6">
            <Skeleton className="h-3.5 w-40" />
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-3.5 w-16" />
            <Skeleton className="h-3.5 w-16" />
          </div>
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 border-b border-border px-4 py-4 last:border-b-0"
          >
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="ml-auto h-8 w-8 rounded-md" />
          </div>
        ))}
      </div>

      {/* Mobile card skeleton */}
      <div className="flex flex-col gap-3 sm:hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-lg border border-border p-4"
          >
            <Skeleton className="h-4 w-4/5" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
