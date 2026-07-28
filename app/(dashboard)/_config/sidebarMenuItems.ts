import {
  LayoutDashboard,
  MessageSquare,
  CreditCard,
  UserCog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const sidebarMenuItems: SidebarItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Comments", href: "/dashboard/comments", icon: MessageSquare },
  { label: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { label: "Profile Settings", href: "/dashboard/profile", icon: UserCog },
];
