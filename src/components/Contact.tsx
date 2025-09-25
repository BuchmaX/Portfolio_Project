import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, Download } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-black dark:text-white">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your vision to life? I'm currently available for 
              freelance projects and full-time opportunities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#00e6e6' }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-black font-medium rounded-full transition-all duration-200"
            >
              <Mail className="mr-2 w-5 h-5" />
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-full transition-all duration-200"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </motion.button>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Or reach out directly at{' '}
              <a 
                href="nwagwuonyebuchis@gmail.com" 
                className="text-cyan-500 hover:text-cyan-400 transition-colors duration-200"
              >
                nwagwuonyebuchis@gmail.com
              </a>
            </p>

          {/* Social links */}
<div className="flex items-center justify-center gap-6">
  {[
    { icon: Linkedin, href: "https://www.linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/BuchmaX", label: "GitHub" },
    { icon: Mail, href: "mailto:nwagwuonyebuchis@gmail.com", label: "Email" },
  ].map(({ icon: Icon, href, label }) => (
    <motion.a
      key={label}
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-200 shadow-sm hover:shadow-md"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  ))}
</div>
</motion.div>
</motion.div>


        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-emerald-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
}