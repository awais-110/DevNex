"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import { Button } from "@/components/shared/Button";

const services = ["Web Dev", "Design", "AI", "SEO", "Marketing", "Other"];
const budgets = ["Under PKR 50k", "50k-150k", "150k-500k", "500k+", "Let's Discuss"];
const sources = ["Google", "LinkedIn", "Instagram", "Referral", "Upwork", "Other"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setFormError("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await response.json()) as { success?: boolean; error?: string };
    if (!response.ok || !data.success) {
      setFormError(data.error || "Something went wrong. Please try again.");
      return;
    }
    reset();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-primary/40 bg-primary/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 font-display text-2xl font-bold text-text-main">We will be in touch within 24 hours.</h2>
        <p className="mt-2 text-text-soft">Thanks for reaching out. We will read the details and reply with useful next steps.</p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className="field" placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} className="field" placeholder="you@company.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} className="field" placeholder="+92 300 0000000" />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input {...register("company")} className="field" placeholder="Company name" />
        </Field>
        <Field label="Service Interested In" error={errors.service?.message}>
          <select {...register("service")} className="field">
            <option value="">Choose service</option>
            {services.map((item) => <option key={item}>{item}</option>)}
          </select>
        </Field>
        <Field label="Project Budget" error={errors.budget?.message}>
          <select {...register("budget")} className="field">
            <option value="">Choose budget</option>
            {budgets.map((item) => <option key={item}>{item}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Project Description" error={errors.description?.message}>
        <textarea {...register("description")} className="field min-h-36 resize-y" placeholder="What are you trying to build?" />
      </Field>
      <Field label="How did you hear about us?" error={errors.source?.message}>
        <select {...register("source")} className="field">
          <option value="">Choose one</option>
          {sources.map((item) => <option key={item}>{item}</option>)}
        </select>
      </Field>
      {formError ? <p className="text-sm text-warm">{formError}</p> : null}
      <Button loading={isSubmitting} type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-text-main">
      {label}
      {children}
      {error ? <span className="text-xs text-warm">{error}</span> : null}
    </label>
  );
}
