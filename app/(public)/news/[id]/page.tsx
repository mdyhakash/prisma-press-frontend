import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye, MessageSquare, Lock, Share2, Bookmark } from "lucide-react";
import { PremiumGate } from "../../_components/news/PremiumGate";
import { CommentForm } from "../../_components/news/CommentForm";
import { CommentItem } from "../../_components/news/CommentItem";
import { NewsCard } from "../../_components/news/NewsCard";

// Placeholder data — replace with your fetched post by params.id
const post = {
  id: "3",
  title: "Inside Stripe's Approach to Developer Documentation",
  content: `Stripe's documentation is often cited as the gold standard for developer experience — and for good reason. Every page is written with a single reader in mind: someone trying to ship something, right now, under pressure.

The team treats docs as a product, not an afterthought. Every code sample is tested against the live API. Every error message links back to the exact paragraph that explains it. Nothing is generic; everything assumes context.

What's less obvious is the editorial discipline behind it. Writers pair with engineers on every release. Nothing ships without a docs review. That single rule — no feature without documentation — is why the gap between "shipped" and "usable" barely exists at Stripe.`,
  thumbnail: "",
  tags: ["Engineering", "Writing"],
  isPremium: true,
  views: 3021,
  createdAt: "July 20, 2026",
  author: {
    name: "Nadia Rahman",
    avatar: "",
    bio: "Senior technical writer covering developer tools and documentation systems.",
  },
};

// Set to false to preview the paywalled state
const hasAccess = true;

const comments = [
  {
    id: "c1",
    content:
      "This matches my experience exactly — the docs review gate is the real unlock, not the writing style itself.",
    createdAt: "2h ago",
    author: { name: "Tom Becker" },
  },
  {
    id: "c2",
    content:
      "Would love a follow-up on how they handle versioning across API changes.",
    createdAt: "5h ago",
    author: { name: "Rafiq Islam" },
  },
];

const relatedPosts = [
  {
    id: "2",
    title: "Why Long-Form Writing Still Wins the Attention War",
    excerpt:
      "Short content gets the clicks, but long-form is quietly building the loyal readers that actually stick around.",
    tags: ["Writing"],
    views: 1240,
    commentCount: 18,
    createdAt: "Jul 22, 2026",
    author: { name: "Rafiq Islam" },
  },
  {
    id: "4",
    title: "The Case for Publishing in Public",
    excerpt:
      "Building an audience before you build the product — a look at why writers are becoming founders.",
    tags: ["Startups"],
    views: 892,
    commentCount: 7,
    createdAt: "Jul 18, 2026",
    author: { name: "Tom Becker" },
  },
];

export default function PostDetailPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <Link key={tag} href={`/news?tag=${tag.toLowerCase()}`}>
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
              {tag}
            </span>
          </Link>
        ))}
        {post.isPremium && (
          <Badge className="gap-1 bg-accent text-accent-foreground hover:bg-accent">
            <Lock className="h-3 w-3" /> Premium
          </Badge>
        )}
      </div>

      <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
        {post.title}
      </h1>

      <div className="prism-rule mt-5 w-14" />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.createdAt}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Bookmark">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {post.thumbnail && (
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg bg-secondary">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="prose prose-neutral mt-8 max-w-none font-serif text-[17px] leading-[1.8] text-foreground/90 dark:prose-invert prose-headings:font-display">
        {hasAccess ? (
          post.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)
        ) : (
          <>
            <p>{post.content.split("\n\n")[0]}</p>
            <PremiumGate />
          </>
        )}
      </article>

      <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Eye className="h-4 w-4" /> {post.views.toLocaleString()} views
        </span>
        <span className="flex items-center gap-1.5">
          <MessageSquare className="h-4 w-4" /> {comments.length} comments
        </span>
      </div>

      <Separator className="my-8" />

      <div className="flex items-start gap-4 rounded-lg border border-border p-5">
        <Avatar className="h-12 w-12 shrink-0">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-display font-semibold">{post.author.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {post.author.bio}
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="font-display text-xl font-semibold">
          Comments ({comments.length})
        </h2>

        <div className="mt-5">
          <CommentForm currentUser={{ name: "You" }} />
        </div>

        <div className="mt-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} {...comment} isOwner={false} />
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      <section>
        <h2 className="font-display text-xl font-semibold">
          More from Prisma Press
        </h2>
        <div className="mt-4">
          {relatedPosts.map((p) => (
            <NewsCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
