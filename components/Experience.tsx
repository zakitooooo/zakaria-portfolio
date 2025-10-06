'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, Building, Code, Cloud, Database, Users } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Polaris Edge',
      location: 'Ho Chi Minh, Vietnam',
      position: 'Développeur Full Stack',
      duration: 'Juillet 2024 – Janvier 2025',
      description: 'Développement d\'une application SaaS pour la gestion de projets de construction suivant toutes les étapes de A à Z.',
      technologies: ['React', 'TypeScript', 'AWS Lambda', 'S3', 'Serverless'],
      achievements: [
        'Implémentation de fonctionnalités innovantes permettant le suivi intégral des projets de construction',
        'Conception et optimisation des pipelines CI/CD pour l\'intégration continue',
        'Amélioration de la structure MVC pour une meilleure maintenabilité'
      ],
      icon: Building,
      color: 'from-gray-600 to-gray-800'
    }
  ]

  const projects = [
    {
      title: 'Analyse des Tweets et Modèles ML',
      duration: 'Mars 2025 – Avril 2025',
      description: 'Développement d\'une solution d\'analyse de sentiments sur des tweets avec Python et machine learning.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
      achievements: [
        'Traitement de données au format JSON et préparation pour l\'entraînement de modèles',
        'Comparaison de différents algorithmes de ML pour déterminer le modèle le plus adapté',
        'Visualisation des résultats et création de rapports détaillés'
      ],
      icon: Code,
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Application de Gestion des Utilisateurs',
      duration: 'Novembre 2024 – Janvier 2025',
      description: 'Développement d\'une application complète de gestion des utilisateurs avec authentification JWT.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'JWT', 'RESTful API'],
      achievements: [
        'Backend en Spring Boot avec API RESTful et base de données MySQL',
        'Frontend en React avec gestion d\'état avancée et interface utilisateur responsive',
        'Fonctionnalités : inscription, connexion, gestion des profils, contrôle d\'accès basé sur les rôles'
      ],
      icon: Users,
      color: 'from-gray-600 to-gray-800'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Expérience & Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours professionnel et mes projets techniques les plus marquants.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Expérience Professionnelle
          </h3>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h4>
                      <p className="text-lg font-semibold text-black dark:text-white">
                        {exp.position}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies utilisées
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Réalisations clés
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Projets Techniques
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Réalisations
                  </h5>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
