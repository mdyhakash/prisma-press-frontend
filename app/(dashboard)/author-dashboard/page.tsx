import Link from "next/link";
import { StatCard } from "../_components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  Eye,
  MessageSquare,
  PenSquare,
  MoreHorizontal,
} from "lucide-react";

const stats = [
  { label: "Total posts", value: 24, icon: FileText },
  { label: "Total views", value: "18.4k", icon: Eye },
  { label: "Total comments", value: 312, icon: MessageSquare },
];

const recentPosts = [
  {
    id: "1",
    title: "Inside Stripe's Approach to Developer Documentation",
    status: "PUBLISHED",
    views: 3021,
    comments: 42,
    isPremium: true,
    createdAt: "Jul 20, 2026",
  },
  {
    id: "2",
    title: "Why Long-Form Writing Still Wins",
    status: "DRAFT",
    views: 0,
    comments: 0,
    isPremium: false,
    createdAt: "Jul 24, 2026",
  },
  {
    id: "3",
    title: "The Case for Publishing in Public",
    status: "PUBLISHED",
    views: 892,
    comments: 7,
    isPremium: false,
    createdAt: "Jul 18, 2026",
  },
];

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  PUBLISHED: "default",
  DRAFT: "secondary",
  ARCHIVED: "outline",
};

export default function AuthorDashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Recent posts</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/my-posts">View all</Link>
          </Button>
          <Button size="sm" className="gap-1.5" asChild>
            <Link href="/dashboard/my-posts?new=1">
              <PenSquare className="h-3.5 w-3.5" />
              New post
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop table */}
      <div className="mt-4 hidden overflow-hidden rounded-lg border border-border sm:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Comments</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="max-w-xs">
                  <Link
                    href={`/news/${post.id}`}
                    className="font-medium hover:text-primary"
                  >
                    {post.title}
                  </Link>
                  {post.isPremium && (
                    <Badge
                      variant="outline"
                      className="ml-2 border-accent/40 text-[10px] text-accent"
                    >
                      Premium
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[post.status]}>
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{post.views}</TableCell>
                <TableCell className="text-right">{post.comments}</TableCell>
                <TableCell className="text-muted-foreground">
                  {post.createdAt}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/my-posts">Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <div className="mt-4 flex flex-col gap-3 sm:hidden">
        {recentPosts.map((post) => (
          <div key={post.id} className="rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-2">
              <Link
                href={`/news/${post.id}`}
                className="font-medium leading-snug hover:text-primary"
              >
                {post.title}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 shrink-0"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/my-posts">Edit</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant={statusVariant[post.status]}>{post.status}</Badge>
              <span className="text-xs text-muted-foreground">
                {post.views} views
              </span>
              <span className="text-xs text-muted-foreground">
                {post.comments} comments
              </span>
              <span className="text-xs text-muted-foreground">
                {post.createdAt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
