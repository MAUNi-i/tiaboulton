import { Button } from "@/components/ui/button";
import {
  EMAIL,
  HARLEY_CHECKOUT_URL,
  HARLEY_PRICE_GBP,
  ONLINE_CHECKOUT_URL,
  ONLINE_PRICE_GBP,
} from "@/lib/catalog";

type Kind = "online" | "harley";

export function SessionCheckoutButton({
  kind = "harley",
  className,
  variant = "solid",
}: {
  kind?: Kind;
  className?: string;
  variant?: "solid" | "ghost" | "metal";
}) {
  const harley = kind === "harley";
  const href = harley ? HARLEY_CHECKOUT_URL : ONLINE_CHECKOUT_URL;
  const price = harley ? HARLEY_PRICE_GBP : ONLINE_PRICE_GBP;
  const label = harley ? `Harley Street — £${price}` : `Online — £${price}`;
  const fallback = `mailto:${EMAIL}?subject=${encodeURIComponent(label)}`;
  return (
    <Button asChild variant={variant} className={className}>
      <a href={href || fallback} target={href ? "_blank" : undefined} rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}
