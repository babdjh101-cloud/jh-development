import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

// Core Primary Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectsCategoryPage } from './pages/ProjectsCategoryPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Corporate Governance & Overview Sub-Pages
import { BusinessCategoriesPage } from './pages/BusinessCategoriesPage';
import { BusinessOverviewPage } from './pages/BusinessOverviewPage';
import { VisionMissionPage } from './pages/VisionMissionPage';
import { PartnersPage } from './pages/PartnersPage';
import { BusinessRoadmapPage } from './pages/BusinessRoadmapPage';
import { FutureProjectsPage } from './pages/FutureProjectsPage';
import { ConnectWithUsPage } from './pages/ConnectWithUsPage';

// Trade License Service Division Sub-Pages
import { ConstructionServicesPage } from './pages/ConstructionServicesPage';
import { SupplyImportExportPage } from './pages/SupplyImportExportPage';
import { LandDevelopmentPage } from './pages/LandDevelopmentPage';
import { RealEstateHousingPage } from './pages/RealEstateHousingPage';
import { ConsultancyPage } from './pages/ConsultancyPage';

// Materials & Aggregates Interactive Catalog Pages
import { SandSupplyPage } from './pages/SandSupplyPage';
import { StoneAggregatePage } from './pages/StoneAggregatePage';
import { NavigationHistoryProvider } from './context/NavigationHistoryContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <NavigationHistoryProvider>
          <ScrollToTop />
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
          {/* Skip-to-content Link for Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to main content
          </a>

          {/* Unified Architectural Header */}
          <Header />

          {/* Router Content View */}
          <main id="main-content" className="flex-1">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />

              {/* About Us & Governance Sub-routes */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/business-overview" element={<BusinessOverviewPage />} />
              <Route path="/business-categories" element={<BusinessCategoriesPage />} />
              <Route path="/vision-mission" element={<VisionMissionPage />} />
              <Route path="/business-roadmap" element={<BusinessRoadmapPage />} />
              <Route path="/partners" element={<PartnersPage />} />

              {/* Services & Specialized Service Sub-routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/construction" element={<ConstructionServicesPage />} />
              <Route path="/services/supply-import-export" element={<SupplyImportExportPage />} />
              <Route path="/services/land-development" element={<LandDevelopmentPage />} />
              <Route path="/services/real-estate-housing" element={<RealEstateHousingPage />} />
              <Route path="/services/consultancy" element={<ConsultancyPage />} />

              {/* Materials & Aggregates Interactive Catalogs */}
              <Route path="/materials/sand" element={<SandSupplyPage />} />
              <Route path="/materials/stone-aggregate" element={<StoneAggregatePage />} />

              {/* Projects Portfolio & Status Categories */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route
                path="/projects/completed"
                element={<ProjectsCategoryPage status="completed" />}
              />
              <Route
                path="/projects/ongoing"
                element={<ProjectsCategoryPage status="ongoing" />}
              />
              <Route
                path="/projects/upcoming"
                element={<ProjectsCategoryPage status="upcoming" />}
              />
              <Route path="/future-projects" element={<FutureProjectsPage />} />

              {/* Dedicated Project Detail URL */}
              <Route path="/projects/:id" element={<ProjectDetailPage />} />

              {/* Equipment & Capabilities */}
              <Route path="/equipment" element={<EquipmentPage />} />

              {/* Leadership & Governance */}
              <Route path="/leadership" element={<LeadershipPage />} />

              {/* Field Gallery */}
              <Route path="/gallery" element={<GalleryPage />} />

              {/* Contact & Structured 7-Pathway Inquiries */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/connect-with-us" element={<ConnectWithUsPage />} />

              {/* 404 Not Found Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Unified Architectural Footer */}
          <Footer />

          {/* Smart Floating WhatsApp Action */}
          <WhatsAppFloatingButton />
        </div>
        </NavigationHistoryProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}
