import { useState } from "react";
import { CheckCircle2, CalendarDays } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { FormField, TextInput, TextArea, Select } from "../components/FormField";
import { isValidEmail, isValidPhone, isNotEmpty, isTodayOrLater } from "../utils/validation";

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, "7+"];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
};

export default function Reservations() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!isNotEmpty(form.name)) next.name = "Please enter your full name.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!isValidPhone(form.phone)) next.phone = "Enter a valid phone number.";
    if (!isTodayOrLater(form.date)) next.date = "Choose today or a future date.";
    if (!isNotEmpty(form.time)) next.time = "Please choose a time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend-only deliverable: simulate submission locally.
    // Wire this up to your reservations API/backend when ready.
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-cream min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Book Ahead" title="Make a Reservation" />

        {submitted ? (
          <div className="bg-white rounded-lg border border-sage/30 p-10 text-center animate-fadeUp">
            <CheckCircle2 size={40} className="text-sage mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-2xl text-ink mb-2">
              Table Requested
            </h3>
            <p className="text-ink/60 text-sm mb-6">
              Thanks, {form.name.split(" ")[0]}. We've noted your request for{" "}
              {form.guests} {form.guests === "1" ? "guest" : "guests"} on{" "}
              {form.date} at {form.time}. A confirmation will be sent to{" "}
              {form.email}.
            </p>
            <button
              onClick={handleReset}
              className="bg-oxblood text-cream font-semibold px-7 py-3 rounded-full hover:bg-oxblood-light transition-colors"
            >
              Book Another Table
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-lg shadow-sm border border-ink/5 p-7 sm:p-10 flex flex-col gap-5"
          >
            <FormField label="Full Name" id="name" error={errors.name}>
              <TextInput
                id="name"
                value={form.name}
                onChange={update("name")}
                error={errors.name}
                placeholder="Jane Doe"
              />
            </FormField>

            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label="Email" id="email" error={errors.email}>
                <TextInput
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="jane@email.com"
                />
              </FormField>
              <FormField label="Phone Number" id="phone" error={errors.phone}>
                <TextInput
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  error={errors.phone}
                  placeholder="(555) 123-4567"
                />
              </FormField>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <FormField label="Date" id="date" error={errors.date}>
                <TextInput
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  error={errors.date}
                  min={new Date().toISOString().split("T")[0]}
                />
              </FormField>
              <FormField label="Time" id="time" error={errors.time}>
                <TextInput
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={update("time")}
                  error={errors.time}
                />
              </FormField>
              <FormField label="Guests" id="guests">
                <Select id="guests" value={form.guests} onChange={update("guests")}>
                  {GUEST_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g} {g === 1 ? "Person" : "People"}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>

            <FormField label="Special Requests (optional)" id="requests">
              <TextArea
                id="requests"
                rows={3}
                value={form.requests}
                onChange={update("requests")}
                placeholder="Allergies, celebrations, seating preferences…"
              />
            </FormField>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-oxblood text-cream font-semibold py-3.5 rounded-full hover:bg-oxblood-light transition-colors"
            >
              <CalendarDays size={17} />
              Book Table
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
