import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  UtensilsCrossed,
  Send,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed size={20} className="text-gold" strokeWidth={1.5} />
              <span className="font-display text-xl text-cream">Savory Bites</span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed">
              Fine dining built around fresh, local ingredients and a kitchen
              that treats every plate like the only one going out tonight.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base text-gold mb-4 tracking-wide">
              Find Us
            </h3>
            <ul className="space-y-3 text-sm text-cream/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold/70 mt-0.5 shrink-0" />
                <span>123 Gourmet Avenue, Foodie City, FC 12345</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold/70 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-gold/70 shrink-0" />
                <span>info@savorybites.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-gold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Home", "/"],
                ["Menu", "/menu"],
                ["Reservations", "/reservations"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-cream/60 hover:text-gold transition-colors hover:pl-1 inline-block duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-gold mb-4 tracking-wide">
              Stay In Touch
            </h3>
            <p className="text-sm text-cream/60 mb-3">
              Seasonal menus and event invitations, a few times a year.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 min-w-0 bg-charcoal-light border border-cream/15 rounded-full px-4 py-2 text-sm text-cream placeholder:text-cream/35 focus:border-gold/60 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-gold text-charcoal rounded-full p-2.5 hover:bg-gold-bright transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-sage-light mt-2 animate-fadeUp">
                Thanks — you're on the list.
              </p>
            )}
            <div className="flex gap-3 mt-5">
              {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="w-9 h-9 rounded-full bg-cream/5 flex items-center justify-center text-cream/70 hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Savory Bites. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
