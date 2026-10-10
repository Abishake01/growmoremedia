import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { siteConfig } from "../config/site";

const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Meta Ads & Paid Campaigns",
  "Creative Design & Branding",
  "Reels & Video Content",
  "Lead Generation",
  "Landing Page Creation",
  "Custom Package",
];

const PLAN_OPTIONS = [
  "Starter Presence (₹4,999/mo)",
  "Growth Accelerator (₹9,999/mo)",
  "Performance Pro (₹19,999/mo)",
  "Landing Page (₹4,999 one-time)",
  "Not sure yet",
];

const INDUSTRY_OPTIONS = [
  "Beauty Salon / Parlour",
  "Restaurant / Café",
  "Auto Service / Repair",
  "Healthcare / Wellness",
  "Fitness & Training",
  "Retail / Local Business",
  "Coach / Consultant / Service Professional",
  "Startup / Growing Brand",
  "Other",
];

interface FormState {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  industry: string;
  service: string;
  plan: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  businessName: "",
  phone: "",
  email: "",
  industry: "",
  service: "",
  plan: "",
  budget: "",
  message: "",
};

type Status = "idle" | "submitting" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.businessName.trim()) next.businessName = "Business name is required.";
    if (!form.phone.trim()) next.phone = "Phone or WhatsApp number is required.";
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (!form.industry) next.industry = "Please select your industry.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.message.trim()) next.message = "Tell us a bit about your goals.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildWhatsAppMessage(): string {
    const lines = [
      `New enquiry from Growmore Media website`,
      `Name: ${form.fullName}`,
      `Business: ${form.businessName}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Industry: ${form.industry}`,
      `Service: ${form.service}`,
      form.plan ? `Preferred plan: ${form.plan}` : null,
      form.budget ? `Approx. budget: ${form.budget}` : null,
      `Goals: ${form.message}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const message = encodeURIComponent(buildWhatsAppMessage());
      const url = `${siteConfig.contact.whatsappLink}?text=${message}`;
      const win = window.open(url, "_blank", "noopener,noreferrer");

      if (!win) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Get In Touch</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-2xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let's Talk About Growing Your Business.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-xl text-center text-white/60">
            Share a few details and we'll open a WhatsApp conversation pre-filled with
            your enquiry so you can send it straight to our team.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 grid grid-cols-1 gap-5 rounded-3xl border border-border-soft bg-surface/40 p-7 sm:grid-cols-2 sm:p-10"
          >
            <Field label="Full Name" error={errors.fullName}>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={inputClass(!!errors.fullName)}
                placeholder="Your name"
              />
            </Field>

            <Field label="Business Name" error={errors.businessName}>
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                className={inputClass(!!errors.businessName)}
                placeholder="Your business name"
              />
            </Field>

            <Field label="Phone / WhatsApp Number" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass(!!errors.phone)}
                placeholder="+91 90000 00000"
              />
            </Field>

            <Field label="Email (optional)" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass(!!errors.email)}
                placeholder="you@business.com"
              />
            </Field>

            <Field label="Industry" error={errors.industry}>
              <select
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
                className={inputClass(!!errors.industry)}
              >
                <option value="">Select your industry</option>
                {INDUSTRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Service Required" error={errors.service}>
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className={inputClass(!!errors.service)}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Preferred Plan (optional)">
              <select
                value={form.plan}
                onChange={(e) => update("plan", e.target.value)}
                className={inputClass(false)}
              >
                <option value="">Select a plan</option>
                {PLAN_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Approximate Marketing Budget (optional)">
              <input
                type="text"
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={inputClass(false)}
                placeholder="e.g. ₹10,000/month"
              />
            </Field>

            <Field label="Message / Business Goals" error={errors.message} full>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={4}
                className={inputClass(!!errors.message)}
                placeholder="Tell us about your business and what you'd like to achieve."
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-6 py-4 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(57,255,136,0.5)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Preparing your enquiry...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Enquiry via WhatsApp
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-neon">
                  <CheckCircle2 size={16} />
                  WhatsApp has been opened with your enquiry — please hit send there to
                  reach our team.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-red-400">
                  <AlertCircle size={16} />
                  We couldn't open WhatsApp automatically. Please message us directly at{" "}
                  {siteConfig.contact.whatsapp}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-ink px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan ${
    hasError ? "border-red-500/60" : "border-border-soft"
  }`;
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-sm font-medium text-white/75">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
