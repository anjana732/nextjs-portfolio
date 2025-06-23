'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-400' },
        { name: 'Next.js', level: 85, color: 'from-slate-600 to-slate-400' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-cyan-400' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-400' },
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-400' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-purple-400' },
      ],
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-600 to-green-400' },
        { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-400' },
        { name: 'Python', level: 80, color: 'from-yellow-600 to-yellow-400' },
        { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-400' },
        { name: 'MySQL', level: 78, color: 'from-blue-600 to-blue-400' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-400' },
        { name: 'REST APIs', level: 85, color: 'from-purple-500 to-pink-400' },
      ],
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-600 to-orange-400' },
        { name: 'Docker', level: 70, color: 'from-blue-600 to-blue-400' },
        { name: 'Linux', level: 75, color: 'from-yellow-500 to-orange-400' },
        { name: 'AWS', level: 65, color: 'from-orange-500 to-yellow-400' },
        { name: 'Figma', level: 80, color: 'from-purple-500 to-pink-400' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-400' },
        { name: 'Postman', level: 85, color: 'from-orange-500 to-red-400' },
      ],
    },
  };

  const floatingSkills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-400' },
    { name: 'Next.js', icon: '▲', color: 'from-slate-600 to-slate-400' },
    { name: 'JavaScript', icon: 'JS', color: 'from-yellow-500 to-yellow-400' },
    { name: 'TypeScript', icon: 'TS', color: 'from-blue-600 to-blue-400' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-400' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-600 to-blue-400' },
    { name: 'Git', icon: '📋', color: 'from-orange-600 to-orange-400' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-400' },
    { name: 'Express', icon: 'E', color: 'from-gray-600 to-gray-400' },
    { name: 'Linux', icon: '🐧', color: 'from-yellow-500 to-orange-400' },
    { name: 'APIs', icon: '🔗', color: 'from-purple-500 to-pink-400' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-600 to-yellow-400' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-purple-400' },
    { name: 'HTML5', icon: '📄', color: 'from-orange-500 to-red-400' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-400' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Skills Chart */}
          <div>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(skillCategories).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skillCategories[category as keyof typeof skillCategories].title}
                </motion.button>
              ))}
            </div>

            {/* Skills List */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Skills Animation */}
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-96 mx-auto">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {[...Array(64)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="border border-blue-400/20"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, delay: i * 0.05, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Skills */}
              {floatingSkills.map((skill, index) => {
                const angle = (index * 360) / floatingSkills.length;
                const radius = 120 + (index % 3) * 30; // Varying distances
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={skill.name}
                    className={`absolute w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg backdrop-blur-sm border border-white/20`}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{
                      x: x - 32,
                      y: y - 32,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: x - 32,
                      y: y - 32,
                      opacity: 1,
                      scale: 1,
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      rotate: {
                        duration: 20 + index * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                    whileHover={{
                      scale: 1.2,
                      zIndex: 10,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)',
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    
                    {/* Skill Name Tooltip */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-300 whitespace-nowrap bg-slate-800/80 px-2 py-1 rounded opacity-0 pointer-events-none"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.name}
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {floatingSkills.map((_, index) => {
                  if (index === floatingSkills.length - 1) return null;
                  
                  const angle1 = (index * 360) / floatingSkills.length;
                  const angle2 = ((index + 1) * 360) / floatingSkills.length;
                  const radius1 = 120 + (index % 3) * 30;
                  const radius2 = 120 + ((index + 1) % 3) * 30;
                  
                  const x1 = 192 + Math.cos((angle1 * Math.PI) / 180) * radius1;
                  const y1 = 192 + Math.sin((angle1 * Math.PI) / 180) * radius1;
                  const x2 = 192 + Math.cos((angle2 * Math.PI) / 180) * radius2;
                  const y2 = 192 + Math.sin((angle2 * Math.PI) / 180) * radius2;

                  return (
                    <motion.line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: index * 0.1 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Pulse Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Next.js', 'TypeScript', 'JavaScript', 'Python',
              'MongoDB', 'MySQL', 'Express.js', 'Git', 'Docker', 'Linux',
              'AWS', 'REST APIs', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma',
              'VS Code', 'Postman', 'PostgreSQL', 'Redux', 'GraphQL', 'Jest'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;