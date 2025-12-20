import { motion } from 'motion/react';
import { GraduationCap, Award, Globe } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Vinoba Bhave University, Jharkhand',
      year: '14/10/2020',
      type: 'education',
    },
    {
      degree: 'Intermediate in Science',
      institution: 'Delhi Public School, Ranchi',
      year: '2014/15',
      type: 'education',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Saraswati Vidya Mandir, Ranchi',
      year: '5/2013',
      type: 'education',
    },
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner Certification Basic', color: 'from-orange-500 to-red-500' },
    { name: 'Basic Python Programming', color: 'from-red-500 to-orange-600' },
    { name: 'GitHub Foundation Certification', color: 'from-orange-600 to-red-600' },
    { name: 'GitHub Action Certification', color: 'from-red-600 to-orange-500' },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education & <span className="text-orange-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-white flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
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
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-orange-500" size={20} />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2 text-white pr-12 group-hover:text-orange-500 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-orange-500 mb-1 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.year}</p>
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
              className="text-2xl font-bold mb-8 text-white flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
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
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-orange-500/50 transition-all hover:-translate-y-1 overflow-hidden"
                >
                  {/* Gradient line on left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cert.color}`} />
                  
                  <div className="flex items-start gap-3 pl-4">
                    <div className={`w-2 h-2 bg-gradient-to-r ${cert.color} rounded-full mt-2 flex-shrink-0`} />
                    <p className="font-semibold text-white group-hover:text-orange-500 transition-colors">
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
              className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-xl overflow-hidden"
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
                    <p className="text-sm text-orange-100">Speaking / Reading / Writing</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="font-semibold">Hindi</p>
                    <p className="text-sm text-orange-100">Native Language</p>
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
