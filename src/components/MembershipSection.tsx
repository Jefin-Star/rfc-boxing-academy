import React, { useState } from 'react';
import { Check, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS, PERSONAL_TRAINING_PLANS, GYM_SCHEDULE } from '../data/gymData';

interface MembershipSectionProps {
  onSelectPlan: (planId: string, durationLabel: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'1m' | '3m' | '6m' | '1y'>('1m');

  const periodLabels: Record<'1m' | '3m' | '6m' | '1y', string> = {
    '1m': '1 Month',
    '3m': '3 Months',
    '6m': '6 Months',
    '1y': '1 Year',
  };

  const periodSavings: Record<'1m' | '3m' | '6m' | '1y', string | null> = {
    '1m': null,
    '3m': 'Best for Beginners',
    '6m': 'Save up to 30%',
    '1y': 'Maximum Value',
  };

  return (
    <section id="plans" className="py-24 bg-neutral-900/30 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 font-mono">
            Clear & Transparent Investment
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Membership Plans & Pricing
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Choose your dedicated training pathway. All plans include professional instruction, access to state-of-the-art facilities, and daily morning & evening training shifts.
          </p>

          {/* Interactive Duration Segmented Control (zero pill rule compliant) */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-neutral-950 border border-neutral-800 shadow-inner">
            {(['1m', '3m', '6m', '1y'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedPeriod === period
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {periodLabels[period]}
                {periodSavings[period] && (
                  <span className="hidden sm:inline text-[10px] ml-1.5 opacity-80 lowercase font-normal">
                    ({periodSavings[period]})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeatured = plan.id === 'fitness-mma';
            const price = plan.pricing[selectedPeriod];

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-red-600 shadow-2xl shadow-red-950/40 lg:-translate-y-2'
                    : 'bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 hover:shadow-xl'
                }`}
              >
                {/* Top Badge for Featured */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                    <span>{plan.category}</span>
                    <span className="text-neutral-500">{periodLabels[selectedPeriod]} Plan</span>
                  </div>

                  <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                    {plan.name}
                  </h3>

                  

                  {/* Price Block */}
                  <div className="mt-6 mb-6 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-neutral-400">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        / {periodLabels[selectedPeriod]}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {plan.recommendedFor}
                    </p>
                  </div>

                  
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectPlan(plan.id, periodLabels[selectedPeriod])}
                  className={`w-full py-3.5 px-4 rounded-lg font-bold uppercase tracking-wider text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                    isFeatured
                      ? 'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-lg shadow-red-950/60'
                      : 'bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 1-on-1 Personal Training (PT) Section */}
        <div className="mb-20 pt-12 border-t border-neutral-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 font-mono">
              Exclusive 1-on-1 Mentorship
            </p>
            <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Personal Training Details
            </h3>
            <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
              Accelerate your results with dedicated private instruction. Every personal training package includes custom workout programming, 1-on-1 trainer attention, and unlimited facility access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PERSONAL_TRAINING_PLANS.map((pt) => {
              const isHighlight = pt.discipline === 'MMA';
              return (
                <div
                  key={pt.id}
                  className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
                    isHighlight
                      ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-red-600 shadow-2xl shadow-red-950/40 lg:-translate-y-2'
                      : 'bg-neutral-950/90 border border-neutral-800 hover:border-neutral-700 hover:shadow-xl'
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      VIP Masterclass
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                      <span className="text-red-400 font-semibold">{pt.discipline} 1-on-1</span>
                      <span className="text-neutral-500">1 Month Package</span>
                    </div>

                    <h4 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                      {pt.name}
                    </h4>

                    {/* Price Block */}
                    <div className="mt-5 mb-6 p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold text-neutral-400">₹</span>
                        <span className="font-display text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                          {pt.price}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">
                          / month
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-300 mt-1.5 font-medium">
                        {pt.highlight}
                      </p>
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-2.5 mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                        Personal Training Inclusions:
                      </p>
                      {pt.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <button
                    onClick={() => onSelectPlan(pt.id, '1 Month')}
                    className={`w-full py-3.5 px-4 rounded-lg font-bold uppercase tracking-wider text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                      isHighlight
                        ? 'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-lg shadow-red-950/60'
                        : 'bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 text-white border border-neutral-700'
                    }`}
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule & Operational Hours */}
        <div id="schedule" className="rounded-3xl bg-neutral-950 border border-neutral-800/90 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Schedule Text & Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span>Operating Shifts</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Daily Training Schedule
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                RFC Boxing Academy operates two dedicated training windows every Monday through Saturday. Choose the morning blast to kickstart your day, or the evening session to blow off work stress and sharpen your strikes.
              </p>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-400 font-medium">Morning Shift:</span>
                  <span className="font-mono font-bold text-white">6:00 AM – 11:00 AM</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-400 font-medium">Evening Shift:</span>
                  <span className="font-mono font-bold text-white">5:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-neutral-800">
                  <span className="text-neutral-400 font-medium">Sunday:</span>
                  <span className="font-mono font-bold text-red-400">Closed (Recovery Day)</span>
                </div>
              </div>
            </div>

            {/* Schedule Matrix */}
            <div className="lg:col-span-7">
              <div className="overflow-x-auto rounded-xl border border-neutral-800/80 bg-neutral-900/30">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-900 text-neutral-300 uppercase font-mono text-[11px] border-b border-neutral-800">
                    <tr>
                      <th className="py-3 px-4">Day</th>
                      <th className="py-3 px-4">Morning Shift</th>
                      <th className="py-3 px-4">Evening Shift</th>
                      <th className="py-3 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
                    {GYM_SCHEDULE.map((item) => (
                      <tr key={item.day} className="hover:bg-neutral-900/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.day}</span>
                        </td>
                        <td className="py-3 px-4 font-mono text-neutral-300">{item.morning}</td>
                        <td className="py-3 px-4 font-mono text-neutral-300">{item.evening}</td>
                        <td className="py-3 px-4 text-right">
                          {item.status === 'open' ? (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                              Open
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                              Closed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
