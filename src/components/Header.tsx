import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from './DarkModeProvider';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-medium text-lg tracking-tight"
          >
            Nwagwu Onyebuchi
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-sm tracking-wide text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                whileHover="hover"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-cyan-400"
                  initial={{ width: 0 }}
                  variants={{
                    hover: { width: '100%' }
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Dark mode toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}