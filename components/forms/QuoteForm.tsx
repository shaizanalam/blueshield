'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Building, MapPin, Phone, Mail, User } from 'lucide-react';
import { categories } from '@/data/categories';
import type { QuoteFormData } from '@/types';

const quoteSchema = z.object({
  requirement: z.string().min(1, 'Please select your equipment or system requirement'),
  application: z.string().min(1, 'Please select an application'),
  capacity: z.string().min(1, 'Please select a capacity range'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid 10-digit phone number is required'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  message: z.string().optional(),
});

interface QuoteFormProps {
  initialProduct?: string;
  initialSolution?: string;
}

export function QuoteForm({ initialProduct, initialSolution }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      requirement: initialProduct || initialSolution || 'RO Plant',
      application: 'Industrial',
      capacity: '1000-2000 LPH',
      state: 'Chhattisgarh',
      city: 'Raipur',
    },
  });

  const selectedRequirement = watch('requirement');
  const selectedApplication = watch('application');
  const selectedCapacity = watch('capacity');

  const handleNext = async () => {
    let isValid = false;
    if (currentStep === 1) isValid = await trigger('requirement');
    if (currentStep === 2) isValid = await trigger('application');
    if (currentStep === 3) isValid = await trigger('capacity');
    if (currentStep === 4) isValid = (await trigger('city')) && (await trigger('state'));

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    console.log('Smart Quote Lead:', data);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const requirementOptions = [
    'RO Plant',
    'Industrial RO Plant',
    'SS RO Plant',
    'Water Softener',
    'Water Treatment Plant',
    'Mineral Water Plant',
    'Bottle Filling Machine',
    'Wastewater / STP Plant',
    'RO Spare Parts & Membranes',
    'Swimming Pool System',
    'Other Custom System',
  ];

  const applicationOptions = ['Industrial', 'Commercial', 'Residential', 'Institutional'];

  const capacityOptions = [
    '< 500 LPH',
    '500-1000 LPH',
    '1000-2000 LPH',
    '2000-5000 LPH',
    '5000+ LPH',
    'Capacity Unknown (Need Sizing Help)',
  ];

  if (isSubmitted) {
    return (
      <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-border text-center shadow-xl space-y-6 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
        <div className="w-16 h-16 rounded-full bg-ice-blue flex items-center justify-center mx-auto text-eng-blue">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="eyebrow block">Requirement Registered</span>
          <h2 className="text-2xl font-bold text-text">Quote Request Received!</h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Thank you for specifying your system requirements. Our engineering and estimation team in Raipur will review your parameters and prepare an itemized quote.
          </p>
        </div>
        <div className="p-4 bg-surface rounded-2xl border border-border text-xs text-text font-medium text-left space-y-1.5">
          <p><strong>System:</strong> {selectedRequirement}</p>
          <p><strong>Application:</strong> {selectedApplication}</p>
          <p><strong>Capacity:</strong> {selectedCapacity}</p>
          <p><strong>Location:</strong> {watch('city')}, {watch('state')}</p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
          className="btn btn-primary btn-sm w-full sm:w-auto justify-center"
        >
          Submit Another Requirement
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-border shadow-xl max-w-2xl mx-auto">
      {/* Step Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-eng-blue">
            Step {currentStep} of 5
          </span>
          <span className="text-xs font-semibold text-text-muted">
            {currentStep === 1 && 'Select Equipment'}
            {currentStep === 2 && 'Choose Application'}
            {currentStep === 3 && 'Required Capacity'}
            {currentStep === 4 && 'Installation Location'}
            {currentStep === 5 && 'Contact Information'}
          </span>
        </div>
        <div className="h-2 w-full bg-surface rounded-full overflow-hidden border border-border/40">
          <div
            className="h-full bg-eng-blue transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* STEP 1: Requirement */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
            <h3 className="text-lg font-bold text-text">What system or machine do you need?</h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {requirementOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setValue('requirement', opt)}
                  className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                    selectedRequirement === opt
                      ? 'bg-eng-blue text-white border-eng-blue shadow-md'
                      : 'bg-surface text-text border-border hover:border-eng-blue/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {errors.requirement && (
              <p className="text-xs text-red-500">{errors.requirement.message}</p>
            )}
          </div>
        )}

        {/* STEP 2: Application */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
            <h3 className="text-lg font-bold text-text">What is the application or facility type?</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {applicationOptions.map((app) => (
                <button
                  type="button"
                  key={app}
                  onClick={() => setValue('application', app)}
                  className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                    selectedApplication === app
                      ? 'bg-deep-blue text-white border-deep-blue shadow-md'
                      : 'bg-surface text-text border-border hover:border-eng-blue/40'
                  }`}
                >
                  <Building className="w-5 h-5 mb-2 opacity-80" />
                  <span className="block text-sm">{app}</span>
                </button>
              ))}
            </div>
            {errors.application && (
              <p className="text-xs text-red-500">{errors.application.message}</p>
            )}
          </div>
        )}

        {/* STEP 3: Capacity */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
            <h3 className="text-lg font-bold text-text">What is your expected capacity output?</h3>
            <div className="space-y-2">
              {capacityOptions.map((cap) => (
                <button
                  type="button"
                  key={cap}
                  onClick={() => setValue('capacity', cap)}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedCapacity === cap
                      ? 'bg-eng-blue text-white border-eng-blue shadow-md'
                      : 'bg-surface text-text border-border hover:border-eng-blue/40'
                  }`}
                >
                  <span>{cap}</span>
                  {selectedCapacity === cap && <CheckCircle2 className="w-4 h-4" />}
                </button>
              ))}
            </div>
            {errors.capacity && (
              <p className="text-xs text-red-500">{errors.capacity.message}</p>
            )}
          </div>
        )}

        {/* STEP 4: Location */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
            <h3 className="text-lg font-bold text-text">Where will the plant be installed?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1">
                  City / Town *
                </label>
                <input
                  type="text"
                  {...register('city')}
                  placeholder="e.g. Raipur / Bilaspur"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue"
                />
                {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1">
                  State *
                </label>
                <input
                  type="text"
                  {...register('state')}
                  placeholder="e.g. Chhattisgarh / Odisha / MP"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue"
                />
                {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Contact Details */}
        {currentStep === 5 && (
          <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
            <h3 className="text-lg font-bold text-text">Who should we send the quotation to?</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="e.g. Anand Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="anand@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-text block mb-1">
                Specific Water Parameters / Notes (Optional)
              </label>
              <textarea
                rows={2}
                {...register('message')}
                placeholder="e.g. Raw water TDS ~1200 ppm, need SS skid, delivery in 3 weeks..."
                className="w-full px-4 py-2 rounded-xl border border-border text-sm text-text bg-white focus:outline-none focus:border-eng-blue"
              />
            </div>
          </div>
        )}

        {/* Nav Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="btn btn-secondary btn-sm flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary btn-sm flex items-center gap-1.5 ml-auto"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-sm flex items-center gap-1.5 ml-auto disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Submitting Quote Request...' : 'Submit Quote Request'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

