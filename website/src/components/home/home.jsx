// src/pages/Home.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ChevronRight,
  Star,
  Building,
  Home as HomeIcon,
  Factory,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PaintBrandsShowcase, PartnersShowcase } from "../paints/paints";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral/80 to-neutral/40">
          <div className="absolute inset-0 bg-[url('/2.jpg')] bg-cover bg-center mix-blend-overlay" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl mb-8">{t("home.hero.subtitle")}</p>
            <button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-colors"
              onClick={() => navigate("/contact")}
            >
              <span>{t("home.hero.cta")}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of painting and construction
              services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<HomeIcon className="w-8 h-8" />}
              title="Residential"
              description="Transform your home with our expert residential painting services."
            />
            <ServiceCard
              icon={<Building className="w-8 h-8" />}
              title="Commercial"
              description="Professional painting solutions for businesses and offices."
            />
            <ServiceCard
              icon={<Factory className="w-8 h-8" />}
              title="Industrial"
              description="Large-scale painting projects for industrial facilities."
            />
          </div>
        </div>
      </section>

      {/* Paint Brands */}

      <PaintBrandsShowcase />

      <PartnersShowcase />

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <TestimonialCard
                key={i}
                name="John"
                role="Director of Operations"
                text="Excellent service! The team was professional and completed the job on time."
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, role, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex text-secondary mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <div>
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-500">{role}</p>
    </div>
  </div>
);

export default Home;
