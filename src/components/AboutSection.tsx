import React from 'react';
import { Wind, Sparkles, ShieldCheck, Ruler, Sun } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const metrics = [
    { label: 'Google Rating & Reviews', value: '5.0 ★', unit: 'Verified' },
    { label: 'Council of Architecture', value: 'COA', unit: 'Reg. Architect' },
    { label: '3D to Reality Precision', value: '100%', unit: 'Turnkey Fidelity' },
    { label: 'Climate Responsive Design', value: '100%', unit: 'Passive Airflow' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Solar & Wind Climatology',
      description: 'Detailed analysis of local Tamil Nadu sun-path trajectories, thermal gradients, and southwest monsoon wind tunnels before drafting initial concepts.',
      icon: Sun,
    },
    {
      step: '02',
      title: 'Generative 3D & VR Modeling',
      description: 'Crafting spatial proportions through physical massing studies, realistic 3D renderings, and virtual reality client walkthroughs.',
      icon: Ruler,
    },
    {
      step: '03',
      title: 'Biophilic Integration',
      description: 'Embedding indoor water bodies, central double-height courtyards, teak louvers, and perforated terracotta jalis for natural passive cooling.',
      icon: Wind,
    },
    {
      step: '04',
      title: 'Turnkey Stewardship',
      description: 'Meticulous on-site execution, material procurement, timeline adherence, and finishing craftsmanship until the final key handover.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#01040D] border-t border-cyan-500/15 overflow-hidden">
      {/* Background Architectural Ambient Liquid Lighting in Deep Navy */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-blue-700/10 rounded-full blur-[150px] pointer-events-none animate-liquid-mesh" />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-liquid-mesh"
        style={{ animationDelay: '6s' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Centered in the middle */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-panel text-cyan-300 text-xs font-mono-data tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(56,189,248,0.25)] border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Studio Ethos & Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-medium text-white tracking-tight drop-shadow-sm">
            About the Studio
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
        </div>

        {/* Highlighted Architectural Statement Quote: Deep Sapphire Liquid Glass Masterpiece */}
        <div 
          className="relative my-8 p-8 sm:p-12 rounded-3xl liquid-glass-panel liquid-sheen-navy border-cyan-400/40 hover:border-cyan-300 shadow-[0_30px_70px_rgba(1,4,13,0.92)] overflow-hidden transition-all duration-500"
          data-aos="zoom-in"
          data-aos-duration="950"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-liquid-mesh" />
          
          <div className="text-4xl sm:text-6xl text-cyan-400/30 font-serif-title leading-none select-none mb-2">
            “
          </div>

          <blockquote className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif-title font-medium text-white tracking-tight leading-snug drop-shadow-sm">
            “EVERY LIFE FORM HAS A REASON FOR ITS EXISTENCE., AND SO, WE ARE HERE TO DESIGN THE FUTURE OF OUR ERA!”
          </blockquote>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-cyan-500/20 text-xs font-mono-data text-cyan-300/90">
            <span className="font-semibold text-white">Ar. Karthikraja G, B.Arch (Founder & Principal Architect)</span>
            <span className="text-cyan-400">Nedunthatchan Architects · Kasipalayam, Erode</span>
          </div>
        </div>

        {/* Narrative Copy: Frosted Deep Navy Glass Panel */}
        <div 
          className="my-10 p-6 sm:p-8 rounded-3xl liquid-glass-panel text-slate-200 text-base sm:text-lg font-light leading-relaxed space-y-4 shadow-xl border border-cyan-500/15"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>
            Welcome to our Architectural firm in Erode, where we specialize in creating innovative and unique designs that stand out. Our team of experienced architects is dedicated to bringing your vision to life with creativity and precision. Whether you're looking for residential or commercial solutions, we pride on delivering exceptional quality and service. Let us transform your space into something extraordinary!
          </p>
        </div>

        {/* Studio Achievements Telemetry Metric Strip */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl liquid-glass-panel text-center space-y-2 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 group"
            >
              <div className="py-2 rounded-xl neu-inset-navy">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-data tracking-tight group-hover:text-cyan-200 transition-colors drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  {m.value}
                </div>
              </div>
              <div className="text-xs text-cyan-300 font-mono-data tracking-wider uppercase font-semibold">
                {m.unit}
              </div>
              <div className="text-[11px] text-slate-400 font-light">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Four-Stage Architectural Process: Sculpted Liquid Glass Cards */}
        <div className="my-14 space-y-6" data-aos="fade-up" data-aos-delay="250">
          <div className="text-center">
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-cyan-400 font-semibold">
              Execution Methodology
            </h3>
            <p className="text-xl sm:text-2xl font-serif-title font-medium text-white tracking-tight mt-1">
              How We Sculpt Spaces from Blueprint to Reality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl liquid-glass-panel transition-all duration-300 space-y-3 group border border-cyan-400/20 hover:border-cyan-400/50"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl neu-inset-navy text-cyan-300 flex items-center justify-center group-hover:border-cyan-400/60 shadow-md">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono-data text-cyan-400/80 font-bold px-2.5 py-1 rounded-full neu-inset-navy">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors font-serif-title">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
