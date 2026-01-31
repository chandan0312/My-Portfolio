import { motion } from 'motion/react';
import { GraduationCap, Award, Globe } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Post Graduate Diploma in Computer Applications (PGDCA)',
      institution: 'IISDT',
      year: '2024/25',
      type: 'education',
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'Vinoba Bhave University, Jharkhand',
      year: '2020',
      type: 'education',
    },
    {
      degree: 'Intermediate in Science',
      institution: 'Delhi Public School, Ranchi',
      year: '2014/15',
      type: 'education',
    },
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner Certification Basic', color: 'from-orange-500 to-red-500', lightColor: 'from-sky-500 to-blue-600' },
    { name: 'Basic Python Programming', color: 'from-red-500 to-orange-600', lightColor: 'from-blue-500 to-sky-500' },
    { name: 'GitHub Foundation Certification', color: 'from-orange-600 to-red-600', lightColor: 'from-sky-600 to-blue-500' },
    { name: 'GitHub Action Certification', color: 'from-red-600 to-orange-500', lightColor: 'from-blue-600 to-sky-600' },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-500/5 dark:bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 dark:bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & <span className="text-sky-600 dark:text-orange-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-br from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-orange-500/50 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <div className="absolute top-4 right-4 w-12 h-12 bg-sky-500/10 dark:bg-orange-500/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-sky-600 dark:text-orange-500" size={20} />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white pr-12 group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sky-600 dark:text-orange-500 mb-1 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-br from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 rounded-lg">
                <Award className="text-white" size={24} />
              </div>
              Certifications
            </motion.h3>
            
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-orange-500/50 transition-all hover:-translate-y-1 overflow-hidden shadow-lg"
                >
                  {/* Gradient line on left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cert.lightColor} dark:${cert.color}`} />
                  
                  <div className="flex items-start gap-3 pl-4">
                    <div className={`w-2 h-2 bg-gradient-to-r ${cert.lightColor} dark:${cert.color} rounded-full mt-2 flex-shrink-0`} />
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors">
                      {cert.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 rounded-xl p-6 text-white shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
              
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Globe size={20} />
                  Languages
                </h4>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="font-semibold">English</p>
                    <p className="text-sm text-white/80">Speaking / Reading / Writing</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="font-semibold">Hindi</p>
                    <p className="text-sm text-white/80">Native Language</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}