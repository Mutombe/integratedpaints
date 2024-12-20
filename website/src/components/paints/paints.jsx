import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const PaintBrandsShowcase = () => {
  const paintBrands = [
    { name: 'Nash Paints', logo: '/nash.jpg', description: 'Premium paints and coatings' },
    { name: 'Benjamin Moore', logo: '/Benjamin.svg', description: 'Quality paint solutions' },
    { name: 'PPG', logo: '/ppg.webp', description: 'Industrial & commercial paints' },
    { name: 'Dulux', logo: '/dulux-paints.png', description: 'Professional paint products' },
    { name: 'Behr', logo: '/behr.jpg', description: 'Innovative paint technology' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted Paint Brands</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We work with industry-leading paint manufacturers to ensure the highest quality results for our clients.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {paintBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4 w-full">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-center">{brand.name}</h3>
              <p className="text-sm text-gray-500 text-center">{brand.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersShowcase = () => {
    const partners = [
      {
        name: 'Rainbow Hotel Group',
        logo: '/rainbow.png',
        type: 'Hotel',
        year: '2018',
        description: 'Leading commercial construction company'
      },
      {
        name: 'Nyaradzo Group',
        logo: '/nyaradzo-logo.png',
        type: 'Life Insurance',
        year: '2019',
        description: 'Premium property development firm'
      },
      {
        name: 'Insccor',
        logo: '/incsco.jpg',
        type: 'Investments',
        year: '2020',
        description: 'Full-service property management solutions'
      },
      {
        name: 'Total Energies',
        logo: '/total.png',
        type: 'Energy',
        year: '2021',
        description: 'Innovative architectural design studio'
      }
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're proud to collaborate with leading companies across the construction and real estate industries.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-6 h-24 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                  <p className="text-primary font-medium">{partner.type}</p>
                  <p className="text-gray-600">{partner.description}</p>
                  <p className="text-sm text-gray-500">Partner since {partner.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export { PaintBrandsShowcase, PartnersShowcase };