import React from 'react';
import { ArrowRight, Flame, Shield, Award, ChevronDown } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';
import heroGymImage from '../assets/images/hero_gym_boxing_1792668730854.jpg';

interface HeroSectionProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onJoinClick,
  onViewPlansClick,
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGymImage}
          alt="RFC Boxing Academy Training Arena"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-none"
          referrerPolicy="no-referrer"
        />
        {/* Gradients ensuring 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-neutral-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/40 to-neutral-950" />
      </div>

      {/* Decorative Brand Watermark Glow (Subtle and focused) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Trust Marker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/60 text-neutral-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-[11px]">Combat & Conditioning</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Boxing · MMA · Strength Floor</span>
        </div>

        {/* Gym Name & Crest */}
        <div className="mb-4 flex flex-col items-center">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            RFC <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-600">BOXING</span> ACADEMY
          </h1>
          <p className="mt-2 text-xs sm:text-sm tracking-widest text-neutral-400 uppercase font-mono">
            Mixed Martial Arts · Boxing · Strength Conditioning
          </p>
        </div>

        {/* Powerful Fitness Tagline */}
        <p className="max-w-2xl text-lg sm:text-2xl md:text-3xl font-medium text-neutral-200 mt-2 mb-8 tracking-wide font-sans balance">
          &ldquo;Build Your Strength. Transform Your Life.&rdquo;
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all rounded shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 transition-all rounded backdrop-blur-sm cursor-pointer"
          >
            View Membership Plans
          </button>
        </div>

        {/* Adjacency KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-6 border-t border-neutral-800/80 text-left">
          <div className="p-3 sm:p-4 rounded-lg bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-red-500 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Programs</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Boxing, MMA & Gym</p>
            <p className="text-xs text-neutral-400 mt-0.5">Customized fighter tracks</p>
          </div>

          <div className="p-3 sm:p-4 rounded-lg bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-red-500 mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Equipment</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Full Ring & Bags</p>
            <p className="text-xs text-neutral-400 mt-0.5">Heavy bag rows & mats</p>
          </div>

          <div className="p-3 sm:p-4 rounded-lg bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-red-500 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Training</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">2 Daily Batches</p>
            <p className="text-xs text-neutral-400 mt-0.5">Morning & Evening sessions</p>
          </div>

          <div className="p-3 sm:p-4 rounded-lg bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Affordability</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">From ₹1,000 / mo</p>
            <p className="text-xs text-neutral-400 mt-0.5">Flexible plans & combos</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 text-neutral-500 flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">Discover RFC</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-neutral-500" />
        </div>
      </div>
    </section>
  );
};
