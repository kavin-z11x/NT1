/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Navbar } from './components/Navbar';
import { MobileBottomDock } from './components/MobileBottomDock';
import { HomeScreen } from './components/HomeScreen';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OpeningIntro } from './components/OpeningIntro';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showOpeningIntro, setShowOpeningIntro] = useState<boolean>(true);

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  // Refresh AOS when opening intro finishes
  useEffect(() => {
    if (!showOpeningIntro) {
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    }
  }, [showOpeningIntro]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'project', 'about', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#01040D] text-[#F0F9FF] flex flex-col font-sans selection:bg-blue-600/35 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* Global Navy Blue Universe Ambient Mesh Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-blue-700/12 rounded-full blur-[160px] animate-liquid-mesh" />
        <div
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[170px] animate-liquid-mesh"
          style={{ animationDelay: '5s' }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] bg-blue-900/15 rounded-full blur-[180px] animate-liquid-mesh"
          style={{ animationDelay: '10s' }}
        />
      </div>

      {/* 1) Opening Intro Splash */}
      {showOpeningIntro && (
        <OpeningIntro onComplete={() => setShowOpeningIntro(false)} />
      )}

      {/* Top Floating Liquid Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main className="flex-grow relative z-10">
        {/* 1) Home: Contained 100% uncropped architectural showcase in liquid glass */}
        <HomeScreen />

        {/* 2) Project Section: 6 projects + 3D to Reality Stage + On-Site Walkthrough Video Reels */}
        <ProjectsSection />

        {/* 3) About Section: Ethos quote, telemetry metrics, and 4-step execution methodology */}
        <AboutSection />

        {/* 4) Contact Section: Kasipalayam Studio Suite with Google Maps & direct WhatsApp */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Liquid Glass Bottom Dock for Mobile */}
      <MobileBottomDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Action (desktop bottom-right, mobile above dock) */}
      <WhatsAppFloatingButton />

    </div>
  );
}
