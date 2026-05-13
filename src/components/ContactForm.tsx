"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DESTINATION_INTEREST_OPTIONS } from "@/lib/contact-options";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Enter a valid phone number"),
  destination: z.string().min(1, "Please select a destination interest"),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)"),
});

export type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      reset();
      // Keep message for 7 seconds as requested
      setTimeout(() => setSubmitted(false), 7000);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-sky/20 bg-light-blue p-8 text-center shadow-card-hover animate-in fade-in zoom-in-95 duration-700 sm:p-12">
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-sky/10 text-5xl shadow-xl ring-8 ring-sky/5 animate-bounce">
          ✅
          <div className="absolute -inset-2 rounded-full border-2 border-dashed border-sky/30 animate-spin-slow" />
        </div>
        <h3 className="font-heading mb-4 text-4xl font-bold not-italic text-navy">
          Thank You!
        </h3>
        <p className="font-body max-w-sm text-lg font-light leading-relaxed text-navy/70">
          Your message has been received. Our travel experts will review your inquiry and get back to you <span className="font-semibold text-sky">within 12 hours</span>.
        </p>
        <p className="font-body mt-4 text-sm text-gray-400">
          Expect a call or email from us shortly to discuss your sacred journey.
        </p>
        <div className="mt-10 h-1 w-32 rounded-full bg-gradient-to-r from-sky via-orange to-sky/20" />
        <p className="font-body mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-orange">
          Journey With Grace
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-500 hover:shadow-card-hover sm:p-8"
      noValidate
    >
      {error && (
        <div
          className="rounded-2xl border border-orange/30 bg-orange/5 px-5 py-4 font-body text-sm font-medium text-orange animate-in fade-in slide-in-from-top-4 duration-500"
          role="alert"
        >
          <p className="flex items-center gap-2">
            <span className="text-lg">❌</span>
            {error}
          </p>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="font-body text-xs font-bold uppercase tracking-wider text-navy"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/30"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 font-body text-sm text-orange">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-body text-xs font-bold uppercase tracking-wider text-navy"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/30"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 font-body text-sm text-orange">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="font-body text-xs font-bold uppercase tracking-wider text-navy"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/30"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 font-body text-sm text-orange">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="destination"
          className="font-body text-xs font-bold uppercase tracking-wider text-navy"
        >
          Destination Interest
        </label>
        <select
          id="destination"
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/30"
          {...register("destination")}
        >
          {DESTINATION_INTEREST_OPTIONS.map((o) => (
            <option
              key={o.value === "" ? "placeholder" : o.value}
              value={o.value}
              disabled={o.value === ""}
            >
              {o.label}
            </option>
          ))}
        </select>
        {errors.destination && (
          <p className="mt-1 font-body text-sm text-orange">
            {errors.destination.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-body text-xs font-bold uppercase tracking-wider text-navy"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/30"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 font-body text-sm text-orange">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-orange py-4 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-cta-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta-glow-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-12"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

