import { createFileRoute } from "@tanstack/react-router";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { ROOMS } from "@/lib/catalog";

export const Route = createFileRoute("/rooms")({ component: RoomsPage });

function RoomsPage() {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <figure className="min-h-[420px]">
          <img
            src="/media/harley.jpg"
            alt="Georgian townhouse facade on Harley Street, London"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="flex flex-col justify-center px-6 py-16 md:px-12">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">Rooms</p>
          <h1 className="mt-3 font-serif text-title">Harley Street, and the screen.</h1>
          <p className="mt-4 max-w-md text-muted">
            Face to face at {ROOMS}. A consulting room in the medical district — a few minutes from Oxford Circus —
            for clients who prefer to arrive in person. Online, the same hour, for those who travel or prefer not to
            be seen entering a building.
          </p>
          <p className="mt-8 font-serif text-2xl leading-snug">{ROOMS}</p>
          <p className="mt-2 text-sm text-muted">By appointment. Not a walk-in clinic.</p>
          <div className="mt-8">
            <SessionCheckoutButton />
          </div>
        </div>
      </section>
      <section className="grid border-t border-line md:grid-cols-2">
        <div className="px-6 py-16 md:px-12">
          <h2 className="font-serif text-3xl">In the room</h2>
          <p className="mt-4 max-w-md text-muted">
            Arrive a few minutes early. The building is discreet. Sessions are not recorded. What you bring stays in
            the hour.
          </p>
        </div>
        <div className="border-t border-line px-6 py-16 md:border-t-0 md:border-l md:px-12">
          <h2 className="font-serif text-3xl">Online</h2>
          <p className="mt-4 max-w-md text-muted">
            A secure video link, sent after you book. Same length, same fee. Useful for clients between London,
            the Continent, and home.
          </p>
        </div>
      </section>
    </main>
  );
}
