import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import darkBgImage from '../assets/darkimage.png';
import lightBgImage from '../assets/LightBgImage.png';
import '../all.css';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark mode background image */}
        {/* Light mode background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-0 blur-sm"
          style={{ backgroundImage: `url(${lightBgImage}` }}
        />
        
        {/* Dark mode background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100"
          style={{ backgroundImage: `url(${darkBgImage})` }}
        />
        

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center p-[8px] mx-[30px] my-[0px]">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          

          {/* Main headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-left"
            >
              <span className="text-white dark:bg-gradient-to-r font-bold dark:from-cyan-400 dark:to-emerald-400 dark:bg-clip-text dark:text-transparent">
                Product
              </span>
              <br />
              <span className="bg-gradient-to-r font-semibold from-cyan-400 to-emerald-400 bg-clip-text text-transparent dark:text-white dark:bg-none">
                Designer
              </span>
            </motion.h1>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center mt-10 mb-6 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-sm font-medium w-fit justify-end"
              style={{ justifyContent: 'flex-end' }}
            >
              Available for new opportunities
            </motion.div>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl w-3/4 text-left text-white dark:text-gray-300 max-w-3xl leading-relaxed"
            >
              Crafting exceptional digital experiences through innovative UX design 
              and cutting-edge technology
            </motion.p>
          </div>

          {/* CTA Buttons */}
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-end gap-4 pt-12"
            >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#00e6e6' }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-black font-medium rounded-full transition-all duration-200"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-white dark:text-gray-300 hover:bg-white hover:text-black active:bg-white active:text-black dark:hover:bg-gray-800 dark:hover:text-gray-300 dark:active:bg-gray-800 dark:active:text-gray-300 font-medium rounded-full transition-all duration-200"
            >
              Get In Touch
            </motion.button>
            </motion.div>

           
        </motion.div>

      </div>
    </section>
  );
}