// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Brush, 
  Ruler, 
  Building, 
  HomeIcon, 
  Wrench, 
  Paintbrush, 
  ShieldCheck, 
  Clock, 
  Shield 
} from 'lucide-react';

const ServicesHeroSection = () => {
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
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/p7.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-blue-600/70" />
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />

      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={childVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Our Services
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-white/90 mb-12">
                Professional painting and construction services tailored to your needs
              </p>
            </motion.div>

            <motion.div 
              variants={childVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8"
            >
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Paintbrush className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">Expert Painting</h3>
                <p className="text-white/80">Interior and exterior painting with premium materials</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Building className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">Construction</h3>
                <p className="text-white/80">Full-scale construction and renovation services</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">Timely Delivery</h3>
                <p className="text-white/80">Project completion within agreed timelines</p>
              </div>

              <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">Quality Guarantee</h3>
                <p className="text-white/80">Satisfaction guaranteed on all our work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  // Map service types to appropriate background images
  const getBackgroundImage = (title) => {
    const backgrounds = {
      'Interior Painting': '/p5.jpg', // Interior room image
      'Exterior Painting': '/p6.jpg', // House exterior image
      'Commercial Painting': '/p4.jpg', // Office building image
      'Construction Services': 'p3.webp', // Construction site image
    };
    return backgrounds[title] || '/api/placeholder/800/600';
  };

  // Define specific overlay colors for each service type
  const getGradientOverlay = (title) => {
    const overlays = {
      'Interior Painting': 'from-white/95 via-white/90 to-primary/5',
      'Exterior Painting': 'from-white/95 via-white/90 to-secondary/5',
      'Commercial Painting': 'from-white/95 via-white/90 to-blue-500/5',
      'Construction Services': 'from-white/95 via-white/90 to-gray-500/5',
    };
    return overlays[title] || 'from-white/95 via-white/90 to-primary/5';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 transition-transform duration-700">
        <img
          src={getBackgroundImage(service.title)}
          alt={`${service.title} background`}
          className="w-full h-full object-cover opacity-15 transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientOverlay(service.title)}`} />
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] opacity-30" />

      {/* Content Container */}
      <div className="relative p-8">
        {/* Service Header */}
        <div className="flex items-center mb-6">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
            <div className="text-primary w-8 h-8">
              {service.icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold ml-4 text-gray-800">{service.title}</h3>
        </div>

        {/* Service Description */}
        <p className="text-gray-700 mb-6 backdrop-blur-sm bg-white/50 p-3 rounded-lg">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.1) + (idx * 0.1) }}
              className="flex items-center text-gray-700 group/feature backdrop-blur-sm bg-white/50 p-2 rounded-lg"
            >
              <div className="relative">
                <ShieldCheck className="w-5 h-5 text-primary mr-3 transition-transform duration-300 group-hover/feature:scale-110" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300" />
              </div>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ProcessStep = ({ step, index }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
          <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
          <div className="relative w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>

        {index < 3 && (
          <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
        )}
      </div>
    </motion.div>
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

  const processSteps = [
    { icon: <Wrench className="w-8 h-8" />, title: 'Consultation', description: 'Initial meeting and assessment' },
    { icon: <Ruler className="w-8 h-8" />, title: 'Planning', description: 'Detailed project planning' },
    { icon: <Brush className="w-8 h-8" />, title: 'Execution', description: 'Professional implementation' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Quality Check', description: 'Final inspection and approval' }
  ];

  return (
    <div className="pt-16">
      <ServicesHeroSection />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

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