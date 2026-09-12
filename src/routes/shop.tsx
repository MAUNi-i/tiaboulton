import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { collections, SHOP } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({ component: ShopPage });

const tags = ["All", ...Array.from(new Set(collections.map((c) => c.tag)))];

function ShopPage() {
  const [tag, setTag] = useState("All");
  const items = useMemo(
    () => (tag === "All" ? collections : collections.filter((c) => c.tag === tag)),
    [tag],
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">Lookbook</p>
      <h1 className="mt-3 font-serif text-title">The shop lives at orajewellery.com</h1>
      <p className="mt-4 max-w-xl text-muted">
        This is a lookbook, not a checkout. Open a collection and the Shopify house takes over — charms, hoops,
        custom work, 24-month warranty, free SA shipping over R1 500.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            className={cn(
              "h-10 border px-4 font-sans text-[0.7rem] uppercase tracking-[0.14em]",
              tag === t ? "border-ink bg-ink text-paper" : "border-line text-muted hover:border-ink hover:text-ink",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <a
            key={c.id}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden bg-card"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.16em] text-metal">{c.tag}</p>
              <h2 className="mt-1 font-serif text-3xl">{c.name}</h2>
              <p className="mt-2 text-sm text-muted">{c.blurb}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild>
          <a href={SHOP} target="_blank" rel="noreferrer">
            Open orajewellery.com
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/stack">Compose a stack here first</Link>
        </Button>
      </div>
    </main>
  );
}
