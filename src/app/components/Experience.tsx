import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Tata Consultancy Services (TCS)',
      period: 'March 2023 - Present',
      location: 'India',
      description: 'Working on multiple Technical Debt projects which we are responsible for containerize and orchestrate respectively',
      responsibilities: [
        'Working with Docker and Kubernetes, we are using Docker for containerization and orchestration respectively',
        'Using different DevOps tools for Complete CI/CD pipeline for end to end CI/CD pipelines for different applications',
        'I have worked with different DevOps tools like GitHub, GitLab, Bitbucket, Jenkins, Azure Release Pipeline, Docker, and Kubernetes',
      ],
    },
    {
      title: 'Systems Engineer',
      company: 'Tata Consultancy Services (TCS)',
      period: 'FEB 2022 - FEB 2023',
      location: 'India',
      description: 'Application Migration/DevOps and web development/building those migrations to support applications',
      responsibilities: [
        'Used DevOps tools like Jenkins, GitHub Actions, Azure, AWS, and GitHub',
        'Performed code analysis and generality of AWS services for build release and test',
        'Used Terraform for infrastructure automation and Ansible to write Playbooks, Jenkins, Docker, and Kubernetes',
        'Used Azure Deployment and used containerization of applications and features',
      ],
    },
    {
      title: 'System Engineer Trainee',
      company: 'Tata Consultancy Services (TCS)',
      period: 'Jan 2021 - Jan 2022',
      location: 'India',
      description: 'Training period focused on learning various DevOps tools and cloud platforms',
      responsibilities: [
        'Did some good tasks in GitHub, Azure, IIS',
        'Learned AWS Foundation and basics of cloud computing',
        'Got IT industry experience and understanding of DevOps practices',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/5 dark:bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-sky-600 dark:text-orange-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in DevOps and cloud engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-sky-600 dark:from-orange-500 dark:via-red-500 dark:to-orange-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'
                }`}
              >
                <div className="ml-20 md:ml-0">
                  {/* Timeline dot - pulsing effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 dark:from-orange-500 dark:to-red-600 border-4 border-white dark:border-gray-900 shadow-lg shadow-sky-500/50 dark:shadow-orange-500/50 z-10"
                  />

                  {/* Timeline icon */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-12 h-12 -ml-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full shadow-lg flex items-center justify-center border-2 border-sky-500 dark:border-orange-500 z-10">
                    <Briefcase className="w-6 h-6 text-sky-600 dark:text-orange-500" />
                  </div>

                  <div className={`group bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-orange-500/50 transition-all hover:-translate-y-1 shadow-lg ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-orange-500 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sky-600 dark:text-orange-500 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-sky-600 dark:text-orange-500 mt-1 flex-shrink-0">▸</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}