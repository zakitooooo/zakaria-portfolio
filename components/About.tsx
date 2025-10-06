"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Briefcase,
  Code,
  Globe,
  Users,
  Award,
} from "lucide-react";

const email = process.env.NEXT_PUBLIC_EMAIL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: GraduationCap, label: "Formation", value: "UTT - Ingénieur" },
    { icon: Briefcase, label: "Expérience", value: "6 mois" },
    { icon: Code, label: "Projets", value: "10+" },
    { icon: Globe, label: "Langues", value: "4" },
  ];

  const achievements = [
    {
      icon: Award,
      title: "PSPO I",
      description: "Professional Scrum Product Owner™ I",
      color: "bg-blue-500",
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "Développement complet d&apos;applications",
      color: "bg-green-500",
    },
    {
      icon: Globe,
      title: "International",
      description: "Expérience au Vietnam (Polaris Edge)",
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et gestion de projets",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionné par le développement et l&apos;innovation technologique,
            je suis actuellement étudiant en dernière année d&apos;ingénierie
            informatique à l&apos;UTT.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 dark:bg-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Mon parcours
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-black dark:bg-white rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Université de Technologie de Troyes (UTT)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Diplôme d&apos;Ingénieur Informatique et Systèmes
                      d&apos;Information (2023-2026)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-black dark:bg-white rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      École Supérieure de Technologie, Fikh Ben Salah
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      DUT Génie Informatique (2021-2023)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Objectif professionnel
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                À la recherche d&apos;un{" "}
                <strong>stage de fin d&apos;études</strong> en tant
                qu&apos;ingénieur pour une durée de <strong>six mois</strong>, à
                partir de <strong>février 2026</strong>. Je souhaite mettre à
                profit mes compétences techniques et mon expérience
                internationale pour contribuer à des projets innovants.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats and Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-slate-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <stat.icon className="w-8 h-8 text-black dark:text-white mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Réalisations clés
              </h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  className="flex items-center space-x-4 bg-white dark:bg-slate-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-white dark:text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à collaborer&nbsp;?</h3>
          <p className="text-lg mb-6 opacity-90">
            Contactez-moi pour discuter de votre projet ou de votre stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33698321609"
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              +33 6 98 32 16 09
            </a>
            <a
              href={`mailto:${email}`}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors duration-200 font-medium"
            >
              {email}
            </a>
          </div>
          <div className="mt-4">
            <p>
              Site web&nbsp;:{" "}
              <a href={baseUrl} className="underline">
                {baseUrl}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
