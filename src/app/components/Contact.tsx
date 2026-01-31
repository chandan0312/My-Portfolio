import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin, Download, Send } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'chndnkumar666@gmail.com',
      href: 'mailto:chndnkumar666@gmail.com',
      color: 'from-orange-500 to-red-500',
      lightColor: 'from-sky-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9934457318',
      href: 'tel:+919934457318',
      color: 'from-red-500 to-orange-600',
      lightColor: 'from-blue-500 to-sky-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'chandan-kumar-6395a8189',
      href: 'https://www.linkedin.com/in/chandan-kumar-6395a8189',
      color: 'from-orange-600 to-red-600',
      lightColor: 'from-sky-600 to-blue-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#',
      color: 'from-red-600 to-orange-500',
      lightColor: 'from-blue-600 to-sky-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-sky-600 dark:text-orange-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-orange-500/50 transition-all hover:-translate-y-2 overflow-hidden shadow-lg"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.lightColor} dark:${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${item.lightColor} dark:${item.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl shadow-sky-500/20 dark:shadow-orange-500/20 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:chndnkumar666@gmail.com"
                  className="group px-8 py-3 bg-white text-sky-600 dark:text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}