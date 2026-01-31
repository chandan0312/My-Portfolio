import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">Chandan</span>
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 bg-clip-text text-transparent"> Kumar</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                DevOps Engineer specializing in cloud infrastructure, containerization, and CI/CD automation.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/chandan0312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 dark:hover:from-orange-500 dark:hover:to-red-600 transition-all hover:scale-110"
                >
                  <Github size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandan-kumar-6395a8189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 dark:hover:from-orange-500 dark:hover:to-red-600 transition-all hover:scale-110"
                >
                  <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:chndnkumar666@gmail.com"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 dark:hover:from-orange-500 dark:hover:to-red-600 transition-all hover:scale-110"
                >
                  <Mail size={20} className="text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-lg text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4 text-lg text-gray-900 dark:text-white">Contact Info</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="mailto:chndnkumar666@gmail.com" className="hover:text-sky-600 dark:hover:text-orange-500 transition-colors">
                    chndnkumar666@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919934457318" className="hover:text-sky-600 dark:hover:text-orange-500 transition-colors">
                    +91-9934457318
                  </a>
                </li>
                <li>India</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                © {currentYear} Chandan Kumar. Made with 
                <Heart size={14} className="text-red-500 fill-red-500" /> 
                All rights reserved.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built with <span className="text-sky-600 dark:text-orange-500">React</span>, <span className="text-sky-600 dark:text-orange-500">Tailwind CSS</span>, and <span className="text-sky-600 dark:text-orange-500">Motion</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}