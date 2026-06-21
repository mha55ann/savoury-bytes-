import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
          : "bg-charcoal/70 backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 group">
            <UtensilsCrossed
              size={22}
              className="text-gold shrink-0 group-hover:rotate-[-8deg] transition-transform duration-300"
              strokeWidth={1.5}
            />
            <div className="leading-tight">
              <h1 className="font-display text-xl sm:text-2xl text-cream tracking-tight">
                Savory Bites
              </h1>
              <p className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold/70">
                Fine Dining
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium tracking-wide pb-1 transition-colors ${
                      isActive
                        ? "text-gold"
                        : "text-cream/85 hover:text-gold"
                    } after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold after:transition-all ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-cream/85 hover:text-gold transition-colors"
            >
              Login
            </Link>
            <Link
              to="/reservations"
              className="text-sm font-semibold bg-gold text-charcoal px-5 py-2 rounded-full hover:bg-gold-bright transition-colors"
            >
              Reserve
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-cream p-1.5 -mr-1.5"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-charcoal border-t border-gold/15 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 text-base font-medium ${
                    isActive ? "text-gold" : "text-cream/85"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 flex gap-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-2.5 text-sm font-medium text-cream border border-cream/20 rounded-full"
            >
              Login
            </Link>
            <Link
              to="/reservations"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-2.5 text-sm font-semibold bg-gold text-charcoal rounded-full"
            >
              Reserve
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
