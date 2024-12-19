// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Brush, Ruler, Building, HomeIcon, Wrench, Paintbrush, ShieldCheck, Clock, Shield } from 'lucide-react';

const ServicesHeroSection = () => {
  // We create a background pattern effect using a gradient and overlay
  // This adds visual interest while maintaining readability
  const overlayStyle = {
    backgroundImage: 
      `linear-gradient(120deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.95)),
       url('/2.jpg')`
  };

  // Animation variants for the content entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Background with pattern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={overlayStyle}
      />
      
      {/* Subtle glass effect for depth */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/5" />

      {/* Main content container */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Main heading and description */}
            <motion.div variants={childVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Our Services
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-white/90 mb-12">
                Professional painting and construction services tailored to your needs
              </p>
            </motion.div>

            {/* Service highlights with icons */}
            <motion.div 
              variants={childVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8"
            >
              {/* Each service highlight is a card with an icon and description */}
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Paintbrush className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2">Expert Painting</h3>
                <p className="text-white/80">Interior and exterior painting with premium materials</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Building className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2">Construction</h3>
                <p className="text-white/80">Full-scale construction and renovation services</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
                <p className="text-white/80">Project completion within agreed timelines</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-white/80">Satisfaction guaranteed on all our work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Paintbrush />,
      title: 'Interior Painting',
      description: 'Professional interior painting services for all rooms and surfaces.',
      features: [
        'Wall painting and preparation',
        'Ceiling painting',
        'Trim and door painting',
        'Special finishes and textures'
      ]
    },
    {
      icon: <Brush />,
      title: 'Exterior Painting',
      description: 'Durable exterior painting solutions to protect and beautify your property.',
      features: [
        'House exterior painting',
        'Weather-resistant coatings',
        'Surface preparation',
        'Color consultation'
      ]
    },
    {
      icon: <Building />,
      title: 'Commercial Painting',
      description: 'Complete painting solutions for businesses and commercial properties.',
      features: [
        'Office painting',
        'Retail space renovation',
        'Industrial painting',
        'Commercial maintenance'
      ]
    },
    {
      icon: <Ruler />,
      title: 'Construction Services',
      description: 'Quality construction and renovation services under Buildmarque.',
      features: [
        'Building construction',
        'Renovations',
        'Extensions',
        'Project management'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-primary w-12 h-12 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ShieldCheck className="w-5 h-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Wrench />, title: 'Consultation', description: 'Initial meeting and assessment' },
              { icon: <Ruler />, title: 'Planning', description: 'Detailed project planning' },
              { icon: <Brush />, title: 'Execution', description: 'Professional implementation' },
              { icon: <ShieldCheck />, title: 'Quality Check', description: 'Final inspection and approval' }
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8">Contact us today for a free consultation and quote</p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full transition-colors">
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;