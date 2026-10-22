import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs & Plans', href: '#plans' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'BMI Tool', href: '#bmi-calculator' },
    { label: 'Register', href: '#register' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text/logo Brand element */}
          <a
            href="#"
            className="flex items-center gap-3 text-neutral-100 group shrink-0 whitespace-nowrap"
          >
            <div className="relative group/logo shrink-0">
              {/* Logo Ambient Backlight Glow */}
              <div className="absolute inset-0 bg-red-600/30 rounded-full blur-md opacity-80 group-hover/logo:opacity-100 group-hover/logo:scale-105 transition-all" />
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white flex items-center justify-center p-1 border-2 border-red-600/70 shadow-[0_0_22px_rgba(220,38,38,0.45)] group-hover/logo:border-red-500 transition-colors">
                <img
                  src="/assets/aistudio/rfc_logo_hd.png"
                  alt="RFC Boxing Academy Logo"
                  className="w-full h-full object-contain transform-gpu transition-transform duration-300 group-hover/logo:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-white uppercase group-hover:text-red-500 transition-colors drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">
                RFC <span className="text-red-600">BOXING</span> ACADEMY
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-red-600 decoration-2"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary CTA action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-2 text-xs flex items-center gap-1.5"
              title="Chat on WhatsApp"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
              <span className="hidden lg:inline text-neutral-300 font-mono text-xs">{GYM_CONTACT.phoneFormatted}</span>
            </a>
            <button
              onClick={onJoinClick}
              className="relative px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all rounded shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] whitespace-nowrap shrink-0 cursor-pointer overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Join Now</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onJoinClick}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 rounded whitespace-nowrap cursor-pointer"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-neutral-950/98 border-b border-neutral-800 px-5 pt-3 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="block w-full text-left py-2 text-base font-medium text-neutral-300 hover:text-red-500 border-b border-neutral-900"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded text-center"
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp: {GYM_CONTACT.phoneFormatted}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-red-600 rounded text-center"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
