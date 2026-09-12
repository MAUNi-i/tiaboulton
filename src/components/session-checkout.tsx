import { Button } from "@/components/ui/button";
import { EMAIL, SESSION_CHECKOUT_URL, SESSION_PRICE_GBP } from "@/lib/catalog";

export function SessionCheckoutButton({ className }: { className?: string }) {
  const label = `Book a session — £${SESSION_PRICE_GBP}`;
  const href = SESSION_CHECKOUT_URL
    ? SESSION_CHECKOUT_URL
    : `mailto:${EMAIL}?subject=${encodeURIComponent("Private session — £75")}`;
  return (
    <Button asChild className={className}>
      <a href={href} target={SESSION_CHECKOUT_URL ? "_blank" : undefined} rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}
