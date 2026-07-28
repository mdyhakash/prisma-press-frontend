import {
  LayoutDashboard,
  FileText,
  PenSquare,
  MessageSquare,
  CreditCard,
  UserCog,
} from "lucide-react";
import type { SidebarItem } from "./sidebarMenuItems";

export const authorSidebarItems: SidebarItem[] = [
  { label: "Overview", href: "/author-dashboard", icon: LayoutDashboard },
  { label: "My Posts", href: "/dashboard/my-posts", icon: FileText },
  { label: "New Post", href: "/dashboard/my-posts?new=1", icon: PenSquare },
  { label: "Comments", href: "/dashboard/comments", icon: MessageSquare },
  { label: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { label: "Profile Settings", href: "/dashboard/profile", icon: UserCog },
];
