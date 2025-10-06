'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Globe, Users, Award, Star } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'React', level: 90, years: '2+' },
        { name: 'TypeScript', level: 85, years: '2+' },
        { name: 'HTML5', level: 95, years: '3+' },
        { name: 'CSS3', level: 90, years: '3+' },
        { name: 'Bootstrap', level: 80, years: '2+' },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Java', level: 85, years: '3+' },
        { name: 'Spring Boot', level: 80, years: '2+' },
        { name: 'PHP', level: 75, years: '2+' },
        { name: 'MySQL', level: 85, years: '3+' },
        { name: 'PDO', level: 80, years: '2+' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'AWS Lambda', level: 75, years: '1+' },
        { name: 'AWS S3', level: 80, years: '1+' },
        { name: 'Serverless', level: 70, years: '1+' },
        { name: 'CI/CD', level: 75, years: '1+' },
        { name: 'Docker', level: 60, years: '1' },
      ]
    },
    {
      title: 'Data Science',
      icon: Globe,
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Python', level: 85, years: '2+' },
        { name: 'Pandas', level: 80, years: '2+' },
        { name: 'NumPy', level: 75, years: '2+' },
        { name: 'Scikit-learn', level: 70, years: '1+' },
        { name: 'Machine Learning', level: 70, years: '1+' },
      ]
    }
  ]

  const methodologies = [
    { name: 'MVC Architecture', level: 85 },
    { name: 'Scrum', level: 80 },
    { name: 'Gestion de Projets', level: 75 },
    { name: 'Travail en Équipe', level: 90 },
  ]

  const languages = [
    { name: 'Français', level: 100, flag: '🇫🇷' },
    { name: 'Anglais', level: 85, flag: '🇬🇧' },
    { name: 'Arabe', level: 100, flag: '🇲🇦' },
    { name: 'Italien', level: 60, flag: '🇮🇹' },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Un aperçu de mes compétences techniques et générales, 
            acquises au fil de mes expériences académiques et professionnelles.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.years}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-black dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Méthodologies
              </h3>
            </div>
            <div className="space-y-3">
              {methodologies.map((method, index) => (
                <div key={method.name} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    {method.name}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${
                          i < Math.floor(method.level / 20)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Langues
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {lang.level}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    PSPO I
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Professional Scrum Product Owner™ I
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
