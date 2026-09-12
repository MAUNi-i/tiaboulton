import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { chapters, INSTAGRAM_FOUNDER, SHOP } from "@/lib/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
          <p className="mb-4 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">
            Cape Town · Founder & designer
          </p>
          <h1 className="font-serif text-display">
            Natasha
            <br />
            Collins
          </h1>
          <p className="mt-6 max-w-md text-muted">
            I made my first piece of jewellery at fifteen. ORA was born from instinct. From saying no to no.
            From turning gold and silver into something you feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/stack">Build a charm stack</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href={SHOP} target="_blank" rel="noreferrer">
                Open the shop
              </a>
            </Button>
          </div>
        </div>
        <figure className="relative min-h-[420px]">
          <img
            src="/media/hoop-charms.jpg"
            alt="Gold hoop with clip charms on ivory linen"
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-paper">
            Worn your way. No permission needed.
          </figcaption>
        </figure>
      </section>

      <section className="bg-cream px-6 py-20 md:px-16">
        <blockquote className="mx-auto max-w-3xl font-serif text-title italic leading-snug">
          I do not design for someday. I design for every version of you. Bold. Bruised. Becoming. Here. Now.
          Always.
          <cite className="mt-6 block font-sans text-[0.72rem] not-italic uppercase tracking-[0.2em] text-metal">
            Natasha x
          </cite>
        </blockquote>
      </section>

      <section className="grid grid-cols-2 border-y border-line md:grid-cols-4">
        {[
          ["15", "Age she made her first piece"],
          ["10k+", "ORA pieces sold and counting"],
          ["24", "Month craftsmanship warranty"],
          ["CT", "Handmade in Cape Town"],
        ].map(([k, v]) => (
          <div key={k} className="border-b border-line px-4 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0">
            <p className="font-serif text-4xl tabular-nums">{k}</p>
            <p className="mt-2 text-xs text-muted">{v}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-20 md:px-12">
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">The story</p>
        <h2 className="mt-3 max-w-xl font-serif text-title">From a first piece at fifteen to a Cape Town house.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {chapters.map((c) => (
            <article key={c.num}>
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-metal">{c.num}</p>
              <h3 className="mt-2 font-serif text-3xl">{c.title}</h3>
              <p className="mt-3 max-w-md text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img src="/media/studio.jpg" alt="Cape Town jewellery bench" className="h-full min-h-[360px] w-full object-cover" />
        <div className="flex flex-col justify-center bg-cream px-6 py-16 md:px-12">
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">The house</p>
          <h2 className="mt-3 font-serif text-title">ORA Jewellery</h2>
          <p className="mt-4 max-w-md text-muted">
            Intuitively crafted jewels a woman can make her own signature with — and live in. Follow the numbers
            and the mistakes in real time on Instagram.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/shop">Enter the lookbook</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href={INSTAGRAM_FOUNDER} target="_blank" rel="noreferrer">
                @natasha.thefounder
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
