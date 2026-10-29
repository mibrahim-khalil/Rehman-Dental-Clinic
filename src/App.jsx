import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.jsx";

import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Panels from "./pages/Panels/Panels.jsx";
import Team from "./pages/Team/Team.jsx";
import Awareness from "./pages/Awareness/Awareness.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/panels" element={<Panels />} />
            <Route path="/team" element={<Team />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}