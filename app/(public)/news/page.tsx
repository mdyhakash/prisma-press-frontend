import { NewsSearchBar } from "../_components/news/NewsSearchBar";
import { PublicNewsList } from "../_components/news/PublicNewsList";
import { Badge } from "@/components/ui/badge";

// Placeholder data — replace with your fetched posts
const posts = [
  {
    id: "2",
    title: "Why Long-Form Writing Still Wins the Attention War",
    excerpt:
      "Short content gets the clicks, but long-form is quietly building the loyal readers that actually stick around.",
    tags: ["Writing"],
    isPremium: false,
    views: 1240,
    commentCount: 18,
    createdAt: "Jul 22, 2026",
    author: { name: "Rafiq Islam" },
  },
  {
    id: "3",
    title: "Inside Stripe's Approach to Developer Documentation",
    excerpt:
      "A breakdown of the writing principles that made Stripe's docs the industry gold standard.",
    tags: ["Engineering"],
    isPremium: true,
    views: 3021,
    commentCount: 42,
    createdAt: "Jul 20, 2026",
    author: { name: "Nadia Rahman" },
  },
  {
    id: "4",
    title: "The Case for Publishing in Public",
    excerpt:
      "Building an audience before you build the product — a look at why writers are becoming founders.",
    tags: ["Startups"],
    isPremium: false,
    views: 892,
    commentCount: 7,
    createdAt: "Jul 18, 2026",
    author: { name: "Tom Becker" },
  },
];

const filterTags = ["All", "Writing", "Engineering", "Startups", "Culture"];

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="prism-rule w-14" />
      <h1 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
        All news
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Every story published on Prisma Press, newest first.
      </p>

      <div className="mt-6">
        <NewsSearchBar />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filterTags.map((tag, i) => (
          <Badge
            key={tag}
            variant={i === 0 ? "default" : "secondary"}
            className="cursor-pointer font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-8">
        <PublicNewsList posts={posts} />
      </div>
    </main>
  );
}
