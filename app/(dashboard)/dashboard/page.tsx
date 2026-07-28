import { StatCard } from "../_components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bookmark, CreditCard } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const myComments = [
  {
    id: "c1",
    content: "This matches my experience exactly — great breakdown.",
    createdAt: "2h ago",
  },
  {
    id: "c2",
    content: "Would love a follow-up on this topic.",
    createdAt: "1d ago",
  },
];

export default function UserDashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Comments posted" value={12} icon={MessageSquare} />
        <StatCard label="Saved articles" value={8} icon={Bookmark} />
        <StatCard
          label="Subscription"
          value="Active"
          icon={CreditCard}
          accent
        />
      </div>

      <div className="mt-8 rounded-lg border border-border p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="prism-rule mb-3 w-10" />
            <h2 className="font-display text-lg font-semibold">Premium plan</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Renews on August 20, 2026
            </p>
          </div>
          <Badge className="bg-accent text-accent-foreground hover:bg-accent">
            Active
          </Badge>
        </div>
        <Button variant="outline" size="sm" className="mt-4">
          Manage subscription
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold">
          Your recent comments
        </h2>
        <div className="mt-3 rounded-lg border border-border">
          {myComments.map((c) => (
            <div
              key={c.id}
              className="flex items-start gap-3 border-b border-border px-5 py-4 last:border-b-0"
            >
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className="text-xs">Y</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-relaxed text-foreground/90">
                  {c.content}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.createdAt}
                </p>
              </div>
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
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
