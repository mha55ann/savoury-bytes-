import { Link } from "react-router-dom";
import { UtensilsCrossed, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-charcoal min-h-screen flex items-center justify-center px-5 text-center">
      <div>
        <UtensilsCrossed size={36} className="text-gold mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-xs tracking-widest2 uppercase text-gold-dim mb-3">
          Table Not Found
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-cream mb-4">404</h1>
        <p className="text-cream/60 max-w-sm mx-auto mb-8">
          This page isn't on tonight's menu. Let's get you back to something
          delicious.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-7 py-3 rounded-full hover:bg-gold-bright transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
