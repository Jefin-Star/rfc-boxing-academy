import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall, Calendar, AlertCircle } from 'lucide-react';
import { GYM_CONTACT, MEMBERSHIP_PLANS, PERSONAL_TRAINING_PLANS } from '../data/gymData';

interface RegistrationSectionProps {
  selectedPlanId?: string;
  selectedDuration?: string;
  initialGoals?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  duration: string;
  startDate: string;
  goals: string;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  selectedPlanId,
  selectedDuration,
  initialGoals,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    planId: selectedPlanId || 'fitness-mma',
    duration: selectedDuration || '1 Month',
    startDate: new Date().toISOString().split('T')[0],
    goals: initialGoals || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Sync if parent updates selected plan or goals
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...(selectedPlanId ? { planId: selectedPlanId } : {}),
      ...(selectedDuration ? { duration: selectedDuration } : {}),
      ...(initialGoals ? { goals: initialGoals } : {}),
    }));
  }, [selectedPlanId, selectedDuration, initialGoals]);

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.planId) {
      newErrors.planId = 'Please select a membership plan';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please choose a preferred start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real local persistence and verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });

      // Save to localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('rfc_registrations') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('rfc_registrations', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }
    }, 600);
  };

  const getPlanName = (id: string) => {
    const match = MEMBERSHIP_PLANS.find((p) => p.id === id);
    if (match) return match.name;
    const matchPT = PERSONAL_TRAINING_PLANS.find((p) => p.id === id);
    if (matchPT) return matchPT.name;
    return id;
  };

  const generateWhatsAppUrl = (data: FormState) => {
    const planName = getPlanName(data.planId);
    const message = `Hello RFC BOXING ACADEMY! I would like to register for a membership:%0A%0A*Name:* ${encodeURIComponent(
      data.fullName
    )}%0A*Phone:* ${encodeURIComponent(data.phone)}%0A*Email:* ${encodeURIComponent(
      data.email
    )}%0A*Plan:* ${encodeURIComponent(planName)} (${encodeURIComponent(
      data.duration
    )})%0A*Preferred Start Date:* ${encodeURIComponent(
      data.startDate
    )}%0A*Goals / Notes:* ${encodeURIComponent(data.goals || 'Ready to start training!')}`;

    return `https://wa.me/${GYM_CONTACT.whatsappNumber}?text=${message}`;
  };

  const resetForm = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      planId: 'fitness-mma',
      duration: '1 Month',
      startDate: new Date().toISOString().split('T')[0],
      goals: '',
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 font-mono">
            Start Your Journey Today
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Membership Registration
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Fill out the form below to register your training slot. We will confirm your membership and send you onboarding details right away.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {isSuccess && submittedData ? (
            /* Success State */
            <div className="text-center py-6 sm:py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                  Registration Received!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto mt-2">
                  Thank you, <span className="font-semibold text-white">{submittedData.fullName}</span>! Your registration for <span className="text-red-400 font-semibold">{getPlanName(submittedData.planId)}</span> ({submittedData.duration}) has been recorded.
                </p>
              </div>

              {/* Summary box */}
              <div className="max-w-md mx-auto text-left bg-neutral-950/80 p-5 rounded-xl border border-neutral-800 text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Phone:</span>
                  <span className="font-mono text-neutral-200">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Email:</span>
                  <span className="text-neutral-200">{submittedData.email}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Start Date:</span>
                  <span className="font-mono text-neutral-200">{submittedData.startDate}</span>
                </div>
                {submittedData.goals && (
                  <div className="pt-1">
                    <span className="text-neutral-400 block mb-1">Goals:</span>
                    <p className="text-neutral-300 italic">{submittedData.goals}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={generateWhatsAppUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs sm:text-sm font-semibold rounded-lg cursor-pointer"
                >
                  Register Another Member
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                      errors.fullName ? 'border-red-500' : 'border-neutral-800'
                    } text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. 9746382006"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                      errors.phone ? 'border-red-500' : 'border-neutral-800'
                    } text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                      errors.email ? 'border-red-500' : 'border-neutral-800'
                    } text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label htmlFor="startDate" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                    Preferred Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="startDate"
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                        errors.startDate ? 'border-red-500' : 'border-neutral-800'
                      } text-white focus:outline-none focus:border-red-500 transition-colors`}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.startDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Plan & Duration Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="planId" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                    Membership Plan (Dropdown) <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="planId"
                    value={formData.planId}
                    onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                  >
                    <optgroup label="Academy Memberships" className="bg-neutral-900 text-neutral-300 font-semibold">
                      {MEMBERSHIP_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.id} className="bg-neutral-950 text-white">
                          {plan.name} — {plan.category} (Starts at ₹{plan.pricing['1m']})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="1-on-1 Personal Training" className="bg-neutral-900 text-red-400 font-semibold">
                      {PERSONAL_TRAINING_PLANS.map((pt) => (
                        <option key={pt.id} value={pt.id} className="bg-neutral-950 text-white">
                          {pt.name} — ₹{pt.price} / month
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="duration" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                    Billing Cycle
                  </label>
                  <select
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                  </select>
                </div>
              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label htmlFor="goals" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 font-mono">
                  Message / Fitness Goals <span className="text-neutral-500">(Optional)</span>
                </label>
                <textarea
                  id="goals"
                  rows={3}
                  placeholder="Share your goals: e.g. Learn boxing fundamentals, competition prep, weight loss, MMA striking, strength..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {/* Quick WhatsApp Dispatch Toggle Note */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-400">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  After submitting, you can also forward this directly to RFC Academy's official WhatsApp (<span className="text-white font-mono">{GYM_CONTACT.phoneFormatted}</span>) for priority onboarding.
                </span>
              </div>

              {/* Submit Registration Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm sm:text-base text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Registration...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
