import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Eye, EyeOff } from "lucide-react";
import { FormField, TextInput } from "../components/FormField";
import { isValidEmail, isNotEmpty } from "../utils/validation";

const INITIAL_FORM = { email: "", password: "" };

export default function Login() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null); // null | "success"

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!isNotEmpty(form.password)) next.password = "Please enter your password.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend-only deliverable: simulate auth locally.
    // Connect this to your auth/session API when ready.
    setStatus("success");
  };

  return (
    <div className="bg-cream min-h-screen flex items-center justify-center pt-28 pb-16 px-5">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm border border-ink/5 p-8 sm:p-10">
          <div className="text-center mb-7">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2">
              Welcome Back
            </h2>
            <p className="text-sm text-ink/55">
              Sign in to manage your reservations and preferences.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-6 animate-fadeUp">
              <p className="text-sage font-medium mb-1">You're signed in.</p>
              <p className="text-sm text-ink/55">
                This is a frontend demo — connect it to your auth service to
                manage real sessions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <FormField label="Email" id="login-email" error={errors.email}>
                <TextInput
                  id="login-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="jane@email.com"
                />
              </FormField>

              <FormField label="Password" id="login-password" error={errors.password}>
                <div className="relative">
                  <TextInput
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={update("password")}
                    error={errors.password}
                    placeholder="••••••••"
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

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 bg-oxblood text-cream font-semibold py-3.5 rounded-full hover:bg-oxblood-light transition-colors"
              >
                <LogIn size={17} />
                Login
              </button>
            </form>
          )}

          <p className="text-center text-sm text-ink/60 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-oxblood font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
