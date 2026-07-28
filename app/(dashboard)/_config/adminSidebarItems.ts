import {
  LayoutDashboard,
  FileText,
  Users,
  ShieldAlert,
  CreditCard,
  Settings,
} from "lucide-react";
import type { SidebarItem } from "./sidebarMenuItems";

export const adminSidebarItems: SidebarItem[] = [
  { label: "Overview", href: "/admin-dashboard", icon: LayoutDashboard },
  { label: "All Posts", href: "/admin-dashboard/posts", icon: FileText },
  { label: "Users", href: "/admin-dashboard/users", icon: Users },
  { label: "Comments", href: "/admin-dashboard/comments", icon: ShieldAlert },
  {
    label: "Subscriptions",
    href: "/admin-dashboard/subscriptions",
    icon: CreditCard,
  },
  { label: "Settings", href: "/admin-dashboard/settings", icon: Settings },
];
