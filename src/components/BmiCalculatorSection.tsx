import React, { useState, useMemo } from 'react';
import { Activity, ArrowRight, RotateCcw, ShieldCheck, Sparkles, Scale } from 'lucide-react';

interface BmiCalculatorProps {
  onPlanRecommendationClick: (recommendedPlanId: string, bmiNote: string) => void;
}

export const BmiCalculatorSection: React.FC<BmiCalculatorProps> = ({
  onPlanRecommendationClick,
}) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  
  // Metric state
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(72);

  // Imperial state
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(9);
  const [weightLbs, setWeightLbs] = useState<number>(160);

  const [gender, setGender] = useState<'male' | 'female'>('male');

  // Compute BMI
  const bmiResult = useMemo(() => {
    let hMeters = 0;
    let wKg = 0;

    if (unit === 'metric') {
      hMeters = heightCm / 100;
      wKg = weightKg;
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      hMeters = (totalInches * 2.54) / 100;
      wKg = weightLbs * 0.453592;
    }

    if (hMeters <= 0 || wKg <= 0) {
      return {
        bmi: 0,
        category: 'Invalid',
        color: 'text-neutral-400',
        bgColor: 'bg-neutral-800',
        borderColor: 'border-neutral-700',
        range: '—',
        recommendedPlanId: 'gym-general',
        recommendedPlanName: 'General Gym & Strength Training',
        trainingFocus: 'Baseline Fitness',
        description: 'Please input valid height and weight measurements.',
        percentPosition: 50,
      };
    }

    const val = Number((wKg / (hMeters * hMeters)).toFixed(1));

    if (val < 18.5) {
      return {
        bmi: val,
        category: 'Underweight',
        color: 'text-amber-400',
        bgColor: 'bg-amber-400',
        borderColor: 'border-amber-400/40',
        range: '< 18.5',
        recommendedPlanId: 'gym-general',
        recommendedPlanName: 'General Gym & Strength Training',
        trainingFocus: 'Hypertrophy Muscle Building & Caloric Surplus',
        description: 'Focus on compound resistance lifts, progressive overload, and caloric surplus nutrition to build functional fighting mass and joint resilience.',
        percentPosition: Math.min(Math.max(((val - 12) / (38 - 12)) * 100, 4), 96),
      };
    } else if (val >= 18.5 && val <= 24.9) {
      return {
        bmi: val,
        category: 'Optimal / Athletic Zone',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-400',
        borderColor: 'border-emerald-400/40',
        range: '18.5 – 24.9',
        recommendedPlanId: 'fitness-mma',
        recommendedPlanName: 'Ultimate Fitness & MMA',
        trainingFocus: 'Combat Conditioning, Agility & Explosive Power',
        description: 'You are in an optimal athletic weight range. Perfect for fast-paced boxing pad work, grappling takedowns, and fight camp conditioning circuits.',
        percentPosition: Math.min(Math.max(((val - 12) / (38 - 12)) * 100, 4), 96),
      };
    } else if (val >= 25 && val <= 29.9) {
      return {
        bmi: val,
        category: 'Overweight / Heavyweight Class',
        color: 'text-orange-400',
        bgColor: 'bg-orange-400',
        borderColor: 'border-orange-400/40',
        range: '25.0 – 29.9',
        recommendedPlanId: 'fitness-boxing',
        recommendedPlanName: 'Fitness / Boxing Combo',
        trainingFocus: 'High-Output Boxing Bag Circuits & Fat Shred',
        description: 'Combine heavy bag combinations with functional athletic strength floor workouts to burn excess adipose while preserving dense power.',
        percentPosition: Math.min(Math.max(((val - 12) / (38 - 12)) * 100, 4), 96),
      };
    } else {
      return {
        bmi: val,
        category: 'Obese / High Body Fat Zone',
        color: 'text-red-500',
        bgColor: 'bg-red-500',
        borderColor: 'border-red-500/40',
        range: '≥ 30.0',
        recommendedPlanId: 'pt-gym-1m',
        recommendedPlanName: '1-Month Gym Personal Training',
        trainingFocus: 'Low-Impact Structural Conditioning & Dedicated 1-on-1 PT',
        description: 'We recommend structured 1-on-1 personal training to prioritize joint protection, mobility, strict nutrition tracking, and gradual aerobic elevation.',
        percentPosition: Math.min(Math.max(((val - 12) / (38 - 12)) * 100, 4), 96),
      };
    }
  }, [unit, heightCm, weightKg, heightFeet, heightInches, weightLbs]);

  const handleReset = () => {
    if (unit === 'metric') {
      setHeightCm(175);
      setWeightKg(72);
    } else {
      setHeightFeet(5);
      setHeightInches(9);
      setWeightLbs(160);
    }
  };

  const handleApplyToRegistration = () => {
    const note = `Calculated BMI: ${bmiResult.bmi} (${bmiResult.category}). Goal: ${bmiResult.trainingFocus}.`;
    onPlanRecommendationClick(bmiResult.recommendedPlanId, note);
  };

  return (
    <section id="bmi-calculator" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-3">
            <Scale className="w-3.5 h-3.5 text-red-500" />
            <span>Body Composition Assessment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            RFC Combat BMI Calculator
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
            Calculate your Body Mass Index (BMI) to understand your training baseline and receive a personalized combat training roadmap recommended by RFC coaches.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              {/* Unit & Gender Switchers */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-neutral-400">Measurement System:</span>
                  <div className="inline-flex p-1 rounded-xl bg-neutral-950 border border-neutral-800">
                    <button
                      onClick={() => setUnit('metric')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${
                        unit === 'metric'
                          ? 'bg-red-600 text-white shadow'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Metric (kg/cm)
                    </button>
                    <button
                      onClick={() => setUnit('imperial')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${
                        unit === 'imperial'
                          ? 'bg-red-600 text-white shadow'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Imperial (lbs/ft)
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setGender('male')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      gender === 'male'
                        ? 'border-red-600/70 bg-red-600/10 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      gender === 'female'
                        ? 'border-red-600/70 bg-red-600/10 text-white'
                        : 'border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Input Sliders & Fields */}
              <div className="space-y-6 pt-6">
                {unit === 'metric' ? (
                  <>
                    {/* Height in CM */}
                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-mono">
                        <span className="text-neutral-300 font-semibold uppercase">Your Height</span>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold text-white tabular-nums">{heightCm}</span>
                          <span className="text-neutral-500">cm</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="120"
                        max="220"
                        step="1"
                        value={heightCm}
                        onChange={(e) => setHeightCm(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                        <span>120 cm</span>
                        <span>170 cm</span>
                        <span>220 cm</span>
                      </div>
                    </div>

                    {/* Weight in KG */}
                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-mono">
                        <span className="text-neutral-300 font-semibold uppercase">Your Weight</span>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold text-white tabular-nums">{weightKg}</span>
                          <span className="text-neutral-500">kg</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="35"
                        max="160"
                        step="0.5"
                        value={weightKg}
                        onChange={(e) => setWeightKg(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                        <span>35 kg</span>
                        <span>90 kg</span>
                        <span>160 kg</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Height in Feet / Inches */}
                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-mono">
                        <span className="text-neutral-300 font-semibold uppercase">Your Height</span>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold text-white tabular-nums">
                            {heightFeet}&prime; {heightInches}&Prime;
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] text-neutral-500 uppercase block mb-1">Feet</label>
                          <input
                            type="number"
                            min="4"
                            max="7"
                            value={heightFeet}
                            onChange={(e) => setHeightFeet(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-neutral-500 uppercase block mb-1">Inches</label>
                          <input
                            type="number"
                            min="0"
                            max="11"
                            value={heightInches}
                            onChange={(e) => setHeightInches(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Weight in Lbs */}
                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-mono">
                        <span className="text-neutral-300 font-semibold uppercase">Your Weight</span>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold text-white tabular-nums">{weightLbs}</span>
                          <span className="text-neutral-500">lbs</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="80"
                        max="350"
                        step="1"
                        value={weightLbs}
                        onChange={(e) => setWeightLbs(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                      />
                      <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                        <span>80 lbs</span>
                        <span>200 lbs</span>
                        <span>350 lbs</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Baseline</span>
              </button>
              <span className="text-[11px] font-mono text-neutral-500">
                Formula: BMI = Weight (kg) / Height² (m²)
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Results & Coaching Recommendation */}
          <div className="lg:col-span-5 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-semibold">
                  Calculated BMI Index
                </span>
                <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${bmiResult.borderColor} ${bmiResult.color} bg-neutral-950`}>
                  {bmiResult.category}
                </span>
              </div>

              {/* Big Score Display */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-6xl sm:text-7xl font-black text-white tabular-nums tracking-tight">
                  {bmiResult.bmi}
                </span>
                <span className="text-neutral-500 text-xs font-mono">
                  kg/m²
                </span>
              </div>

              {/* Visual Gauge Bar */}
              <div className="space-y-2 mb-8">
                <div className="h-3 w-full bg-neutral-950 rounded-full overflow-hidden flex relative border border-neutral-800">
                  <div className="h-full w-1/4 bg-amber-500/70" title="Underweight (< 18.5)" />
                  <div className="h-full w-1/4 bg-emerald-500" title="Normal / Athletic (18.5 - 24.9)" />
                  <div className="h-full w-1/4 bg-orange-500" title="Overweight (25 - 29.9)" />
                  <div className="h-full w-1/4 bg-red-600" title="Obese (≥ 30)" />

                  {/* Marker Pin */}
                  <div
                    className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_8px_white] transition-all duration-300"
                    style={{ left: `${bmiResult.percentPosition}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>Under &lt;18.5</span>
                  <span>Athletic 18.5–24.9</span>
                  <span>Over 25–29.9</span>
                  <span>Obese 30+</span>
                </div>
              </div>

              {/* Coach Recommendation Card */}
              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Coach Training Recommendation</span>
                </div>
                <p className="text-sm font-bold text-white">
                  {bmiResult.trainingFocus}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {bmiResult.description}
                </p>
                <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Recommended Program:</span>
                  <span className="text-red-400 font-semibold">{bmiResult.recommendedPlanName}</span>
                </div>
              </div>
            </div>

            {/* Apply & Scroll to Registration Button */}
            <button
              onClick={handleApplyToRegistration}
              className="w-full py-4 px-5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Enroll for This Program</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
