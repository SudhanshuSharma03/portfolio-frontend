import { motion } from 'framer-motion'
import { Code, Lightbulb, Rocket, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I write maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'I think outside the box to solve complex problems with innovative approaches.'
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'I optimize applications for speed and performance to ensure the best user experience.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'I collaborate effectively with teams and communicate clearly with stakeholders.'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex justify-center">
              {/* Profile Image */}
              <motion.div
                className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://via.placeholder.com/320" alt="Sudhanshu Sharma" className="w-full h-full object-cover" />
              </motion.div>

              {/* Background boxes will be visible here */}
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Web Developer
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Sudhanshu Sharma, a dedicated web developer with a passion for creating 
              exceptional digital experiences. I specialize in modern web technologies and love 
              turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in React, TypeScript, and modern web development practices, I build 
              responsive and user-friendly applications that not only look great but also perform 
              exceptionally well.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400">Projects Done</div>
              </motion.div>
            </div>

            <motion.button
              className="btn btn-primary mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-150"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              animate={{
                scale: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 0px 0px rgba(102, 126, 234, 0)',
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                animate={{
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <feature.icon size={28} className="text-white" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About