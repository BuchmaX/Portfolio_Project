import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-medium text-lg tracking-tight text-black dark:text-white"
          >
            Nwagwu Onyebuchi
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
          >
            <span>Copyright© 2025. All rights reserved. </span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {['Privacy', 'Terms', 'Credits'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </footer>
  );
}