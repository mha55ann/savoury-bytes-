export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value) {
  // Accepts digits, spaces, dashes, parens, and an optional leading +
  return /^\+?[\d\s().-]{7,20}$/.test(value.trim());
}

export function isNotEmpty(value) {
  return value.trim().length > 0;
}

/** Returns true if the given date string (YYYY-MM-DD) is today or later. */
export function isTodayOrLater(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const picked = new Date(dateStr + "T00:00:00");
  return picked >= today;
}
