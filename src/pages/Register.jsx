import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { FormField, TextInput } from "../components/FormField";
import { isValidEmail, isValidPhone, isNotEmpty } from "../utils/validation";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!isNotEmpty(form.fullName)) next.fullName = "Please enter your full name.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!isValidPhone(form.phone)) next.phone = "Enter a valid phone number.";
    if (form.password.length < 8)
      next.password = "Password must be at least 8 characters.";
    if (form.confirmPassword !== form.password)
      next.confirmPassword = "Passwords do not match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend-only deliverable: simulate registration locally.
    // Connect this to your backend's user-creation endpoint when ready.
    setStatus("success");
  };

  return (
    <div className="bg-cream min-h-screen flex items-center justify-center pt-28 pb-16 px-5">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm border border-ink/5 p-8 sm:p-10">
          <div className="text-center mb-7">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2">
              Create Your Account
            </h2>
            <p className="text-sm text-ink/55">
              Join to save your favorite tables and reservation details.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-6 animate-fadeUp">
              <p className="text-sage font-medium mb-1">Account created.</p>
              <p className="text-sm text-ink/55 mb-5">
                This is a frontend demo — connect it to your backend to
                persist real accounts.
              </p>
              <Link
                to="/login"
                className="inline-block bg-oxblood text-cream font-semibold px-7 py-3 rounded-full hover:bg-oxblood-light transition-colors"
              >
                Go to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <FormField label="Full Name" id="reg-name" error={errors.fullName}>
                <TextInput
                  id="reg-name"
                  value={form.fullName}
                  onChange={update("fullName")}
                  error={errors.fullName}
                  placeholder="Jane Doe"
                />
              </FormField>

              <FormField label="Email" id="reg-email" error={errors.email}>
                <TextInput
                  id="reg-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="jane@email.com"
                />
              </FormField>

              <FormField label="Phone Number" id="reg-phone" error={errors.phone}>
                <TextInput
                  id="reg-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  error={errors.phone}
                  placeholder="(555) 123-4567"
                />
              </FormField>

              <FormField label="Password" id="reg-password" error={errors.password}>
                <div className="relative">
                  <TextInput
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={update("password")}
                    error={errors.password}
                    placeholder="At least 8 characters"
                    className="pr-11 w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink/70"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormField>

              <FormField
                label="Confirm Password"
                id="reg-confirm"
                error={errors.confirmPassword}
              >
                <TextInput
                  id="reg-confirm"
                  type={showPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={update("confirmPassword")}
                  error={errors.confirmPassword}
                  placeholder="Repeat your password"
                />
              </FormField>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 bg-oxblood text-cream font-semibold py-3.5 rounded-full hover:bg-oxblood-light transition-colors"
              >
                <UserPlus size={17} />
                Create Account
              </button>
            </form>
          )}

          <p className="text-center text-sm text-ink/60 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-oxblood font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
