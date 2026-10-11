import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Hero } from './components/sections/Hero';
import { CredibilityStrip } from './components/sections/CredibilityStrip';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyWorkWithMe } from './components/sections/WhyWorkWithMe';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { CTASection } from './components/sections/CTASection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero with clean unobstructed portrait */}
        <Hero />

        {/* 2. Typographic Credibility Strip */}
        <CredibilityStrip />

        {/* 3. About the Practice & Core Philosophy */}
        <AboutSection />

        {/* 4. Technical Expertise & Timeline Chronology */}
        <ExperienceSection />

        {/* 5. Selected Work & Case Studies */}
        <ProjectsSection />

        {/* 6. Editorial Numbered Services */}
        <ServicesSection />

        {/* 7. Why Work With Me (Standards & Ethics) */}
        <WhyWorkWithMe />

        {/* 8. Client Testimonials */}
        <TestimonialsSection />

        {/* 9. Closing Action Callout */}
        <CTASection />

        {/* 10. Direct Contact Channels & Brief Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
