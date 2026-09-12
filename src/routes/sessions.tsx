import { createFileRoute } from "@tanstack/react-router";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { Button } from "@/components/ui/button";
import { EMAIL, HARLEY_PRICE_GBP, ONLINE_PRICE_GBP } from "@/lib/catalog";

export const Route = createFileRoute("/sessions")({ component: SessionsPage });

function SessionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="font-sans text-xs uppercase tracking-widest text-metal">Sessions</p>
      <h1 className="mt-3 max-w-2xl font-serif text-title">Harley Street, £145. Online, £75.</h1>
      <p className="mt-4 max-w-xl text-muted">
        One hour. Paid on Stripe. Tia writes to confirm the time after you book. Residential support is separate —
        twenty-four hours, price on application.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="border border-line bg-card p-8">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">In person</p>
          <h2 className="mt-2 font-serif text-3xl">15 Harley Street</h2>
          <p className="mt-6 font-serif text-5xl tabular-nums">£{HARLEY_PRICE_GBP}</p>
          <p className="mt-2 text-sm text-muted">
            The Anthony Group Practice, W1G 9QQ. Press 6. Fifty to sixty minutes in the room.
          </p>
          <div className="mt-8">
            <SessionCheckoutButton kind="harley" />
          </div>
        </article>
        <article className="border border-line p-8">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">Online</p>
          <h2 className="mt-2 font-serif text-3xl">Secure video</h2>
          <p className="mt-6 font-serif text-5xl tabular-nums">£{ONLINE_PRICE_GBP}</p>
          <p className="mt-2 text-sm text-muted">
            The same clinician, wherever you are. A link is sent after you book.
          </p>
          <div className="mt-8">
            <SessionCheckoutButton kind="online" variant="ghost" />
          </div>
        </article>
      </div>
      <p className="mt-10 text-sm text-muted">
        Prefer to write first?{" "}
        <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("A question before booking")}`} className="underline-offset-4 hover:underline">
          {EMAIL}
        </a>
      </p>
      <div className="mt-4">
        <Button variant="ghost" asChild>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("A question before booking")}`}>Write first</a>
        </Button>
      </div>
    </main>
  );
}
