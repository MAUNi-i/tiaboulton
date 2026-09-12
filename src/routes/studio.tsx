import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EMAIL, INSTAGRAM_FOUNDER, INSTAGRAM_SHOP, PHONE, STUDIO } from "@/lib/catalog";

export const Route = createFileRoute("/studio")({ component: StudioPage });

function StudioPage() {
  const [note, setNote] = useState("");
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent("Studio visit")}&body=${encodeURIComponent(note)}`;

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-metal">Visit</p>
        <h1 className="mt-3 font-serif text-title">The studio is open by appointment.</h1>
        <p className="mt-4 text-muted">
          A working room, not a showroom theatre. Pickup by appointment. Most orders leave within 5–10 business
          days.
        </p>
        <p className="mt-8 font-serif text-2xl leading-snug">
          ORA Studio
          <br />
          {STUDIO}
        </p>
        <p className="mt-6 text-sm">
          <a className="block h-11 leading-[2.75rem]" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <a className="block h-11 leading-[2.75rem]" href={`tel:${PHONE.replace(/\s/g, "")}`}>
            {PHONE}
          </a>
        </p>
        <div className="mt-4 flex flex-col gap-2 font-sans text-[0.75rem] uppercase tracking-[0.14em]">
          <a href={INSTAGRAM_FOUNDER} target="_blank" rel="noreferrer" className="h-11 leading-[2.75rem] hover:text-metal">
            @natasha.thefounder
          </a>
          <a href={INSTAGRAM_SHOP} target="_blank" rel="noreferrer" className="h-11 leading-[2.75rem] hover:text-metal">
            @orajewellerysa
          </a>
        </div>
      </div>

      <div>
        <img src="/media/studio.jpg" alt="Jewellery bench in Cape Town" className="mb-6 w-full object-cover" />
        <label>
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-metal">A note for Natasha</span>
          <textarea
            rows={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Tell her what you are making, or when you would like to visit."
            className="mt-2 w-full border border-line bg-card px-3 py-3 font-serif text-lg outline-none focus:border-ink"
          />
        </label>
        <Button asChild className="mt-4">
          <a href={mail}>Open email</a>
        </Button>
      </div>
    </main>
  );
}
