"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface CommentItemProps {
  id: string;
  content: string;
  createdAt: string;
  status?: "APPROVED" | "REJECT";
  author: {
    name: string;
    avatar?: string | null;
  };
  isOwner?: boolean;
  isAdmin?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onModerate?: (id: string) => void;
}

export function CommentItem({
  id,
  content,
  createdAt,
  status = "APPROVED",
  author,
  isOwner,
  isAdmin,
  onEdit,
  onDelete,
  onModerate,
}: CommentItemProps) {
  return (
    <div className="flex gap-3 border-b border-border py-5 last:border-b-0">
      <Avatar className="h-9 w-9 shrink-0">
        <AvatarImage src={author.avatar ?? ""} alt={author.name} />
        <AvatarFallback className="text-xs">{author.name[0]}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">{author.name}</span>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
            {status === "REJECT" && (
              <Badge
                variant="outline"
                className="gap-1 border-destructive/40 text-xs text-destructive"
              >
                <ShieldAlert className="h-3 w-3" /> Rejected
              </Badge>
            )}
          </div>

          {(isOwner || isAdmin) && (
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
                {isOwner && (
                  <>
                    <DropdownMenuItem onClick={() => onEdit?.(id)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onDelete?.(id)}
                      className="text-destructive focus:text-destructive"
                    >
                      Delete
                    </DropdownMenuItem>
                  </>
                )}
                {isAdmin && (
                  <DropdownMenuItem onClick={() => onModerate?.(id)}>
                    {status === "APPROVED"
                      ? "Reject comment"
                      : "Approve comment"}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
          {content}
        </p>
      </div>
    </div>
  );
}
