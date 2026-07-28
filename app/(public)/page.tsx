import { NewsCard } from "./_components/news/NewsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

// Static placeholder data — wire up to your API later
const featuredPost = {
  id: "1",
  title: "The Quiet Discipline Behind Every Great Newsroom",
  excerpt:
    "How the best editorial teams turn chaos into clarity, one deadline at a time.",
  thumbnail: "",
  tags: ["Culture", "Media"],
  isPremium: true,
  createdAt: "Jul 24, 2026",
  author: { name: "Amelia Cho", avatar: "" },
};

const feedPosts = [
  {
    id: "2",
    title: "Why Long-Form Writing Still Wins the Attention War",
    excerpt:
      "Short content gets the clicks, but long-form is quietly building the loyal readers that actually stick around.",
    thumbnail: "",
    tags: ["Writing"],
    isPremium: false,
    views: 1240,
    commentCount: 18,
    createdAt: "Jul 22, 2026",
    author: { name: "Rafiq Islam", avatar: "" },
  },
  {
    id: "3",
    title: "Inside Stripe's Approach to Developer Documentation",
    excerpt:
      "A breakdown of the writing principles that made Stripe's docs the industry gold standard.",
    thumbnail: "",
    tags: ["Engineering"],
    isPremium: true,
    views: 3021,
    commentCount: 42,
    createdAt: "Jul 20, 2026",
    author: { name: "Nadia Rahman", avatar: "" },
  },
  {
    id: "4",
    title: "The Case for Publishing in Public",
    excerpt:
      "Building an audience before you build the product — a look at why writers are becoming founders.",
    thumbnail: "",
    tags: ["Startups"],
    isPremium: false,
    views: 892,
    commentCount: 7,
    createdAt: "Jul 18, 2026",
    author: { name: "Tom Becker", avatar: "" },
  },
  {
    id: "5",
    title: "A Beginner's Guide to Editorial Calendars",
    excerpt:
      "Consistency beats intensity. Here's how independent writers plan a year of content without burning out.",
    thumbnail: "",
    tags: ["Productivity"],
    isPremium: false,
    views: 654,
    commentCount: 11,
    createdAt: "Jul 15, 2026",
    author: { name: "Amelia Cho", avatar: "" },
  },
];

const trendingTags = [
  "Writing",
  "Startups",
  "Engineering",
  "Culture",
  "Productivity",
  "Media",
  "Design",
];

const topAuthors = [
  { name: "Amelia Cho", posts: 42 },
  { name: "Nadia Rahman", posts: 37 },
  { name: "Rafiq Islam", posts: 29 },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Featured post */}
      <section>
        <NewsCard variant="featured" {...featuredPost} />
      </section>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] sm:mt-14">
        {/* Feed */}
        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-2xl font-semibold">Latest</h2>
            <Tabs defaultValue="latest" className="w-full sm:w-auto">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="latest" className="gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Latest
                </TabsTrigger>
                <TabsTrigger value="trending" className="gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Trending
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mt-6">
            {feedPosts.map((post) => (
              <NewsCard key={post.id} {...post} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/news">Browse all news</Link>
            </Button>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Trending topics
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer font-normal hover:bg-primary hover:text-primary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Top authors
            </h3>
            <div className="mt-3 flex flex-col gap-4">
              {topAuthors.map((author) => (
                <div
                  key={author.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{author.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {author.posts} posts
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border p-5">
            <div className="prism-rule mb-3 w-10" />
            <h3 className="font-display text-lg font-semibold">Go Premium</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Unlock every gated article and support independent writers.
            </p>
            <Button size="sm" className="mt-4 w-full" asChild>
              <Link href="/payment">View plans</Link>
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}
