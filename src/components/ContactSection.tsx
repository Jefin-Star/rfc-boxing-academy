import React from 'react';
import { Mail, Phone, MessageSquare, Instagram, MapPin, ExternalLink, Clock } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900/40 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-red-500 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 font-mono">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Connect With RFC Academy
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Have questions about our training batches, membership fees, or beginner programs? Reach out directly via WhatsApp, email, or visit our gym floor in person.
          </p>
        </div>

        {/* 2-Column Contact Info + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Clickable Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* WhatsApp Link Card */}
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 hover:border-emerald-500/60 hover:bg-neutral-900/80 transition-all duration-200 group flex items-start gap-4 shadow-lg"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-semibold">
                    WhatsApp Chat
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors truncate">
                  {GYM_CONTACT.phoneFormatted}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Click to chat directly with RFC head coach on WhatsApp
                </p>
              </div>
            </a>

            {/* Email Link Card */}
            <a
              href={`mailto:${GYM_CONTACT.email}`}
              className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 hover:border-red-500/60 hover:bg-neutral-900/80 transition-all duration-200 group flex items-start gap-4 shadow-lg"
            >
              <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/30 text-red-500 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-semibold">
                    Direct Email
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-red-400 transition-colors" />
                </div>
                <p className="font-mono text-sm sm:text-base font-bold text-white mt-1 group-hover:text-red-400 transition-colors truncate">
                  {GYM_CONTACT.email}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Send inquiries, corporate memberships, or training questions
                </p>
              </div>
            </a>

            {/* Instagram Link Card */}
            <a
              href={GYM_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 hover:border-pink-500/60 hover:bg-neutral-900/80 transition-all duration-200 group flex items-start gap-4 shadow-lg"
            >
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-semibold">
                    Instagram Official
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-pink-400 transition-colors" />
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-pink-400 transition-colors truncate">
                  {GYM_CONTACT.instagramHandle}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Follow workout reels, fight clips, sparring footage & updates
                </p>
              </div>
            </a>

            {/* Location address callout */}
            <div className="p-5 rounded-2xl bg-neutral-950/50 border border-neutral-800/60 flex items-start gap-3.5 text-xs sm:text-sm text-neutral-300">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">RFC FITNESS MMA BOXING ACADEMY</span>
                <span className="text-neutral-400">Located with dedicated sparring area and strength deck. Easy access with nearby parking.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] sm:min-h-[450px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative bg-neutral-950">
              <iframe
                src={GYM_CONTACT.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="RFC FITNESS MMA BOXING ACADEMY Google Maps Location"
                className="w-full h-full filter contrast-105"
              />
              <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-800 shadow-lg flex items-center gap-2 pointer-events-none">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-white uppercase font-display">
                  RFC BOXING ACADEMY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
