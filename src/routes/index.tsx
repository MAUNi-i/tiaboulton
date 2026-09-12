import { createFileRoute, Link } from "@tanstack/react-router";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { Button } from "@/components/ui/button";
import { chapters } from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-metal">
            The Anthony Group Practice · 15 Harley Street, W1G 9QQ · Online
          </p>
          <h1 className="font-serif text-display">
            Tia
            <br />
            Boulton
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Registered counsellor, coach, and supervisor. A private hour for people who already hold a great deal —
            and would like somewhere that does not require them to perform it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SessionCheckoutButton kind="harley" />
            <SessionCheckoutButton kind="online" variant="ghost" />
          </div>
        </div>
        <figure className="relative min-h-[420px] bg-cream">
          <img
            src="/media/tia.jpg"
            alt="Tia Boulton, registered counsellor and coach"
            className="h-full w-full object-cover object-top"
          />
          <figcaption className="absolute bottom-4 left-4 bg-paper/85 px-3 py-1 font-sans text-xs uppercase tracking-widest text-ink">
            Tia Boulton
          </figcaption>
        </figure>
      </section>

      <section className="bg-cream px-6 py-20 md:px-16">
        <blockquote className="mx-auto max-w-3xl font-serif text-title italic leading-snug">
          Everyone holds the ability to reach their goals and experience the joy of their existence. The work is to
          make a room in which that becomes possible.
          <cite className="mt-6 block font-sans text-xs not-italic uppercase tracking-widest text-metal">
            Tia Boulton
          </cite>
        </blockquote>
      </section>

      <section className="grid grid-cols-2 border-y border-line md:grid-cols-4">
        {[
          ["2010", "In practice as a coach"],
          ["£145", "Harley Street, W1G 9QQ"],
          ["£75", "Online hour, Stripe"],
          ["24h", "Residential support, P.O.A"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="border-b border-line px-4 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="font-serif text-4xl tabular-nums">{k}</p>
            <p className="mt-2 text-xs text-muted">{v}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-20 md:px-12">
        <p className="font-sans text-xs uppercase tracking-widest text-metal">The practice</p>
        <h2 className="mt-3 max-w-xl font-serif text-title">A private practice, not a programme.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {chapters.map((c) => (
            <article key={c.num}>
              <p className="font-sans text-xs uppercase tracking-widest text-metal">{c.num}</p>
              <h3 className="mt-2 font-serif text-3xl">{c.title}</h3>
              <p className="mt-3 max-w-md text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <figure className="min-h-[360px]">
          <img
            src="/media/agp-room2.jpg"
            alt="Room 2 at The Anthony Group Practice — fireplace and sofa"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="flex flex-col justify-center bg-cream px-6 py-16 md:px-12">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">Who she sees</p>
          <h2 className="mt-3 font-serif text-title">People who cannot be seen to struggle.</h2>
          <p className="mt-4 max-w-md text-muted">
            Founders, public lives, families under pressure, practitioners who hold others. The work is strength-based,
            kind, and exacting. It is not motivational. It is a room.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link to="/work">How she works</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
