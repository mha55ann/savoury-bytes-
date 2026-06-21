import { Leaf, WheatOff, Flame } from "lucide-react";
import { DIETARY } from "../data/menuData";

const TAG_ICON = {
  vegetarian: Leaf,
  glutenFree: WheatOff,
  spicy: Flame,
};

export default function MenuItemCard({ item, index = 0 }) {
  const priceDisplay = item.price != null ? `$${item.price.toFixed(2)}` : item.priceLabel;

  return (
    <div
      className="rounded-sm overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 animate-ticketIn bg-cream"
      style={{ animationDelay: `${Math.min(index, 6) * 0.07}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ticket body — the mask on the wrapper punches semi-circular
          notches out of its top edge, revealing the photo above it */}
      <div className="ticket-edge bg-cream relative -mt-3">
        <div className="px-6 pt-7 pb-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display text-xl text-ink leading-snug">{item.name}</h3>
            <span className="shrink-0 text-sm font-semibold text-charcoal bg-gold/20 px-3 py-1 rounded-full whitespace-nowrap">
              {priceDisplay}
            </span>
          </div>
          <p className="text-sm text-ink/60 leading-relaxed mb-4">{item.description}</p>
          {item.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => {
                const Icon = TAG_ICON[tag];
                const meta = DIETARY[tag];
                return (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded bg-ink/5 ${meta.color}`}
                  >
                    <Icon size={12} />
                    {meta.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
