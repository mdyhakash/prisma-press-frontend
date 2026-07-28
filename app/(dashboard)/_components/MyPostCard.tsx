"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

export interface MyPostCardProps {
  id: string;
  title: string;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  views: number;
  comments: number;
  isPremium: boolean;
  createdAt: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  PUBLISHED: "default",
  DRAFT: "secondary",
  ARCHIVED: "outline",
};

// Desktop row — meant to be rendered inside a <Table>/<TableBody>
export function MyPostRow({
  id,
  title,
  status,
  views,
  comments,
  isPremium,
  createdAt,
  onEdit,
  onDelete,
}: MyPostCardProps) {
  return (
    <TableRow>
      <TableCell className="max-w-xs">
        <Link href={`/news/${id}`} className="font-medium hover:text-primary">
          {title}
        </Link>
        {isPremium && (
          <Badge
            variant="outline"
            className="ml-2 border-accent/40 text-[10px] text-accent"
          >
            Premium
          </Badge>
        )}
      </TableCell>
      <TableCell>
        <Badge variant={statusVariant[status]}>{status}</Badge>
      </TableCell>
      <TableCell className="text-right">{views}</TableCell>
      <TableCell className="text-right">{comments}</TableCell>
      <TableCell className="text-muted-foreground">{createdAt}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(id)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete?.(id)}
              className="text-destructive focus:text-destructive"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

// Mobile card — standalone, no Table wrapper needed
export function MyPostCard({
  id,
  title,
  status,
  views,
  comments,
  isPremium,
  createdAt,
  onEdit,
  onDelete,
}: MyPostCardProps) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="flex items-start justify-between gap-2">
        <Link
          href={`/news/${id}`}
          className="font-medium leading-snug hover:text-primary"
        >
          {title}
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(id)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete?.(id)}
              className="text-destructive focus:text-destructive"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Badge variant={statusVariant[status]}>{status}</Badge>
        <span className="text-xs text-muted-foreground">{views} views</span>
        <span className="text-xs text-muted-foreground">
          {comments} comments
        </span>
        <span className="text-xs text-muted-foreground">{createdAt}</span>
      </div>
    </div>
  );
}
