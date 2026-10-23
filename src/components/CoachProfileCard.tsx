import React from 'react';
import { Crown, Star, Clock, Trophy, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import coachPortraitImage from '../assets/images/coach_sayid_ahammed_nisar.jpg';

interface CoachProfileCardProps {
  onConsultClick?: () => void;
}

export const CoachProfileCard: React.FC<CoachProfileCardProps> = ({ onConsultClick }) => {
  return (
    <div className="relative max-w-md mx-auto w-full group">
      {/* Outer wrapper with moving glowing red light border */}
      <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.35)] transition-shadow duration-500 hover:shadow-[0_0_70px_rgba(220,38,38,0.55)]">
        
        {/* Layer 1: Ambient Red Glow Rotating Blur */}
        <div
          className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_65%,rgba(239,68,68,0.3)_78%,#ef4444_90%,#dc2626_100%)] animate-glow-border blur-xl opacity-90 pointer-events-none"
        />

        {/* Layer 2: Moving Sharp Red Light Laser Beam */}
        <div
          className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_72%,rgba(239,68,68,0.5)_84%,#ff3b30_94%,#dc2626_100%)] animate-glow-border pointer-events-none"
        />

        {/* Inner Card Content */}
        <div className="relative z-10 bg-neutral-950 rounded-[21px] p-6 sm:p-7 flex flex-col items-center border border-neutral-800/80 backdrop-blur-md">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
            <span>Academy Leadership</span>
          </div>

          {/* Central Portrait Photo */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-red-600/40 shadow-2xl group-hover:border-red-500 transition-colors">
            <img
              src={coachPortraitImage}
              alt="Sayid Ahammed Nisar - Coach & Founder"
              className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Distinct Identification Box */}
          <div className="w-full mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800/90 shadow-xl text-center flex flex-col items-center">
            {/* Gold Crown Icon */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2 shadow-[0_0_15px_rgba(245,158,11,0.35)]">
              <Crown className="w-5 h-5 fill-amber-400 text-amber-300 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]" />
            </div>

            {/* Name */}
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
              Sayid Ahammed Nisar
            </h3>

            {/* Title */}
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-red-500 font-bold mt-1">
              Coach & Founder
            </p>
          </div>

          {/* Qualifications Text Block */}
          <div className="w-full mt-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 text-center">
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
              Credentials & Honors
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-center gap-2 text-neutral-200">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span className="font-semibold tracking-wide">Boxing One Star Coach</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-neutral-200">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-semibold tracking-wide">30 Years experience</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-neutral-200">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold tracking-wide">Former International Champion</span>
              </div>
            </div>
          </div>

          {/* Optional CTA to train directly under Coach Nisar */}
          {onConsultClick && (
            <button
              onClick={onConsultClick}
              className="w-full mt-5 py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all shadow-lg shadow-red-950/60 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Train with Coach Nisar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
