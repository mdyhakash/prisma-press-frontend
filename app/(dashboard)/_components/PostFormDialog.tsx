"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImagePlus, X, Lock, PenSquare } from "lucide-react";

export interface PostFormValues {
  title: string;
  content: string;
  tags: string[];
  thumbnail: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  isPremium: boolean;
}

const defaultValues: PostFormValues = {
  title: "",
  content: "",
  tags: [],
  thumbnail: null,
  status: "DRAFT",
  isPremium: false,
};

export function PostFormDialog({
  trigger,
  initialValues = defaultValues,
  mode = "create",
  open,
  onOpenChange,
}: {
  trigger?: React.ReactNode;
  initialValues?: PostFormValues;
  mode?: "create" | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [tags, setTags] = useState<string[]>(initialValues.tags);
  const [tagInput, setTagInput] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(
    initialValues.thumbnail,
  );
  const [isPremium, setIsPremium] = useState(initialValues.isPremium);

  function addTag() {
    const value = tagInput.trim();
    if (!value || tags.includes(value)) return;
    setTags([...tags, value]);
    setTagInput("");
  }

  function removeTag(tag: string) {
    setTags(tags.filter((t) => t !== tag));
  }

  function handleThumbnailPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbnail(URL.createObjectURL(file));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger ?? (
        <DialogTrigger asChild>
          <Button className="gap-1.5">
            <PenSquare className="h-3.5 w-3.5" />
            New post
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {mode === "create" ? "Create a new post" : "Edit post"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-2">
          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="post-title">Title</Label>
            <Input
              id="post-title"
              defaultValue={initialValues.title}
              placeholder="Give your post a title"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <Label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Cover image
            </Label>
            {thumbnail ? (
              <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-lg border border-border">
                <Image
                  src={thumbnail}
                  alt="Cover"
                  fill
                  className="object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  type="button"
                  className="absolute right-3 top-3 h-8 w-8"
                  onClick={() => setThumbnail(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <label className="mt-2 flex aspect-video w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/50">
                <ImagePlus className="h-6 w-6" />
                <span className="text-sm">Click to upload a cover image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailPick}
                />
              </label>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="post-content">Content</Label>
            <Textarea
              id="post-content"
              defaultValue={initialValues.content}
              placeholder="Write your story..."
              className="min-h-55 border-border font-serif text-[15px] leading-[1.7]"
            />
          </div>

          {/* Tags */}
          <div>
            <Label
              htmlFor="post-tags"
              className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
            >
              Tags
            </Label>
            <div className="mt-2 flex flex-wrap items-center gap-2 rounded-md border border-border p-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    aria-label={`Remove ${tag}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              <input
                id="post-tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === ",") {
                    e.preventDefault();
                    addTag();
                  }
                }}
                placeholder="Add a tag and press Enter"
                className="min-w-35 flex-1 bg-transparent px-1.5 py-1 text-sm outline-none"
              />
            </div>
          </div>

          {/* Settings */}
          <div className="grid grid-cols-1 gap-4 rounded-lg border border-border p-4 sm:grid-cols-2">
            <div>
              <Label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Status
              </Label>
              <Select defaultValue={initialValues.status}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DRAFT">Draft</SelectItem>
                  <SelectItem value="PUBLISHED">Published</SelectItem>
                  <SelectItem value="ARCHIVED">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between rounded-md border border-border px-4 py-2.5 sm:mt-6">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-medium">Premium content</p>
                  <p className="text-xs text-muted-foreground">
                    Gated behind subscription
                  </p>
                </div>
              </div>
              <Switch checked={isPremium} onCheckedChange={setIsPremium} />
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button variant="secondary">Save as draft</Button>
          <Button>{mode === "create" ? "Publish" : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
