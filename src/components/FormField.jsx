export function FormField({
  label,
  id,
  error,
  children,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-ink/80">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-oxblood-light mt-0.5">{error}</p>}
    </div>
  );
}

const baseInputClasses =
  "px-4 py-3 rounded-md border bg-white text-ink placeholder:text-ink/35 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40";

export function TextInput({ error, className = "", ...props }) {
  return (
    <input
      className={`${baseInputClasses} ${
        error ? "border-oxblood-light" : "border-ink/15 focus:border-gold"
      } ${className}`}
      {...props}
    />
  );
}

export function TextArea({ error, className = "", ...props }) {
  return (
    <textarea
      className={`${baseInputClasses} resize-none ${
        error ? "border-oxblood-light" : "border-ink/15 focus:border-gold"
      } ${className}`}
      {...props}
    />
  );
}

export function Select({ error, className = "", children, ...props }) {
  return (
    <select
      className={`${baseInputClasses} ${
        error ? "border-oxblood-light" : "border-ink/15 focus:border-gold"
      } ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
