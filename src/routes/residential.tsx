import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/lib/catalog";

export const Route = createFileRoute("/residential")({ component: ResidentialPage });

const points = [
  [
    "Twenty-four hours",
    "Tia stays with the person. Not a rota of strangers. One clinician in the room, around the clock, for as long as the case requires.",
  ],
  [
    "Complex cases",
    "When the hour is not enough — a collapse that cannot be public, a family under strain, a recovery that has to be held at home rather than in a ward.",
  ],
  [
    "Multidisciplinary team",
    "She works as part of an MDT. GP, psychiatrist, private hospital, family office. She does not replace medical care. She holds the person while the team does its work.",
  ],
];

function ResidentialPage() {
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent("Residential support — P.O.A")}`;

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-metal">Residential support</p>
        <h1 className="mt-3 font-serif text-title">She stays. Twenty-four hours. P.O.A.</h1>
        <p className="mt-4 max-w-xl text-muted">
          For complex cases that cannot be managed in a consulting-room hour. Tia lives in with the person, as part of
          a multidisciplinary team, until the situation can be held again.
        </p>
        <p className="mt-6 font-serif text-4xl">P.O.A</p>
        <p className="mt-2 text-sm text-muted">Price on application · By arrangement · Not the £75 hour</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href={mail}>Enquire about residential</a>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/sessions">The consulting-room hour</Link>
          </Button>
        </div>
      </div>
      <ul className="space-y-6 self-center border-t border-line pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
        {points.map(([t, d]) => (
          <li key={t}>
            <h2 className="font-serif text-2xl">{t}</h2>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </li>
        ))}
      </ul>
      <p className="md:col-span-2 text-sm text-muted">
        This is not a hospital, not a crisis unit, and not a substitute for emergency care. If you are in immediate
        danger, call 999. Residential work is arranged privately, with the existing team, after a conversation with
        Tia.
      </p>
    </main>
  );
}
