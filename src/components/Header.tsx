import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#hero')}
          >
            Sudhanshu
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-white/80 hover:text-white transition-colors duration-300 cursor-pointer group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="relative z-10 font-medium">{item.name}</span>
                
                {/* Main Underline */}
                <motion.div
                  className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ 
                    scaleX: 1, 
                    opacity: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ originX: 0 }}
                />
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 rounded-full blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ 
                    scaleX: 1.2, 
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut", delay: 0.1 }
                  }}
                  style={{ originX: 0 }}
                />
                
                {/* Sparkle Effect */}
                <motion.div
                  className="absolute left-0 -bottom-1 w-1 h-1 bg-white rounded-full"
                  initial={{ x: 0, opacity: 0, scale: 0 }}
                  whileHover={{
                    x: "100%",
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 }
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative text-white/80 hover:text-white transition-colors duration-300 cursor-pointer group py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="relative z-10 font-medium">{item.name}</span>
                    
                    {/* Mobile Underline */}
                    <motion.div
                      className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ 
                        width: "100%", 
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    />
                    
                    {/* Mobile Glow */}
                    <motion.div
                      className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-sm"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ 
                        width: "110%", 
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut", delay: 0.1 }
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header