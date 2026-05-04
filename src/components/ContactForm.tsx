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

  const onSubmit: SubmitHandler<ContactFormValues> = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form
      action="mailto:info@salvemariatours.com"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-500 hover:shadow-card-hover sm:p-8"
      noValidate
    >
      {submitted && (
        <p
          className="rounded-2xl border border-sky/30 bg-light-blue px-4 py-3 font-body text-sm font-medium text-navy"
          role="status"
        >
          Thank you — we have received your message and will get back to you
          shortly.
        </p>
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

