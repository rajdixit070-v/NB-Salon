import React from 'react';
import { SalonProvider, useSalon } from './context/SalonContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { BookingModal } from './components/common/BookingModal';
import { Lightbox } from './components/common/Lightbox';
import { FloatingConcierge } from './components/common/FloatingConcierge';
import { Movable3DSalonScene } from './components/common/Movable3DSalonScene';

// Multi-Page Split Views
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PackagesPage } from './pages/PackagesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './components/admin/AdminDashboard';

const MainLayout: React.FC = () => {
  const { currentPage, navigate } = useSalon();

  // Render current split page
  const renderPage = () => {
    switch (currentPage) {
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/packages':
        return <PackagesPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/contact':
        return <ContactPage />;
      case '/admin':
        return <AdminDashboard onClose={() => navigate('/')} />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#041B12] text-[#F5EBDD] font-sans relative selection:bg-[#D5AD55] selection:text-[#073B27] overflow-x-hidden">
      
      {/* Movable Interactive 3D Unisex Salon Elements (Scissors, Comb, Blow Dryer, Razor, Perfume, Polish) */}
      <Movable3DSalonScene />

      {/* Luxury Sticky Navbar */}
      <Navbar />

      {/* Active Split Page Content */}
      <main className="relative z-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <BookingModal />
      <Lightbox />
      <FloatingConcierge />
    </div>
  );
};

export default function App() {
  return (
    <SalonProvider>
      <MainLayout />
    </SalonProvider>
  );
}
