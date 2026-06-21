import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { FormField, TextInput, TextArea } from "../components/FormField";
import { isValidEmail, isNotEmpty } from "../utils/validation";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const INFO_BLOCKS = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Gourmet Avenue", "Foodie City, FC 12345"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: [
      "Mon – Thu: 11am – 10pm",
      "Fri – Sat: 11am – 11pm",
      "Sun: 10am – 9pm",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(123) 456-7890"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@savorybites.com"],
  },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!isNotEmpty(form.name)) next.name = "Please enter your name.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!isNotEmpty(form.subject)) next.subject = "Please add a subject.";
    if (!isNotEmpty(form.message)) next.message = "Please write a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend-only deliverable: simulate submission locally.
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="bg-cream min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Get In Touch" title="We'd Love to Hear From You" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info column */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {INFO_BLOCKS.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="bg-white rounded-lg p-5 border border-ink/5">
                  <Icon size={20} className="text-oxblood mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-base text-ink mb-1.5">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="text-sm text-ink/60 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden h-64 sm:h-72 border border-ink/5 bg-ink/5 relative">
              <iframe
                title="Restaurant location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291771!2d-73.9878449241646!3d40.74844097138944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-ink/40 text-sm pointer-events-none">
                <MapPin size={22} className="mb-2" />
                123 Gourmet Avenue, Foodie City, FC 12345
              </div>
            </div>
          </div>

          {/* Form column */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-lg border border-sage/30 p-10 text-center h-full flex flex-col items-center justify-center animate-fadeUp">
                <CheckCircle2 size={40} className="text-sage mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-ink mb-2">Message Sent</h3>
                <p className="text-ink/60 text-sm mb-6 max-w-sm">
                  Thanks for reaching out — our team typically replies within
                  one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-oxblood text-cream font-semibold px-7 py-3 rounded-full hover:bg-oxblood-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-lg shadow-sm border border-ink/5 p-7 sm:p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Your Name" id="c-name" error={errors.name}>
                    <TextInput
                      id="c-name"
                      value={form.name}
                      onChange={update("name")}
                      error={errors.name}
                      placeholder="Jane Doe"
                    />
                  </FormField>
                  <FormField label="Email" id="c-email" error={errors.email}>
                    <TextInput
                      id="c-email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      error={errors.email}
                      placeholder="jane@email.com"
                    />
                  </FormField>
                </div>
                <FormField label="Subject" id="c-subject" error={errors.subject}>
                  <TextInput
                    id="c-subject"
                    value={form.subject}
                    onChange={update("subject")}
                    error={errors.subject}
                    placeholder="Private dining inquiry"
                  />
                </FormField>
                <FormField label="Message" id="c-message" error={errors.message}>
                  <TextArea
                    id="c-message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    error={errors.message}
                    placeholder="Tell us a little about what you need…"
                  />
                </FormField>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 bg-oxblood text-cream font-semibold py-3.5 rounded-full hover:bg-oxblood-light transition-colors"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
