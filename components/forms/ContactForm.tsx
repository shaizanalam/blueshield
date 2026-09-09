'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid 10-digit phone number is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Please describe your requirement in at least 10 characters'),
  product: z.string().optional(),
});

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // In production, save to database or trigger email/webhook
    console.log('Contact Submission:', data);
    
    // Simulate server network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface p-8 rounded-3xl border border-border text-center shadow-sm space-y-4 animate-[fadeIn_0.3s_ease-out]">
        <div className="w-14 h-14 rounded-full bg-ice-blue flex items-center justify-center mx-auto text-eng-blue">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-text">Message Received</h3>
        <p className="text-sm text-text-muted max-w-md mx-auto">
          Thank you for reaching out. Our engineering and sales team in Raipur will review your inquiry and get back to you promptly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn btn-secondary btn-sm mt-4"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-surface p-8 rounded-3xl border border-border shadow-sm">
      <h3 className="text-xl font-bold text-text mb-6">Send Us a Direct Message</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            {...register('name')}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/10"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/10"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="ramesh@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/10"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            {...register('subject')}
            placeholder="e.g. Inquiry regarding 1000 LPH RO Plant"
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/10"
          />
          {errors.subject && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1.5">
          Detailed Requirement / Message *
        </label>
        <textarea
          rows={4}
          {...register('message')}
          placeholder="Please describe your facility type, water source (borewell/municipal), estimated daily consumption, and any specific parameters..."
          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue focus:ring-2 focus:ring-eng-blue/10"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full justify-center py-3 text-sm disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? 'Submitting Message...' : 'Send Inquiry Message'}
      </button>
    </form>
  );
}

