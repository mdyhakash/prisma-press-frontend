"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MyPostRow, MyPostCard, type MyPostCardProps } from "./MyPostCard";

export function MyPostList({
  posts,
  onEdit,
  onDelete,
}: {
  posts: MyPostCardProps[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
        <p className="font-display text-lg font-semibold">No posts yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Start writing your first article for Prisma Press.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-lg border border-border sm:block">
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
            {posts.map((post) => (
              <MyPostRow
                key={post.id}
                {...post}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-3 sm:hidden">
        {posts.map((post) => (
          <MyPostCard
            key={post.id}
            {...post}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}
