import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { briefMailto, useBriefStore } from "@/lib/brief-store";
import { SHOP } from "@/lib/catalog";

export const Route = createFileRoute("/custom")({ component: CustomPage });

const steps = [
  { n: "01", t: "Let's chat", d: "A call or meeting to understand the vision, the budget, and who it is for." },
  { n: "02", t: "Moodboarding", d: "A visual direction built from the references you love." },
  { n: "03", t: "Design & estimate", d: "The concept is refined. A tailored cost follows." },
  { n: "04", t: "Stone selection", d: "If stones are needed, a short edit of options is sourced." },
  { n: "05", t: "3D visual", d: "A render so you can see the piece before it exists." },
  { n: "06", t: "Crafted for you", d: "Handcrafted in Cape Town and delivered to your door." },
];

function CustomPage() {
  const brief = useBriefStore();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">Custom jewellery</p>
      <h1 className="mt-3 max-w-2xl font-serif text-title">Your idea, handcrafted.</h1>
      <p className="mt-4 max-w-xl text-muted">
        A memory, a milestone, a person, a feeling. Start a brief here — it stays on this device — then send it
        to the studio or continue on the shop.
      </p>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="border-t border-line pt-4">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.16em] text-metal">{s.n}</p>
            <h2 className="mt-2 font-serif text-2xl">{s.t}</h2>
            <p className="mt-2 text-sm text-muted">{s.d}</p>
          </li>
        ))}
      </ol>

      <form
        className="mt-16 grid gap-5 border border-line bg-card p-6 md:grid-cols-2 md:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="font-serif text-3xl md:col-span-2">A brief for Natasha</h2>
        <Field
          label="Who is it for"
          value={brief.who}
          onChange={(v) => brief.setField("who", v)}
          placeholder="A partner, a self-gift, a family mark"
        />
        <Field
          label="Budget range"
          value={brief.budget}
          onChange={(v) => brief.setField("budget", v)}
          placeholder="e.g. R8 000 – R20 000"
        />
        <Field
          label="Stones or metal"
          value={brief.stones}
          onChange={(v) => brief.setField("stones", v)}
          placeholder="9ct gold, birthstone, none"
        />
        <Field
          label="When you need it"
          value={brief.when}
          onChange={(v) => brief.setField("when", v)}
          placeholder="A date that matters, or no rush"
        />
        <label className="md:col-span-2">
          <span className="block font-sans text-[0.7rem] uppercase tracking-[0.14em] text-metal">The vision</span>
          <textarea
            rows={5}
            value={brief.vision}
            onChange={(e) => brief.setField("vision", e.target.value)}
            placeholder="Tell her what you are making."
            className="mt-2 w-full border border-line bg-paper px-3 py-3 font-serif text-lg outline-none focus:border-ink"
          />
        </label>
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <Button asChild>
            <a href={briefMailto(brief)}>Open email to the studio</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href={`${SHOP}/pages/custom-design`} target="_blank" rel="noreferrer">
              Custom page on ORA
            </a>
          </Button>
          <Button type="button" variant="ghost" onClick={() => brief.reset()}>
            Clear brief
          </Button>
        </div>
      </form>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label>
      <span className="block font-sans text-[0.7rem] uppercase tracking-[0.14em] text-metal">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 h-11 w-full border border-line bg-paper px-3 font-serif text-lg outline-none focus:border-ink"
      />
    </label>
  );
}
