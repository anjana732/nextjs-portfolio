'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in both frontend and backend technologies with modern frameworks',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in designing efficient and scalable database architectures',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Deep understanding of modern web standards and best practices',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices and platforms',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with strong academic foundation and professional experience. 
            I completed my BCA and MCA with excellent academic performance and worked for Fristine Infotech, 
            where I contribute to innovative software solutions. I love turning complex problems into simple, 
            beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                1
              </motion.div>
              <p className="text-slate-400">Years Experience</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                10+
              </motion.div>
              <p className="text-slate-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                100%
              </motion.div>
              <p className="text-slate-400">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;