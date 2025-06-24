'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Briefcase, MapPin } from 'lucide-react';

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const journeySteps = [
    {
      year: '2018-2021',
      title: 'Bachelor of Computer Applications (BCA) | 79%',
      description: 'Started my journey in computer science, building strong fundamentals in programming, mathematics, and software development.',
      icon: GraduationCap,
      status: 'completed',
    },
    {
      year: '2022-2024',
      title: 'Master of Computer Applications (MCA) | 8.78 CGPA',
      description: 'Advanced my knowledge in software engineering, database systems, and modern development practices.',
      icon: BookOpen,
      status: 'completed',
    },
    {
      year: '2024-Present',
      title: 'Software Developer at Fristine Infotech',
      description: 'Currently working on innovative software solutions, contributing to real-world projects and growing professionally.',
      icon: Briefcase,
      status: 'current',
    },
    {
      year: 'Future',
      title: 'Destination Ahead',
      description: 'Continuing to grow, learn, and make impactful contributions to the tech industry.',
      icon: MapPin,
      status: 'future',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            From academic foundations to professional growth - here's my story told through milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Path */}
          <motion.div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 to-cyan-400"
              style={{ scaleY: pathLength, originY: 0 }}
            />
          </motion.div>

          {/* Character Animation */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-slate-900 z-10"
            style={{ 
              top: useTransform(scrollYProgress, [0, 1], ['10%', '90%'])
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-md ${
                    index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'
                  }`}
                >
                  <motion.div
                    className={`bg-slate-800/60 backdrop-blur-sm border ${
                      step.status === 'current'
                        ? 'border-blue-500/50 bg-blue-500/10'
                        : step.status === 'future'
                        ? 'border-slate-600/50'
                        : 'border-slate-700/50'
                    } rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          step.status === 'current'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                            : step.status === 'future'
                            ? 'bg-slate-600'
                            : 'bg-gradient-to-r from-green-500 to-emerald-400'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-sm font-medium text-blue-400">{step.year}</div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                    
                    {step.status === 'current' && (
                      <motion.div
                        className="mt-4 flex items-center text-blue-400 text-sm font-medium"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                        Currently Here
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;