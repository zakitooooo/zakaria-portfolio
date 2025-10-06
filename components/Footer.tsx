'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zakaria-zaroual-4626b526a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zakaria.zaroual@utt.fr', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ZZ</span>
                </div>
                <h3 className="text-2xl font-bold">Zakaria Zaroual</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Étudiant en informatique à l'UTT, passionné par le développement full stack 
                et à la recherche d'un stage de fin d'études en tant qu'ingénieur.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium">Email:</span> zakaria.zaroual@utt.fr
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Téléphone:</span> +33 6 98 32 16 09
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Localisation:</span> Troyes, France
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
              
              {/* Resume Download */}
              <div className="mt-6">
                <motion.a
                  href="/cv-zakaria-zaroual.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <span>Télécharger CV</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-center md:text-left"
              >
                © {currentYear} Zakaria Zaroual. Tous droits réservés.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 text-center md:text-right flex items-center space-x-1"
              >
                <span>Fait avec</span>
                <Heart size={16} className="text-red-500 fill-current" />
                <span>par Zakaria Zaroual</span>
              </motion.p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
