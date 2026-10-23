import React from 'react';
import { CoachProfileCard } from './CoachProfileCard';
import { Award, Flame, CheckCircle, ShieldAlert } from 'lucide-react';

interface CoachSectionProps {
  onTrainWithCoachClick: () => void;
}

export const CoachSection: React.FC<CoachSectionProps> = ({ onTrainWithCoachClick }) => {
  return (
    <section id="coach" className="py-24 bg-neutral-900/20 relative overflow-hidden border-t border-neutral-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Center Column: The Highlighted Profile Card with Glowing Moving Red Border */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <CoachProfileCard onConsultClick={onTrainWithCoachClick} />
          </div>

          {/* Right Column: Founder Story, Credentials & Philosophy */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 font-mono">
                Leadership & Heritage
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Train Under Champion Pedigree
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              At <strong className="text-white">RFC BOXING ACADEMY</strong>, every technique, drill, and training standard is formulated by our founder and head mentor, <strong className="text-white">Sayid Ahammed Nisar</strong>. With over three decades of competitive boxing and elite combat conditioning, Coach Nisar brings authentic international fight wisdom directly to our training floor.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                    Boxing One Star Certified Mentorship
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                    Internationally accredited technical standards covering Olympic punch mechanics, elusive head movement, balance restoration, and ring psychology.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                    30 Years of Unbroken Ring Mastery
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                    Three decades of forging state, national, and amateur competitors, while transforming everyday individuals into disciplined combat athletes.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                    Former International Champion Pedigree
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                    Real championship grit translated into daily practice. No shortcuts or fitness fads—only proven athletic principles and warrior mindset.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="text-neutral-500">Mentorship Formats:</span>
              <span className="text-neutral-300">Daily Batches</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-300">1-on-1 Personal Training</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-300">Fighter Development</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
