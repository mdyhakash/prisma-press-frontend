import Link from "next/link";

const columns = [
  {
    title: "Read",
    links: [
      { label: "Latest", href: "/" },
      { label: "Categories", href: "/categories" },
      { label: "Authors", href: "/authors" },
    ],
  },
  {
    title: "Write",
    links: [
      { label: "Start writing", href: "/dashboard/posts/new" },
      { label: "Author guidelines", href: "/guidelines" },
    ],
  },
  {
    title: "Prisma Press",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="prism-rule mb-10 w-16" />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display text-xl font-semibold">
              Prisma <span className="prism-text">Press</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground">
              Independent writing, refracted into every angle.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-3 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Prisma Press. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer