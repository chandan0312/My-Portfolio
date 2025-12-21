import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, Code } from 'lucide-react';
import profileImage from '../../assets/c49d89cc3ba9dbd5284d66f0815ddfdd2cc8d3f6.png';
import { generateCV } from '../utils/generateCV';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-black dark:to-gray-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <span className="text-lg text-gray-600 dark:text-gray-400">Hello, I'm</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="text-gray-900 dark:text-white">Chandan</span>
                <br />
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:via-red-500 dark:to-orange-600 bg-clip-text text-transparent">
                  Kumar
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  DevOps Engineer
                </h2>
                <div className="flex items-center gap-2 text-sky-600 dark:text-orange-500">
                  <Code size={20} />
                  <span className="text-sm font-mono">Cloud • CI/CD • Kubernetes</span>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
              >
                Strong, skilled DevOps engineer with <span className="text-sky-600 dark:text-orange-500 font-semibold">4.9+ years</span> of experience 
                developing applications via automated pipelines. Deep expertise in Docker, Kubernetes, Azure, and AWS cloud platforms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 text-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-sky-500/50 dark:hover:shadow-orange-500/50 hover:scale-105"
                >
                  <span className="relative z-10">Let's Talk</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-red-600 dark:to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                
                <button 
                  onClick={generateCV}
                  className="px-8 py-3 bg-transparent text-gray-700 dark:text-gray-300 border-2 border-sky-500 dark:border-orange-500 rounded-lg hover:bg-sky-50 dark:hover:bg-orange-500/10 transition-all flex items-center gap-2 hover:scale-105"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://github.com/chandan0312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-orange-500 transition-all hover:scale-110"
                >
                  <Github size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/chandan-kumar-6395a8189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-orange-500 transition-all hover:scale-110"
                >
                  <Linkedin size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors" />
                </a>
                
                <a
                  href="mailto:chndnkumar666@gmail.com"
                  className="group p-3 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-orange-500 transition-all hover:scale-110"
                >
                  <Mail size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Glowing circle background */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 dark:from-orange-500 dark:via-red-500 dark:to-orange-600 rounded-full blur-2xl opacity-50"
                />
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-500 dark:border-orange-500 shadow-2xl shadow-sky-500/50 dark:shadow-orange-500/50 bg-white dark:bg-transparent">
                  <img
                    src={profileImage}
                    alt="Chandan Kumar"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>

                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/30 dark:border-orange-500/30"
                  style={{ padding: '10px' }}
                />

                {/* Decorative dots */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-sky-500 dark:bg-orange-500 rounded-full opacity-50 blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 dark:bg-red-500 rounded-full opacity-50 blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sky-600 dark:text-orange-500"
      >
        <div className="w-6 h-10 border-2 border-sky-500 dark:border-orange-500 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-sky-500 dark:bg-orange-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
