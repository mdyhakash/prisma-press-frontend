import { Skeleton } from "@/components/ui/skeleton";

export function PricingSectionLoader() {
  return (
    <section>
      <div className="mx-auto max-w-2xl text-center">
        <Skeleton className="mx-auto h-[3px] w-14 rounded-full" />
        <Skeleton className="mx-auto mt-5 h-10 w-72" />
        <Skeleton className="mx-auto mt-4 h-4 w-96 max-w-full" />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border p-7">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-2/3" />

            <Skeleton className="mt-6 h-9 w-20" />

            <Skeleton className="mt-6 h-10 w-full rounded-md" />

            <Skeleton className="my-6 h-[3px] w-full rounded-full" />

            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
