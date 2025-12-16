import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'HTML5', level: 95, color: '#E34F26' },
        { name: 'CSS3', level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', level: 88, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'Express.js', level: 78, color: '#000000' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'PostgreSQL', level: 70, color: '#336791' },
        { name: 'REST APIs', level: 85, color: '#FF6B6B' },
        { name: 'GraphQL', level: 65, color: '#E10098' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 70, color: '#2496ED' },
        { name: 'AWS', level: 65, color: '#FF9900' },
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Webpack', level: 75, color: '#8DD6F9' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` 
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Love</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL',
              'Tailwind CSS', 'Framer Motion', 'GraphQL', 'Docker', 'AWS', 'Git'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)',
                  y: -5
                }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Background boxes will be visible here */}
      </div>
    </section>
  )
}

export default Skills