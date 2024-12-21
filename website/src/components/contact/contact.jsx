// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ArrowRight } from 'lucide-react';

const ContactHeroSection = () => {
  // Define animation variants for staggered animations of content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        // This will make child elements animate in sequence
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="relative min-h-[400px] w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/2.jpg')`,
        }}
      />
      
      {/* Gradient Overlay - Creates a professional, approachable atmosphere */}

      <div className="absolute inset-0 bg-blue-600/70" />
      
      {/* Glass Effect Layer - Adds sophistication and depth */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
      
      {/* Content Container */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl"
            variants={childVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Get in touch with us for your painting and construction needs
            </p>
            
            {/* Additional engagement elements */}
            <div className="flex items-center space-x-4 text-white/90">
              <ArrowRight className="w-5 h-5" />
              <p className="text-lg">
                We typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+263 77 123 4567', '+263 71 987 6543'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@integratedpainters.co.zw', 'buildmarque@gmail.com'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: [' 117 Enterprise Road, Highlands', 'Harare, Zimbabwe'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 1:00 PM'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
    <ContactHeroSection />

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="industrial">Industrial Painting</option>
                    <option value="construction">Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              <MapContainer
                center={[-17.8323402, 31.023803,13]} // Harare coordinates
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[-17.8323402, 31.023803,13]}>
                  <Popup>
                    Integrated Painters / Buildmarque <br />
                    117 Enterprise Road, Highlands, Harare,
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;