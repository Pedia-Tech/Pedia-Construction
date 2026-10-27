import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import SectionWhatWeDo from './components/SectionWhatWeDo';
import SectionCapabilities from './components/SectionCapabilities';
import SectionDetailingLab from './components/SectionDetailingLab';
import SectionWhyPrecisionMatters from './components/SectionWhyPrecisionMatters';
import SectionWorkflow from './components/SectionWorkflow';
import SectionProjects from './components/SectionProjects';
import SectionTechnicalVisualization from './components/SectionTechnicalVisualization';
import SectionIndustries from './components/SectionIndustries';
import SectionAbout from './components/SectionAbout';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Dedicated Full Views
import ServicesView from './views/ServicesView';
import ProjectsView from './views/ProjectsView';
import DetailingLabView from './views/DetailingLabView';
import GalleryView from './views/GalleryView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col bg-prime-bg text-prime-navy antialiased selection:bg-prime-accent selection:text-white">
      {/* FLOATING NAVIGATION BAR */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* MAIN VIEW CONTENT ROUTER */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* HERO: INTERACTIVE 3D ENGINEERING COMPOSITION WITH 8 STAGES */}
            <HeroCinematic
              onStartProject={() => setQuoteModalOpen(true)}
              onExploreServices={() => setActiveView('services')}
            />

            {/* SECTION 02: WHAT WE ACTUALLY DO */}
            <SectionWhatWeDo
              onSelectCapability={(cap) => setActiveView('services')}
            />

            {/* SECTION 03: ENGINEERING CAPABILITIES */}
            <SectionCapabilities
              onOpenQuote={() => setQuoteModalOpen(true)}
            />

            {/* SECTION 04: THE DETAILING LAB (INTERACTIVE CAD HOTSPOTS & CALCULATION) */}
            <SectionDetailingLab />

            {/* SECTION 05: WHY PRECISION MATTERS */}
            <SectionWhyPrecisionMatters />

            {/* SECTION 06: OUR WORKFLOW (7-STAGE TIMELINE WITH ANIMATED LINE) */}
            <SectionWorkflow />

            {/* SECTION 07: EDITORIAL PROJECTS SHOWCASE */}
            <SectionProjects
              onSelectProject={() => setActiveView('projects')}
              onViewAllProjects={() => setActiveView('projects')}
            />

            {/* SECTION 08: TECHNICAL 3D STRUCTURAL VISUALIZATION */}
            <SectionTechnicalVisualization />

            {/* SECTION 09: INDUSTRIES */}
            <SectionIndustries
              onExploreIndustry={() => setActiveView('projects')}
            />

            {/* SECTION 10: ABOUT EDITORIAL & STATS */}
            <SectionAbout
              onReadMore={() => setActiveView('about')}
            />
          </>
        )}

        {/* DEDICATED FULL VIEWS */}
        {activeView === 'services' && (
          <ServicesView onOpenQuote={() => setQuoteModalOpen(true)} />
        )}

        {activeView === 'capabilities' && (
          <div className="pt-20">
            <SectionCapabilities onOpenQuote={() => setQuoteModalOpen(true)} />
            <SectionWhatWeDo onSelectCapability={() => setActiveView('services')} />
          </div>
        )}

        {activeView === 'lab' && (
          <DetailingLabView onOpenQuote={() => setQuoteModalOpen(true)} />
        )}

        {activeView === 'projects' && (
          <ProjectsView onOpenQuote={() => setQuoteModalOpen(true)} />
        )}

        {activeView === 'gallery' && (
          <GalleryView />
        )}

        {activeView === 'about' && (
          <AboutView onOpenQuote={() => setQuoteModalOpen(true)} />
        )}

        {activeView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* FOOTER */}
      <Footer onNavigate={(view) => setActiveView(view)} />

      {/* RAPID QUOTE ESTIMATOR MODAL */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
