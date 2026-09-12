import { createFileRoute } from "@tanstack/react-router";
import { SessionCheckoutButton } from "@/components/session-checkout";
import { Button } from "@/components/ui/button";
import { AGP, ROOMS, ROOMS_ARRIVAL, ROOMS_FLOOR, ROOMS_MAP, roomPhotos } from "@/lib/catalog";

export const Route = createFileRoute("/rooms")({ component: RoomsPage });

function RoomsPage() {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <figure className="min-h-[420px]">
          <img
            src="/media/agp-hero.jpg"
            alt="A consulting room at 15 Harley Street, London W1"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="flex flex-col justify-center px-6 py-16 md:px-12">
          <p className="font-sans text-xs uppercase tracking-widest text-metal">Rooms</p>
          <h1 className="mt-3 font-serif text-title">The rooms at 15 Harley Street.</h1>
          <p className="mt-4 max-w-md text-muted">
            The Anthony Group Practice — a curated suite of consulting rooms. Warm, discreet, appointed for the hour
            rather than a waiting-room theatre. Online, the same clinician, wherever you are.
          </p>
          <p className="mt-8 font-serif text-2xl leading-snug">{ROOMS}</p>
          <p className="mt-2 text-sm text-muted">
            {ROOMS_FLOOR}. {ROOMS_ARRIVAL}. By appointment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SessionCheckoutButton />
            <Button variant="ghost" asChild>
              <a href={ROOMS_MAP} target="_blank" rel="noreferrer">
                Map
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 border-t border-line md:grid-cols-3">
        {roomPhotos.map((photo) => (
          <figure key={photo.src} className="border-b border-r border-line last:border-r-0">
            <img src={photo.src} alt={photo.alt} className="h-64 w-full object-cover md:h-80" />
            <figcaption className="px-4 py-3">
              <p className="font-sans text-xs uppercase tracking-widest text-metal">{photo.label}</p>
              <p className="mt-1 text-sm text-muted">{photo.note}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="grid border-t border-line md:grid-cols-3">
        <div className="px-6 py-16 md:px-10">
          <h2 className="font-serif text-3xl">The building</h2>
          <p className="mt-4 text-sm text-muted">
            15 Harley Street, London W1G 9QQ. A maisonette on the third and fourth floors of one of the world’s most
            distinguished medical addresses. A few minutes from Oxford Circus and Bond Street.
          </p>
        </div>
        <div className="border-t border-line px-6 py-16 md:border-t-0 md:border-l md:px-10">
          <h2 className="font-serif text-3xl">Arrival</h2>
          <p className="mt-4 text-sm text-muted">
            Press 6. Arrive a few minutes early. Room 3 is two armchairs and a therapist’s chair. Rooms 1 and 2 take
            couples and a little more space. Sessions are not recorded.
          </p>
        </div>
        <div className="border-t border-line px-6 py-16 md:border-t-0 md:border-l md:px-10">
          <h2 className="font-serif text-3xl">Online</h2>
          <p className="mt-4 text-sm text-muted">
            A secure video link, sent after you book. Same length, same fee. For clients between London, the Continent,
            and home.
          </p>
        </div>
      </section>
      <p className="border-t border-line px-6 py-8 text-center text-xs text-faint md:px-12">
        Photographs of the rooms at{" "}
        <a href={AGP} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-ink hover:underline">
          The Anthony Group Practice
        </a>
        . Tia’s fee is for her hour, not for the building.
      </p>
    </main>
  );
}
