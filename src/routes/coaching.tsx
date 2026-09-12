import { createFileRoute } from "@tanstack/react-router";
import { CoachingCheckoutButton } from "@/components/coaching-checkout";
import { Button } from "@/components/ui/button";
import { COACHING_PRICE_GBP, EMAIL } from "@/lib/catalog";

export const Route = createFileRoute("/coaching")({ component: CoachingPage });

function CoachingPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">Founder coaching</p>
        <h1 className="mt-3 font-serif text-title">A session with Natasha. £75.</h1>
        <p className="mt-4 max-w-xl text-muted">
          One hour. The numbers, the mistakes, the next move. For founders who are building in public and want a
          straight conversation from someone still on the bench.
        </p>
        <p className="mt-6 font-serif text-5xl tabular-nums">£{COACHING_PRICE_GBP}</p>
        <p className="mt-2 text-sm text-muted">One-to-one · Paid on Stripe · GBP</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CoachingCheckoutButton />
          <Button variant="ghost" asChild>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Founder coaching question")}`}>Write first</a>
          </Button>
        </div>
      </div>
      <ul className="space-y-6 self-center border-t border-line pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
        {[
          ["The work", "Jewellery house, Shopify, Cape Town studio, stacking a life around a bench."],
          ["The books", "What actually sold. What stalled. Shown the way she shows it on Instagram."],
          ["The next move", "A custom brief, a collection, a hire, or the thing you have been avoiding."],
        ].map(([t, d]) => (
          <li key={t}>
            <h2 className="font-serif text-2xl">{t}</h2>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
