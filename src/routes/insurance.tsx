import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { INSURANCE } from "@/lib/catalog";

export const Route = createFileRoute("/insurance")({ component: InsurancePage });

const rows = [
  ["Scheme", INSURANCE.scheme],
  ["Activity", INSURANCE.activity],
  ["Period of insurance", INSURANCE.period],
  ["Policy", INSURANCE.policyNumber],
  ["Arranged by", INSURANCE.broker],
  ["Underwritten by", INSURANCE.underwriter],
  ["Professional liability", INSURANCE.professionalLiability],
  ["Public liability", INSURANCE.publicLiability],
  ["Products liability", INSURANCE.productsLiability],
  ["Legal protection", `${INSURANCE.legalLimit} · ${INSURANCE.legalPolicyNumber}`],
  ["Excess", INSURANCE.excess],
] as const;

function InsurancePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="font-sans text-xs uppercase tracking-widest text-metal">Cover</p>
      <h1 className="mt-3 max-w-2xl font-serif text-title">The practice is insured.</h1>
      <p className="mt-4 max-w-xl text-muted">
        Counselling is covered as fully qualified work on the BACP scheme arranged by Balens and underwritten by
        Zurich. Legal protection sits with ARAG. The schedule below is the public record of that cover.
      </p>

      <section className="mt-14 border-t border-line">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-b border-line py-5 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8"
          >
            <p className="font-sans text-xs uppercase tracking-widest text-metal">{label}</p>
            <p className="text-ink">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <article className="border border-line bg-cream px-6 py-10 md:px-8">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">What the policy holds</p>
          <h2 className="mt-3 font-serif text-3xl">Malpractice, public, and legal defence.</h2>
          <p className="mt-4 text-sm text-muted">
            Section A covers breach of professional duty, malpractice, professional indemnity, Good Samaritan acts and
            first aid, together with public and products liability. Retrospective cover applies to previously insured
            work. Personal accident is operative. Business equipment is not insured.
          </p>
          <p className="mt-4 text-sm text-muted">
            The ARAG package covers pre-disciplinary and disciplinary hearings, legal defence, tax protection and
            statutory licence appeal. Helplines for legal advice, tax advice and counselling sit with ARAG.
          </p>
        </article>
        <article className="border border-line px-6 py-10 md:px-8">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">Notice of claim</p>
          <h2 className="mt-3 font-serif text-3xl">Balens first.</h2>
          <p className="mt-4 text-sm text-muted">{INSURANCE.claimsTo}</p>
          <p className="mt-2 text-sm text-muted">Helpline {INSURANCE.claimsHelpline}</p>
          <p className="mt-4 text-sm text-muted">
            This page is a summary of the schedule dated {INSURANCE.effectiveFrom}. The policy wording governs. It is
            not an invitation to treat this practice as a clinic or a crisis service.
          </p>
        </article>
      </section>

      <div className="mt-12">
        <Button variant="ghost" asChild>
          <Link to="/work">Back to the work</Link>
        </Button>
      </div>
    </main>
  );
}
