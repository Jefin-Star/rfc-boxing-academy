/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MembershipSection } from './components/MembershipSection';
import { BmiCalculatorSection } from './components/BmiCalculatorSection';
import { RegistrationSection } from './components/RegistrationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from './data/gymData';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('fitness-mma');
  const [selectedDuration, setSelectedDuration] = useState<string>('1 Month');
  const [initialGoals, setInitialGoals] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (planId: string, durationLabel: string) => {
    setSelectedPlanId(planId);
    setSelectedDuration(durationLabel);
    scrollToSection('register');
  };

  const handleBmiRecommendation = (recommendedPlanId: string, bmiNote: string) => {
    setSelectedPlanId(recommendedPlanId);
    setSelectedDuration('1 Month');
    setInitialGoals(bmiNote);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onJoinClick={() => scrollToSection('register')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onJoinClick={() => scrollToSection('register')}
          onViewPlansClick={() => scrollToSection('plans')}
        />

        {/* 2. About Our Gym Section */}
        <AboutSection />

        {/* 3. Membership Plans & Schedule Section */}
        <MembershipSection onSelectPlan={handlePlanSelect} />

        {/* 4. BMI Assessment & Combat Focus Calculator */}
        <BmiCalculatorSection onPlanRecommendationClick={handleBmiRecommendation} />

        {/* 5. Membership Registration Form Section */}
        <RegistrationSection
          selectedPlanId={selectedPlanId}
          selectedDuration={selectedDuration}
          initialGoals={initialGoals}
        />

        {/* 6. Contact Us Section */}
        <ContactSection />
      </main>

      {/* 6. Footer Section */}
      <Footer />

      {/* Floating Instant WhatsApp Button for rapid mobile reach */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${GYM_CONTACT.whatsappNumber}?text=Hi%20RFC%20BOXING%20ACADEMY!%20I%20am%20interested%20in%20joining%20the%20gym.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/80 transition-all hover:scale-105 active:scale-95 group border border-emerald-400/40"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            WhatsApp RFC
          </span>
        </a>
      </aside>
    </div>
  );
}
