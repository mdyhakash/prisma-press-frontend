import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  accent = false,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <Icon
          className={cn(
            "h-4 w-4",
            accent ? "text-accent" : "text-muted-foreground",
          )}
        />
      </div>
      <p className="mt-3 font-display text-3xl font-semibold">{value}</p>
      {trend && <p className="mt-1 text-xs text-muted-foreground">{trend}</p>}
    </div>
  );
}
