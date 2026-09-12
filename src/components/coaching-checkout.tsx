import { Button } from "@/components/ui/button";
import { COACHING_CHECKOUT_URL, COACHING_PRICE_GBP, EMAIL } from "@/lib/catalog";

export function CoachingCheckoutButton({ className }: { className?: string }) {
  const label = `Book session — £${COACHING_PRICE_GBP}`;
  const href = COACHING_CHECKOUT_URL
    ? COACHING_CHECKOUT_URL
    : `mailto:${EMAIL}?subject=${encodeURIComponent("Founder Coaching Session — £75")}`;
  return (
    <Button asChild className={className}>
      <a href={href} target={COACHING_CHECKOUT_URL ? "_blank" : undefined} rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}
