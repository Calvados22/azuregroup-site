import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMessageButton from './components/FloatingMessageButton';

import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Services from './pages/Services';
import Produits from './pages/Produits';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // adjust path as needed
import Digitalisation from './pages/services/Digitalisation';
import Outsourcing from './pages/services/Outsourcing';
import Academy from './pages/services/Academy';
import Chainway from './pages/products/Chainway';
import Iloq from './pages/products/Iloq';
import SecurityPhysique from './pages/services/SecurityPhysique';

function App() {
  return (
    <>
    <ScrollToTop /> {/* This ensures scroll reset on route change */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/services" element={<Services />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/digitalisation" element={<Digitalisation />} />
            <Route path="/services/outsourcing" element={<Outsourcing />} />
            <Route path="/services/SecurityPhysique" element={<SecurityPhysique />} />
            <Route path="/services/academy" element={<Academy />} />
            <Route path="/products/chainway" element={<Chainway />} />
            <Route path="/products/iloq" element={<Iloq />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Floating buttons always visible */}
      <FloatingMessageButton />
    </>
  );
}

export default App;