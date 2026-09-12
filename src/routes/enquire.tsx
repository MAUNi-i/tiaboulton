import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { Button } from "@/components/ui/button";
import { EMAIL, ROOMS, ROOMS_ARRIVAL } from "@/lib/catalog";

export const Route = createFileRoute("/enquire")({ component: EnquirePage });

function EnquirePage() {
  const [note, setNote] = useState("");
  const [kind, setKind] = useState<"hour" | "residential">("hour");
  const subject = kind === "residential" ? "Residential support — P.O.A" : "Private practice enquiry";
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(note)}`;

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-metal">Enquire</p>
        <h1 className="mt-3 font-serif text-title">Write, or book the hour.</h1>
        <p className="mt-4 text-muted">
          The consulting-room hour is £75 on Stripe. Residential support — twenty-four hours, as part of a
          multidisciplinary team — is price on application. Tia replies herself.
        </p>
        <p className="mt-8 font-serif text-2xl leading-snug">
          {ROOMS}
          <br />
          {ROOMS_ARRIVAL}
          <br />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <p className="mt-6 text-sm text-muted">
          This is not a crisis service. If you are in immediate danger, call 999. For urgent distress in the UK,
          Samaritans are on 116 123, free, any hour.
        </p>
      </div>
      <form
        className="flex flex-col gap-4 border border-line bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = mail;
        }}
      >
        <p className="font-sans text-xs uppercase tracking-widest text-metal">About</p>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant={kind === "hour" ? "solid" : "ghost"} onClick={() => setKind("hour")}>
            The hour · £75
          </Button>
          <Button
            type="button"
            variant={kind === "residential" ? "solid" : "ghost"}
            onClick={() => setKind("residential")}
          >
            Residential · P.O.A
          </Button>
        </div>
        <label className="font-sans text-xs uppercase tracking-widest text-metal" htmlFor="note">
          A note for Tia
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={7}
          className="w-full border border-line bg-paper px-3 py-3 text-sm text-ink outline-none ring-ring focus:ring-2"
          placeholder={
            kind === "residential"
              ? "The case, the team already involved, and what you need held."
              : "What you would like from the hour — as little or as much as you wish."
          }
        />
        <div className="flex flex-wrap gap-3">
          <Button type="submit">Send a note</Button>
          {kind === "hour" ? <SessionCheckoutButton /> : null}
        </div>
      </form>
    </main>
  );
}
