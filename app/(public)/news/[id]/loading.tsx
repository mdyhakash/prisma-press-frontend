import { Skeleton } from "@/components/ui/skeleton";

export default function PostLoading() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex gap-2">
        <Skeleton className="h-4 w-14" />
        <Skeleton className="h-4 w-16" />
      </div>

      <div className="mt-4 space-y-2.5">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-2/3" />
      </div>

      <Skeleton className="mt-5 h-0.75 w-14 rounded-full" />

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
        <div className="flex gap-1">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>

      <Skeleton className="mt-8 aspect-video w-full rounded-lg" />

      <div className="mt-8 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/5" />
      </div>
      <div className="mt-6 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <div className="mt-8 flex gap-5">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="my-8 h-px w-full bg-border" />

      <div className="flex items-start gap-4 rounded-lg border border-border p-5">
        <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
        <div className="w-full space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-2/3" />
        </div>
      </div>

      <div className="my-8 h-px w-full bg-border" />

      <Skeleton className="h-6 w-40" />
      <div className="mt-5 flex gap-3">
        <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
      <div className="mt-6 space-y-5">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-3 border-b border-border pb-5">
            <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
            <div className="w-full space-y-2">
              <div className="flex gap-2">
                <Skeleton className="h-3.5 w-24" />
                <Skeleton className="h-3.5 w-12" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
