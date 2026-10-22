import React from 'react';
import { Mail, MessageSquare, Instagram, ArrowUp } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-red-600/70 shadow-[0_0_15px_rgba(220,38,38,0.3)] flex items-center justify-center p-1 shrink-0">
                <img
                  src="/assets/aistudio/rfc_logo_hd.png"
                  alt="RFC Boxing Academy Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-wider block">
                  RFC <span className="text-red-600">BOXING</span> ACADEMY
                </span>
                <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-widest block">
                  Mixed Martial Arts & Boxing Academy
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              &ldquo;Build Your Strength. Transform Your Life.&rdquo;
              <br />
              Premier fight training and athletic conditioning facility focused on boxing, MMA, strength disciplines, and transformative member results.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${GYM_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_CONTACT.email}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Daily Training Schedule
                </a>
              </li>
              <li>
                <a href="#bmi-calculator" className="hover:text-white transition-colors">
                  BMI Calculator
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">
                  Membership Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Col */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-white mb-4">
              Combat Disciplines
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-neutral-300">Pure Boxing & Pad Work</span>
              </li>
              <li>
                <span className="text-neutral-300">MMA & Cage Grappling</span>
              </li>
              <li>
                <span className="text-neutral-300">Strength & Iron Floor</span>
              </li>
              <li>
                <span className="text-neutral-300">Fitness / Boxing Combo</span>
              </li>
              <li>
                <span className="text-neutral-300">Ultimate Fitness & MMA</span>
              </li>
              <li>
                <span className="text-red-400 font-semibold">1-on-1 Personal Training</span>
              </li>
            </ul>
          </div>

          {/* Operational Hours Col */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-white mb-4">
              Training Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-white block font-medium">Monday – Saturday</span>
                <span className="text-neutral-400 font-mono">Morning: 6:00 AM – 11:00 AM</span>
                <span className="text-neutral-400 font-mono block">Evening: 5:00 PM – 9:00 PM</span>
              </div>
              <div className="pt-2 border-t border-neutral-900">
                <span className="text-white block font-medium">Sunday</span>
                <span className="text-red-400 font-mono">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} RFC BOXING ACADEMY. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">
              WhatsApp: <span className="text-neutral-300 font-mono">{GYM_CONTACT.phoneFormatted}</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
