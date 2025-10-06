'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Smartphone } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Application SaaS Construction',
      description: 'Application complète de gestion de projets de construction avec architecture serverless et interface moderne.',
      image: '/project-construction.jpg',
      technologies: ['React', 'TypeScript', 'AWS Lambda', 'S3', 'Serverless'],
      features: ['Gestion de projets', 'Suivi en temps réel', 'CI/CD Pipeline', 'Architecture MVC'],
      icon: Cloud,
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Analyse de Sentiments Twitter',
      description: 'Solution d\'analyse de sentiments sur des tweets avec machine learning et visualisation des données.',
      image: '/project-ml.jpg',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
      features: ['Traitement JSON', 'Modèles ML', 'Visualisation', 'Rapports détaillés'],
      icon: Code,
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Gestion Utilisateurs Full Stack',
      description: 'Application complète de gestion des utilisateurs avec authentification JWT et interface responsive.',
      image: '/project-users.jpg',
      technologies: ['React', 'Spring Boot', 'MySQL', 'JWT', 'RESTful API'],
      features: ['Authentification', 'Gestion profils', 'Contrôle d\'accès', 'Interface responsive'],
      icon: Database,
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Portfolio Personnel',
      description: 'Portfolio moderne et responsive développé avec Next.js, TypeScript et animations fluides.',
      image: '/project-portfolio.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Design moderne', 'Animations', 'Responsive', 'SEO optimisé'],
      icon: Smartphone,
      color: 'from-gray-600 to-gray-800'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets les plus représentatifs, 
            allant du développement web aux solutions de machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Fonctionnalités
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Intéressé par mon travail ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-moi pour discuter de collaboration ou en savoir plus sur mes projets.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                Me contacter
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
