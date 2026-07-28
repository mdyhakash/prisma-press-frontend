"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  DashboardSidebar,
  type DashboardRole,
} from "./_components/DashboardSidebar";
import { sidebarMenuItems } from "./_config/sidebarMenuItems";
import { authorSidebarItems } from "./_config/authorSidebarItems";
import { adminSidebarItems } from "./_config/adminSidebarItems";

// Swap with real auth/session user
const currentUser = { name: "Md Yasin Hossain", avatar: "" };

function resolveRole(pathname: string): DashboardRole {
  if (pathname.startsWith("/admin-dashboard")) return "admin";
  if (pathname.startsWith("/author-dashboard")) return "author";
  return "user";
}

const navByRole: Record<DashboardRole, typeof sidebarMenuItems> = {
  user: sidebarMenuItems,
  author: authorSidebarItems,
  admin: adminSidebarItems,
};

const titleByRole: Record<DashboardRole, string> = {
  user: "Dashboard",
  author: "Author Dashboard",
  admin: "Admin Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const role = resolveRole(pathname);
  const items = navByRole[role];

  return (
    <div className="min-h-svh bg-background lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden border-r border-border lg:block">
        <div className="sticky top-0 h-svh">
          <DashboardSidebar role={role} items={items} user={currentUser} />
        </div>
      </aside>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Dashboard navigation</SheetTitle>
          <DashboardSidebar role={role} items={items} user={currentUser} />
        </SheetContent>
      </Sheet>

      <div className="flex min-h-svh flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-md sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="font-display text-lg font-semibold sm:text-xl">
            {titleByRole[role]}
          </h1>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      </div>
    </div>
  );
}
