import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const STATS = [
  { value: "2010", label: "Year Founded" },
  { value: "20+", label: "Years Chef Experience" },
  { value: "40+", label: "Local Growers & Suppliers" },
  { value: "4.8", label: "Average Guest Rating" },
];

const VALUES = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    text: "Produce and proteins are sourced from growers and fishers we know by name, with menus that shift as the seasons do.",
  },
  {
    icon: Users,
    title: "Service That Remembers",
    text: "Our floor team trains for months before they ever greet a table — the goal is a room that feels like it knows you.",
  },
  {
    icon: Award,
    title: "Craft Over Trend",
    text: "Technique first. Every dish earns its place on the menu through repetition in the kitchen, not popularity online.",
  },
];

export default function About() {
  return (
    <div>
      <section className="pt-32 sm:pt-40 pb-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTitle eyebrow="Our Story" title="Built one plate at a time, since 2010" light align="left" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                Savory Bites opened its doors in 2010 with a simple idea: that
                fine dining didn't need to feel distant. Our chef brings two
                decades of international kitchen experience to a menu built
                around the ingredients of the season, not the trends of the
                moment.
              </p>
              <p>
                We work directly with local farmers, fishers, and small
                producers, which means the menu changes more often than most
                — and the dishes that stay are the ones that have earned it.
              </p>
              <p>
                What hasn't changed since day one is the belief that a
                memorable meal is built from both the plate and the room
                around it: warm service, considered pacing, and a space
                designed to be lingered in.
              </p>
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 text-gold font-medium border-b border-gold/40 pb-1 hover:border-gold transition-colors mt-2"
              >
                Book a table <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="Savory Bites dining room"
                className="w-full h-[420px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-gold text-charcoal px-6 py-4 rounded-sm shadow-xl">
                <p className="font-display text-2xl leading-none">15+</p>
                <p className="text-xs uppercase tracking-wide mt-1">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-light py-14 border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl text-gold mb-1">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-cream/60 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTitle eyebrow="What We Stand For" title="Three things we don't compromise on" />
          <div className="grid sm:grid-cols-3 gap-8">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center sm:text-left">
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
    </div>
  );
}
