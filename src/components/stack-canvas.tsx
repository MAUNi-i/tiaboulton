import { charms } from "@/lib/catalog";
import type { Base, Metal } from "@/lib/stack-store";

type Props = {
  base: Base;
  metal: Metal;
  charmIds: string[];
};

export function StackCanvas({ base, metal, charmIds }: Props) {
  const stroke = metal === "gold" ? "#9a7b4f" : "#8a8680";
  const fill = metal === "gold" ? "#c4a574" : "#d5d1cb";
  const selected = charmIds
    .map((id) => charms.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-cream">
      <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Charm stack preview">
        {base === "hoop" ? (
          <>
            <circle cx="160" cy="160" r="92" fill="none" stroke={stroke} strokeWidth="10" />
            <circle cx="160" cy="160" r="78" fill="none" stroke={fill} strokeWidth="2" opacity="0.5" />
          </>
        ) : (
          <>
            <ellipse cx="160" cy="168" rx="108" ry="42" fill="none" stroke={stroke} strokeWidth="10" />
            <ellipse cx="160" cy="160" rx="108" ry="42" fill="none" stroke={fill} strokeWidth="3" />
          </>
        )}
        {selected.map((charm, i) => {
          const n = selected.length;
          const angle = (i / Math.max(n, 1)) * Math.PI * 2 - Math.PI / 2;
          const r = base === "hoop" ? 92 : 108;
          const cx = 160 + Math.cos(angle) * r;
          const cy = (base === "hoop" ? 160 : 164) + Math.sin(angle) * (base === "hoop" ? r : 42);
          return (
            <g key={charm!.id} transform={`translate(${cx}, ${cy})`}>
              <circle r="16" fill={fill} stroke={stroke} strokeWidth="1.5" />
              <text
                textAnchor="middle"
                dy="5"
                fontSize="12"
                fill="#1a1612"
                fontFamily="Cormorant Garamond, serif"
              >
                {charm!.glyph}
              </text>
            </g>
          );
        })}
      </svg>
      {selected.length === 0 ? (
        <p className="pointer-events-none absolute inset-x-0 bottom-6 text-center font-sans text-xs uppercase tracking-[0.18em] text-muted">
          Add a charm
        </p>
      ) : null}
    </div>
  );
}
