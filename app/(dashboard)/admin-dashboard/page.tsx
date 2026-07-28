import { StatCard } from "../_components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  FileText,
  MessageSquare,
  CreditCard,
  Check,
  X,
} from "lucide-react";

const stats = [
  { label: "Total users", value: "4,210", icon: Users },
  { label: "Total posts", value: "1,048", icon: FileText },
  { label: "Pending comments", value: 17, icon: MessageSquare, accent: true },
  { label: "Active subscriptions", value: 892, icon: CreditCard },
];

const pendingComments = [
  {
    id: "c1",
    content: "This is a great write up, thanks for sharing!",
    author: "Rafiq Islam",
    post: "Why Long-Form Writing Still Wins",
    createdAt: "10m ago",
  },
  {
    id: "c2",
    content: "I disagree, but appreciate the perspective.",
    author: "Tom Becker",
    post: "The Case for Publishing in Public",
    createdAt: "42m ago",
  },
  {
    id: "c3",
    content: "Could you cite the source for this claim?",
    author: "Nadia Rahman",
    post: "Inside Stripe's Docs",
    createdAt: "1h ago",
  },
];

const recentUsers = [
  {
    name: "Amelia Cho",
    role: "AUTHOR",
    status: "ACTIVE",
    joined: "Jul 12, 2026",
  },
  {
    name: "Rafiq Islam",
    role: "User",
    status: "ACTIVE",
    joined: "Jul 10, 2026",
  },
  {
    name: "Tom Becker",
    role: "User",
    status: "BLOCKED",
    joined: "Jun 28, 2026",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">
            Comments awaiting moderation
          </h2>
          <Badge variant="secondary">{pendingComments.length} pending</Badge>
        </div>

        <div className="mt-4 hidden overflow-hidden rounded-lg border border-border md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Comment</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Post</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingComments.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="max-w-xs truncate">
                    {c.content}
                  </TableCell>
                  <TableCell>{c.author}</TableCell>
                  <TableCell className="max-w-40 truncate text-muted-foreground">
                    {c.post}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {c.createdAt}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 text-emerald-600 hover:text-emerald-600"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:hidden">
          {pendingComments.map((c) => (
            <div key={c.id} className="rounded-lg border border-border p-4">
              <p className="text-sm">{c.content}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{c.author}</span>
                <span>·</span>
                <span className="truncate">{c.post}</span>
                <span>·</span>
                <span>{c.createdAt}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5 text-emerald-600 hover:text-emerald-600"
                >
                  <Check className="h-3.5 w-3.5" /> Approve
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5 text-destructive hover:text-destructive"
                >
                  <X className="h-3.5 w-3.5" /> Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold">Recent users</h2>
        <div className="mt-4 hidden overflow-hidden rounded-lg border border-border md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentUsers.map((u) => (
                <TableRow key={u.name}>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <Avatar className="h-7 w-7">
                        <AvatarFallback className="text-xs">
                          {u.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      {u.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{u.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={u.status === "ACTIVE" ? "default" : "outline"}
                      className={
                        u.status === "BLOCKED"
                          ? "border-destructive/40 text-destructive"
                          : ""
                      }
                    >
                      {u.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {u.joined}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
