import React from 'react';
import { Dumbbell, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { ACADEMY_HIGHLIGHTS } from '../data/gymData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 font-mono">
            About Our Academy
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Forging Strength, Discipline & Boxing Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            RFC BOXING ACADEMY (Mixed Martial Arts & Boxing Academy) is dedicated to empowering individuals through genuine combat sports training, high-intensity functional conditioning, and foundational strength workouts. Whether you are aiming to step into the ring or transform your day-to-day fitness, we provide the ultimate training ground.
          </p>
        </div>

        {/* 2-Column Balanced Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Visual Media Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group min-h-[320px] sm:min-h-[400px]">
              <img
                src="/src/assets/images/about_facility_training_1792668731312.jpg"
                alt="Boxing hand wrapping and training at RFC Boxing Academy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-mono tracking-wider text-red-400 font-semibold">
                  Elite Technique
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                  Dedicated Boxing Training & Pad Work
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Step-by-step masterclasses in punching biomechanics, defensive evasion, footwork drills, and heavy-bag stamina.
                </p>
              </div>
            </div>

            {/* Secondary Media with MMA Cage & Logo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 p-5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold uppercase text-white">
                    Combat Agility & MMA
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Takedown drills, grappling transitions, and multi-discipline combat drills in a structured, safe cage-mat space.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Beginner to Pro Levels</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-neutral-800 min-h-[180px] group">
                <img
                  src="/src/assets/images/mma_cage_mat_facility_1792668731835.jpg"
                  alt="RFC Academy Combat Mats and Cage Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/60" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Modern Facilities</span>
                  <span className="text-[11px] text-neutral-300">Sanitized mats & professional gear</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academy Pillars & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/30 text-red-500 shrink-0">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                      Comprehensive Strength Training
                    </h3>
                    <p className="text-sm text-neutral-300 mt-1.5 leading-relaxed">
                      We offer a fully equipped gym floor with olympic barbells, dumbells, plate-loaded machines, cable stations, and cardio machines designed to build lean muscle, increase bone density, and enhance athletic conditioning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/30 text-red-500 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                      Supportive & Disciplined Community
                    </h3>
                    <p className="text-sm text-neutral-300 mt-1.5 leading-relaxed">
                      Egos are checked at the door. At RFC BOXING ACADEMY, you train alongside supportive teammates and certified mentors who push you to exceed your limits safely. Everyone celebrates your progress and supports your journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/30 text-red-500 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                      Modern Gym Facilities & Combat Arena
                    </h3>
                    <p className="text-sm text-neutral-300 mt-1.5 leading-relaxed">
                      Equipped with high-grade boxing rings, leather heavy bags, speed balls, slip lines, and functional fitness gear. Clean changing areas, ventilation, and hygienic mats provide the ideal professional environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Brand Badge Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 to-neutral-900 border border-red-900/40 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-red-600/70 shadow-[0_0_15px_rgba(220,38,38,0.3)] flex items-center justify-center p-1.5 shrink-0">
                <img
                  src="/assets/aistudio/rfc_logo_hd.png"
                  alt="RFC Official Seal"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-red-400 font-semibold">
                  Official Combat Academy
                </span>
                <p className="text-sm font-medium text-neutral-200 mt-0.5">
                  RFC Mixed Martial Arts and Boxing Academy offers authentic instruction and dedicated fitness paths for all age groups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-neutral-900">
          {ACADEMY_HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase">
                0{idx + 1}
              </span>
              <h4 className="font-display text-lg font-bold uppercase text-white">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
