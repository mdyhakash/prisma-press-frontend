import Link from "next/link";
import Image from "next/image";
import { Lock, MessageSquare, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  thumbnail?: string | null;
  tags: string[];
  isPremium?: boolean;
  views?: number;
  commentCount?: number;
  createdAt: string;
  author: {
    name: string;
    avatar?: string | null;
  };
  variant?: "row" | "featured";
}

export function NewsCard({
  id,
  title,
  excerpt,
  thumbnail,
  tags,
  isPremium,
  views = 0,
  commentCount = 0,
  createdAt,
  author,
  variant = "row",
}: NewsCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/news/${id}`} className="group block">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-secondary sm:aspect-21/9">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-4xl text-muted-foreground/40">
              Prisma Press
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          {isPremium && (
            <Badge className="absolute right-4 top-4 gap-1 bg-accent text-accent-foreground hover:bg-accent">
              <Lock className="h-3 w-3" /> Premium
            </Badge>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <div className="prism-rule mb-3 w-14" />
            <div className="mb-2 flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <div className="mt-4 flex items-center gap-2.5">
              <Avatar className="h-7 w-7 border border-white/30">
                <AvatarImage src={author.avatar ?? ""} alt={author.name} />
                <AvatarFallback className="text-xs">
                  {author.name[0]}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-white/90">{author.name}</span>
              <span className="text-white/50">·</span>
              <span className="text-sm text-white/70">{createdAt}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${id}`}
      className="group flex gap-4 border-b border-border py-6 first:pt-0 sm:gap-6"
    >
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {tags.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] uppercase tracking-wider text-primary"
            >
              {tag}
            </span>
          ))}
          {isPremium && (
            <Badge
              variant="outline"
              className="gap-1 border-accent/40 text-accent"
            >
              <Lock className="h-3 w-3" /> Premium
            </Badge>
          )}
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary sm:text-xl">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground sm:text-[15px]">
          {excerpt}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Avatar className="h-5 w-5">
              <AvatarImage src={author.avatar ?? ""} alt={author.name} />
              <AvatarFallback className="text-[10px]">
                {author.name[0]}
              </AvatarFallback>
            </Avatar>
            {author.name}
          </span>
          <span>{createdAt}</span>
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" /> {views}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" /> {commentCount}
          </span>
        </div>
      </div>

      {thumbnail && (
        <div
          className={cn(
            "relative hidden aspect-4/3 w-32 shrink-0 overflow-hidden rounded-md bg-secondary sm:block sm:w-40",
          )}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </Link>
  );
}
