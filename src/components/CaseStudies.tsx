import { motion } from 'motion/react';
import { ArrowUpRight, Smartphone, Monitor, Tablet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import healthcareImage from "figma:asset/38bda0bdfa3532894ee862978a573e6d2e4488bc.png";
import movieTicketingImage from "figma:asset/ada5a94d33885da96bec8767c0875d8b0c70bda5.png";

const caseStudies = [
  {
    id: 1,
    title: 'Healthcare Consultancy Website',
    description: 'Modern website redesign for a healthcare consultancy firm, focusing on accessibility and user trust',
    category: 'Website Design',
    year: '2024',
    image: healthcareImage,
    tags: ['Web Design', 'Healthcare', 'Accessibility'],
    devices: ['desktop', 'mobile']
  },
  {
    id: 2,
    title: 'Movie Ticketing Application',
    description: 'Comprehensive mobile app design for seamless movie ticket booking with intuitive user flows and modern interface',
    category: 'Mobile App',
    year: '2024',
    image: movieTicketingImage,
    tags: ['UI/UX Design', 'Mobile', 'Entertainment'],
    devices: ['mobile']
  },
  {
    id: 3,
    title: 'Design System & Interface',
    description: 'Comprehensive design system and interface components for a modern tech startup',
    category: 'Design System',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1ODQ0MTg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Design System', 'Components', 'Branding'],
    devices: ['desktop', 'mobile', 'tablet']
  }
];

const DeviceIcon = ({ device }: { device: string }) => {
  const iconMap = {
    mobile: Smartphone,
    desktop: Monitor,
    tablet: Tablet
  };
  const Icon = iconMap[device as keyof typeof iconMap];
  return <Icon className="w-4 h-4" />;
};

export function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-black dark:text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated collection of projects that showcase innovation, 
            user-centered design, and technical excellence
          </p>
        </motion.div>

        {/* Case studies - single column layout */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                {/* Header with category and devices */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{study.category}</span>
                  <span>•</span>
                  <span>{study.year}</span>
                  <div className="flex items-center gap-2 ml-auto">
                    {study.devices.map((device) => (
                      <DeviceIcon key={device} device={device} />
                    ))}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl lg:text-5xl font-light tracking-tight text-black dark:text-white">
                  {study.title}
                </h3>
                
                {/* Image directly under title */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl"
                >
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>

                {/* Description and content */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="group/btn inline-flex items-center text-cyan-500 hover:text-cyan-400 font-medium transition-colors duration-200"
                  >
                    View Case Study
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all work CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full transition-all duration-200"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}