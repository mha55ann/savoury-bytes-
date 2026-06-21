import { Link } from "react-router-dom";
import { Star, Clock, ChefHat, ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const HIGHLIGHTS = [
  {
    icon: ChefHat,
    title: "Chef-Led Kitchen",
    text: "Two decades of international training distilled into a menu that changes with the seasons.",
  },
  {
    icon: Star,
    title: "Locally Sourced",
    text: "Produce, dairy, and seafood sourced from growers and fishers within a day's drive.",
  },
  {
    icon: Clock,
    title: "Open Late",
    text: "Dinner service runs into the night, Thursday through Saturday, for the after-theatre crowd.",
  },
];

const FEATURED = [
  {
    name: "Filet Mignon",
    price: "$42.99",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Truffle Mushroom Soup",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Classic Tiramisu",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
          <div className="absolute inset-0 bg-grain mix-blend-overlay" />
        </div>

        {/* Menu-card frame */}
        <div className="relative z-10 px-6 w-full max-w-2xl mx-auto">
          <div className="border border-gold/40 rounded-sm px-8 sm:px-14 py-12 sm:py-16 text-center bg-charcoal/30 backdrop-blur-[2px] animate-fadeUp">
            <span className="text-xs tracking-widest2 uppercase text-gold-bright">
              Est. 2010 &mdash; Foodie City
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-5 mb-5 leading-[1.1] text-balance">
              Experience Culinary Excellence
            </h1>
            <p className="text-cream/70 text-base sm:text-lg mb-9 max-w-md mx-auto">
              Where every bite tells a story, plated nightly by a kitchen
              that never repeats itself twice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-semibold px-8 py-3.5 rounded-full hover:bg-gold-bright transition-colors"
              >
                Book a Table
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-medium px-8 py-3.5 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTitle
            eyebrow="Why Savory Bites"
            title="A kitchen built on a few simple convictions"
          />
          <div className="grid sm:grid-cols-3 gap-8">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="text-center sm:text-left p-7 rounded-lg border border-ink/10 hover:border-gold/50 hover:shadow-lg transition-all duration-300 bg-white/50"
              >
                <div className="w-12 h-12 rounded-full bg-oxblood/10 flex items-center justify-center mb-5 mx-auto sm:mx-0">
                  <Icon size={22} className="text-oxblood" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured dishes — ticket motif */}
      <section className="bg-charcoal py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTitle eyebrow="From the Pass" title="Tonight's Featured Plates" light />
          <div className="grid sm:grid-cols-3 gap-8">
            {FEATURED.map((dish, i) => (
              <div
                key={dish.name}
                className="group relative animate-ticketIn"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                </div>
                <div className="ticket-edge text-charcoal bg-cream px-6 py-4 -mt-1 relative z-10 mx-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg">{dish.name}</h3>
                    <span className="text-gold-dim font-semibold whitespace-nowrap">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-gold font-medium border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              See the full menu <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-oxblood py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-4 text-balance">
            Tables are limited most weekends &mdash; reserve a few days ahead.
          </h2>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 bg-cream text-oxblood font-semibold px-7 py-3 rounded-full hover:bg-gold hover:text-charcoal transition-colors mt-2"
          >
            Reserve Your Table <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
