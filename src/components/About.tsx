import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UX/UI Design',
    description: 'User research, wireframing, prototyping, and visual design'
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, and modern web technologies'
  },
  {
    icon: Zap,
    title: 'Design Systems',
    description: 'Creating scalable component libraries and design tokens'
  },
  {
    icon: Users,
    title: 'Product Strategy',
    description: 'User-centered design thinking and product optimization'
  }
];

const companies = [
  'Apple', 'Google', 'Stripe', 'Airbnb', 'Spotify', 'Tesla'
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-black dark:text-white">
              Bridging Design
              <br />
              & Technology
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a creative Product designer with 3+ years of experience crafting 
                exceptional digital experiences for startups and Fortune 500 companies.
              </p>
              <p>
                My unique background combines deep UX design expertise with hands-on 
                development skills, allowing me to bridge the gap between design vision 
                and technical implementation.
              </p>
              <p>
                I believe that the best digital products emerge from the intersection 
                of user empathy, design thinking, and technical innovation.
              </p>
            </div>

            {/* Companies */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Trusted by companies
              </p>

            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="font-medium text-black dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Happy Clients' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-light text-black dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}