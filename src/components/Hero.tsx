import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react'


const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Web Developer', 'Frontend Developer', 'React Developer', 'Full Stack Developer']

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== texts[currentIndex]) {
          setCurrentText(texts[currentIndex].substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        } else {
          setCurrentText(texts[currentIndex].substring(0, currentText.length - 1))
        }
      }
    }, isDeleting ? 100 : 150)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
  

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-blue-400 font-medium"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello,
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* First Name with Letter Animation */}
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {["S", "u", "d", "h", "a", "n", "s", "h", "u"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-gradient inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    rotateY: [0, 360, 0]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1,
                    rotateY: {
                      duration: 2,
                      delay: 0.8 + index * 0.1,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    display: "inline-block",
                    marginRight: index === 8 ? "0" : "0.05em"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <br />
            {/* Last Name with Slide Animation */}
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {["S", "h", "a", "r", "m", "a"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-white inline-block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    color: ["#ffffff", "#a855f7", "#ffffff"]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.3 + index * 0.1,
                    color: {
                      duration: 3,
                      delay: 2 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    color: "#3b82f6",
                    textShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    display: "inline-block",
                    marginRight: index === 5 ? "0" : "0.05em"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-12 md:h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-baseline">
              <span className="mr-2">I'm a </span>
              <span className="text-purple-400 font-semibold">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I create beautiful, responsive, and user-friendly web applications 
            with modern technologies and best practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button
              className="btn btn-primary px-8 py-4 text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-outline px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Mail, href: 'mailto:sudhan98216@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Background boxes will be visible here */}
    </section>
  )
}

export default Hero