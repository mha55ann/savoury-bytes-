import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import MenuItemCard from "../components/MenuItemCard";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const items = MENU_ITEMS[activeCategory] || [];

  return (
    <div className="bg-cream min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="The Menu" title="Our Exquisite Selection" />

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-14"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "bg-oxblood text-cream"
                    : "bg-ink/5 text-ink/60 hover:bg-ink/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Items grid */}
        <div
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <MenuItemCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <p className="text-center text-xs text-ink/40 mt-16">
          Menu items and pricing are subject to seasonal availability. Please
          inform your server of any allergies.
        </p>
      </div>
    </div>
  );
}
