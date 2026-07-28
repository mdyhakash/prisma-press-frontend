import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Featured post skeleton */}
      <Skeleton className="aspect-[16/9] w-full rounded-lg sm:aspect-[21/9]" />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] sm:mt-14">
        {/* Feed skeleton */}
        <section>
          <div className="flex items-center justify-between">
            <Skeleton className="h-7 w-28" />
            <Skeleton className="h-9 w-40 rounded-md" />
          </div>

          <div className="mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
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
                <Skeleton className="hidden aspect-[4/3] w-32 shrink-0 rounded-md sm:block sm:w-40" />
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar skeleton */}
        <aside className="flex flex-col gap-8">
          <div>
            <Skeleton className="h-3 w-24" />
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-3 w-20" />
            <div className="mt-3 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-12" />
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="h-40 w-full rounded-lg" />
        </aside>
      </div>
    </main>
  );
}
