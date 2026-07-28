"use client";

import { useState } from "react";
import { MyPostList } from "../../_components/MyPostList";
import { PostFormDialog } from "../../_components/PostFormDialog";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

const myPosts = [
  {
    id: "1",
    title: "Inside Stripe's Approach to Developer Documentation",
    status: "PUBLISHED" as const,
    views: 3021,
    comments: 42,
    isPremium: true,
    createdAt: "Jul 20, 2026",
  },
  {
    id: "2",
    title: "Why Long-Form Writing Still Wins",
    status: "DRAFT" as const,
    views: 0,
    comments: 0,
    isPremium: false,
    createdAt: "Jul 24, 2026",
  },
  {
    id: "3",
    title: "The Case for Publishing in Public",
    status: "PUBLISHED" as const,
    views: 892,
    comments: 7,
    isPremium: false,
    createdAt: "Jul 18, 2026",
  },
  {
    id: "4",
    title: "An Old Draft About Editorial Calendars",
    status: "ARCHIVED" as const,
    views: 654,
    comments: 11,
    isPremium: false,
    createdAt: "Jun 2, 2026",
  },
];

export default function MyPostsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold">My posts</h2>
        <Button className="gap-1.5" onClick={() => setDialogOpen(true)}>
          <PenSquare className="h-3.5 w-3.5" />
          New post
        </Button>
      </div>

      <div className="mt-6">
        <MyPostList posts={myPosts} />
      </div>

      <PostFormDialog
        mode="create"
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        trigger={<span />}
      />
    </div>
  );
}
