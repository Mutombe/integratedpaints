// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: '/projects/office.jpg',
      description: 'Complete interior and exterior painting for a 5-story office building',
      location: 'Harare CBD',
    },
    {
      id: 2,
      title: 'Luxury Villa Renovation',
      category: 'residential',
      image: '/projects/villa.jpg',
      description: 'Full renovation and painting of a luxury residential property',
      location: 'Highlands',
    },
    // Add more projects as needed
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl">Showcasing our finest work across Zimbabwe</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="aspect-video bg-gray-200">
      {/* Replace with actual image */}
      <div className="w-full h-full bg-gray-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{project.location}</span>
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
          {project.category}
        </span>
      </div>
    </div>
  </motion.div>
);

export default Projects;