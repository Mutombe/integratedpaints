// src/components/Layout.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './nav/nav';
import { Footer } from './footer/footer';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar />
      <AnimatePresence mode="wait"> 
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};