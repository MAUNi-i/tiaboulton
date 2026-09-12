import { createFileRoute } from "@tanstack/react-router";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { Button } from "@/components/ui/button";
import { EMAIL, SESSION_PRICE_GBP } from "@/lib/catalog";

export const Route = createFileRoute("/sessions")({ component: SessionsPage });

function SessionsPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-metal">Sessions</p>
        <h1 className="mt-3 font-serif text-title">A private hour with Tia. £75.</h1>
        <p className="mt-4 max-w-xl text-muted">
          One hour. In the room at The Anthony Group Practice, 15 Harley Street, or on a secure video link. Paid on
          Stripe. Tia writes to confirm the time after you book.
        </p>
        <p className="mt-6 font-serif text-5xl tabular-nums">£{SESSION_PRICE_GBP}</p>
        <p className="mt-2 text-sm text-muted">One-to-one · GBP · Harley Street or online</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SessionCheckoutButton />
          <Button variant="ghost" asChild>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("A question before booking")}`}>Write first</a>
          </Button>
        </div>
      </div>
      <ul className="space-y-6 self-center border-t border-line pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
        {[
          ["The hour", "Fifty to sixty minutes. You set the agenda. She holds the frame."],
          ["The room", "The Anthony Group Practice, 15 Harley Street, W1G 9QQ — or online, wherever you are."],
          ["The after", "No group, no newsletter. If a further hour is useful, you will know."],
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
