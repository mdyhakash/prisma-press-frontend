"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LogOut } from "lucide-react";
import type { SidebarItem } from "../_config/sidebarMenuItems";

export type DashboardRole = "user" | "author" | "admin";

const roleLabel: Record<DashboardRole, string> = {
  user: "Reader",
  author: "Author",
  admin: "Admin",
};

export function DashboardSidebar({
  role,
  items,
  user,
}: {
  role: DashboardRole;
  items: SidebarItem[];
  user: { name: string; avatar?: string | null };
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 py-6">
        <Link href="/" className="font-display text-xl font-semibold">
          Prisma <span className="prism-text">Press</span>
        </Link>
        <Badge
          variant="secondary"
          className="mt-3 font-mono text-[10px] uppercase tracking-wider"
        >
          {roleLabel[role]} dashboard
        </Badge>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/75 hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-md px-2 py-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar ?? ""} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {roleLabel[role]}
            </p>
          </div>
          <button
            aria-label="Log out"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
