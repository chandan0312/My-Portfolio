import { motion } from 'motion/react';
import { Server, Container, GitBranch, Code, Terminal, Cloud } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Cloud,
      category: 'DevOps & CI/CD',
      skills: ['DevOps CI/CD', 'Jenkins', 'Git/GitHub/GitLab', 'Azure Release Pipeline', 'GitHub Actions'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Container,
      category: 'Containerization & Orchestration',
      skills: ['Docker', 'Kubernetes', 'Container Registry', 'Helm'],
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: Server,
      category: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Linux'],
      color: 'from-orange-600 to-red-600',
    },
    {
      icon: Code,
      category: 'Infrastructure as Code',
      skills: ['Terraform', 'Ansible', 'CloudFormation'],
      color: 'from-red-600 to-orange-500',
    },
    {
      icon: Terminal,
      category: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'PowerShell'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: GitBranch,
      category: 'Development & Lifecycle',
      skills: ['Problem Solving', 'Software Development Lifecycle', 'Agile Methodologies'],
      color: 'from-red-500 to-orange-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise in modern DevOps tools and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-orange-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
