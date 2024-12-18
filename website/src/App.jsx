// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Layout } from './components/layout.jsx';
import { LanguageProvider } from './context/context.jsx';
import Home from './components/home/home.jsx';
import Services from './components/services/services.jsx';
import Projects from './components/projects/projects.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

function App() {
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
