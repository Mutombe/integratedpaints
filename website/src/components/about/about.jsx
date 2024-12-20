// src/pages/About.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { PaintBrandsShowcase, PartnersShowcase } from '../paints/paints';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/p7.jpg')`,
        }}
      />
      
      {/* Gradient Overlay - Creates depth and ensures text readability */}
      <div className="absolute inset-0 bg-blue-600/70" />
      
      {/* Glass Effect Layer */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
      
      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Integrated Painters
          </h1>
          <p className="text-xl text-white/90">
            Excellence in Painting and Construction Since 2008
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <Users />, value: '200+', label: 'Completed Projects' },
    { icon: <Award />, value: '15+', label: 'Years Experience' },
    { icon: <Clock />, value: '98%', label: 'On-Time Completion' },
    { icon: <Shield />, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />


      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Integrated Painters, also known as Buildmarque in our construction
                operations, has been serving Zimbabwe with excellence since 2008.
                Based in Harare, we've built our reputation on three core
                principles: Neatness, Accuracy, and Speed.
              </p>
              <p className="text-gray-600">
                Our commitment to quality and professional excellence has made us
                one of the leading painting and construction companies in Zimbabwe,
                serving both residential and commercial clients with distinction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px]"
            >
              <div className="absolute inset-0 bg-[url('/p4.jpg')] bg-center bg-cover rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Neatness',
                description:
                  'We take pride in our clean, precise workmanship and thorough attention to detail.',
              },
              {
                title: 'Accuracy',
                description:
                  'Every project is executed with exact precision to meet and exceed client expectations.',
              },
              {
                title: 'Speed',
                description:
                  'We deliver quality results within agreed timelines without compromising on excellence.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PartnersShowcase />
    </div>
  );
};

export default About;