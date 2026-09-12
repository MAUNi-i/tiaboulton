import { createFileRoute, Link } from "@tanstack/react-router";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work")({ component: WorkPage });

const modes = [
  {
    title: "Counselling",
    body: "Integrative, person-centred, one-to-one. A confidential hour for the thing that will not sit still — grief, addiction in the family, a marriage, a private collapse that cannot be public.",
  },
  {
    title: "Coaching",
    body: "Certified recovery and life coach since 2010. For clients who already function at a high level and want the next move named, not soothed. Individuals and families.",
  },
  {
    title: "Supervision",
    body: "Coach supervisor for practitioners who need a clean, boundaried space. The work you do with others deserves a room of its own.",
  },
  {
    title: "Residential",
    body: "Twenty-four hours. Tia stays with the person. Complex cases, held as part of a multidisciplinary team. Price on application.",
  },
];

export function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="font-sans text-xs uppercase tracking-widest text-metal">The work</p>
      <h1 className="mt-3 max-w-2xl font-serif text-title">Counsellor. Coach. Supervisor. Residential.</h1>
      <p className="mt-4 max-w-xl text-muted">
        Tia walks alongside her clients from where they are to where they intend to be. Kindness, yes. Also
        precision. The practice is private. The academy and the PBO are not this site.
      </p>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {modes.map((m) => (
          <article key={m.title} className="border-t border-line pt-6">
            <h2 className="font-serif text-3xl">{m.title}</h2>
            <p className="mt-3 text-sm text-muted">{m.body}</p>
          </article>
        ))}
      </div>
      <section className="mt-16 border border-line bg-cream px-6 py-12 md:px-12">
        <p className="font-sans text-xs uppercase tracking-widest text-metal">When the hour is not enough</p>
        <h2 className="mt-3 max-w-2xl font-serif text-title">Residential support. 24 hours. P.O.A.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          For complex cases that need to be managed as part of a multidisciplinary team. Tia stays with the person —
          at home, or in a private setting — while GP, psychiatrist, hospital and family office do their work. She
          does not replace them. She holds the room around the clock.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/residential">Residential support</Link>
          </Button>
        </div>
      </section>
      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <figure>
          <img src="/media/tia.jpg" alt="Tia Boulton" className="w-full object-cover object-top" />
        </figure>
        <div className="self-center">
          <h2 className="font-serif text-3xl">A word on training</h2>
          <p className="mt-4 text-muted">
            Tia remains an affiliate of U-ACT Training School and has facilitated recovery-coach and peer-specialist
            training in the UK, South Africa, Australia, New Zealand and Hong Kong. That work has its own house. This
            site is her private practice — for clients who want the hour, or the live-in hold, not the curriculum.
          </p>
          <p className="mt-4 text-muted">
            Counselling on this practice is insured as fully qualified work under the BACP scheme.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SessionCheckoutButton kind="harley" />
            <SessionCheckoutButton kind="online" variant="ghost" />
            <Button variant="ghost" asChild>
              <Link to="/residential">Residential · P.O.A</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/insurance">Cover</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
