// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Layout } from './components/layout.jsx';
import { LanguageProvider } from './context/context.jsx';
import { useLocation } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from "react";


// Implementing lazy loading for route components to improve initial load time
const Home = lazy(() => import("./components/home/home"));
const Projects = lazy(() => import("./components/projects/projects"));
const About = lazy(() => import("./components/about/about"));
const Contact = lazy(() => import("./components/contact/contact"));
const Services = lazy(() => import("./components/services/services"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

function App() {

  useEffect(() => {
    const preloadImages = [
      "logo.png",
      "/2.jpg",
      "/IP.png",
      "p1.webp",
      "p2.jpg",
      
      // Add other critical images here
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <Toaster position="top-center" />
        </Router>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
