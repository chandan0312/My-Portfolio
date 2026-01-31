import { motion } from 'motion/react';
import { Code, Server, GitBranch, Award, Zap, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Server,
      value: '5+',
      label: 'Years Experience',
      color: 'from-orange-500 to-red-500',
      lightColor: 'from-sky-500 to-blue-600',
    },
    {
      icon: GitBranch,
      value: '50+',
      label: 'Projects Completed',
      color: 'from-red-500 to-orange-600',
      lightColor: 'from-blue-500 to-sky-500',
    },
    {
      icon: Code,
      value: '15+',
      label: 'Technologies',
      color: 'from-orange-600 to-red-600',
      lightColor: 'from-sky-600 to-blue-500',
    },
    {
      icon: Award,
      value: '4+',
      label: 'Certifications',
      color: 'from-red-600 to-orange-500',
      lightColor: 'from-blue-600 to-sky-600',
    },
  ];

  const expertise = [
    { icon: Zap, text: 'CI/CD Pipeline Automation' },
    { icon: Server, text: 'Cloud Infrastructure (AWS & Azure)' },
    { icon: Code, text: 'Container Orchestration (K8s)' },
    { icon: Users, text: 'DevOps Best Practices' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-sky-600 dark:text-orange-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-gray-200 dark:border-slate-700 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Passionate <span className="text-sky-600 dark:text-orange-500">DevOps Engineer</span>
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I am a <span className="text-sky-600 dark:text-orange-500 font-semibold">strong, skilled DevOps engineer</span> with 5+ years of experience 
                developing, deploying, and managing applications using automated CI/CD pipelines across multiple environments. My expertise lies in 
                containerization, orchestration, and cloud infrastructure management, enabling scalable, reliable, and efficient application delivery.
              </p>
              <p>
                With deep knowledge of <span className="text-sky-600 dark:text-orange-500">Docker and Kubernetes</span> concepts, I have successfully 
                implemented CI/CD pipelines using tools like Jenkins, GitLab, GitHub Actions, Azure Release Pipelines, and more. 
                I have extensive hands-on experience with both <span className="text-sky-600 dark:text-orange-500">Azure and AWS</span> cloud platforms.
              </p>
              <p>
                Currently working at <span className="text-sky-600 dark:text-orange-500 font-semibold">Tata Consultancy Services (TCS)</span> as a 
                Systems Engineer, I focus on solving technical debt in projects, where I take responsibility for containerization 
                and orchestration. I have worked with various DevOps tools to build and implement end-to-end CI/CD pipelines for 
                multiple applications.
              </p>
            </div>

            {/* Expertise badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-sky-50 dark:bg-slate-800/80 rounded-lg p-4 border border-sky-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-orange-500/50 transition-all"
                >
                  <div className="p-2 bg-gradient-to-br from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 rounded-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 dark:text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-orange-500/50 transition-all overflow-hidden shadow-lg"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.lightColor} dark:${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${item.lightColor} dark:${item.color} rounded-full mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${item.lightColor} dark:${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}