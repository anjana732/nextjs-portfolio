'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const skillCategories = {
  frontend: {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, color: 'from-blue-500 to-indigo-500' },
      { name: 'Next.js', level: 85, color: 'from-slate-600 to-slate-400' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400' },
    ],
  },
  backend: {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: 'from-green-600 to-green-400' },
      { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-400' },
      { name: 'REST APIs', level: 85, color: 'from-purple-500 to-pink-400' },
    ],
  },
  tools: {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-600 to-orange-400' },
      { name: 'Docker', level: 70, color: 'from-blue-600 to-blue-400' },
      { name: 'Linux', level: 75, color: 'from-yellow-500 to-orange-400' },
    ],
  },
};

const floatingSkills = [
  { name: 'React', icon: '/icons/react.png' },
  // { name: 'Next.js', icon: '/icons/next.png' },
  { name: 'Node.js', icon: '/icons/node.png' },
  { name: 'Docker', icon: '/icons/docker.png' },
  { name: 'Git', icon: '/icons/github.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'HTML5', icon: '/icons/html.png' },
  { name: 'CSS', icon: '/icons/css3.png' },
  { name: 'java', icon: '/icons/java.png' },
  { name: 'linux', icon: '/icons/linux.png' },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of the technologies I use to build scalable and modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Levels */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.entries(skillCategories).map(([key, { title }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
                    selectedCategory === key
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>

            {/* Skill Bars */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Skill Icons */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <div className="relative w-[320px] h-[320px]">
              {floatingSkills.map((skill, index) => {

                const moveX = 30 + Math.random() * 50;
                const moveY = 30 + Math.random() * 40;

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute"
                    style={{
                      left: `${50 + Math.random() * 40 - 20}%`,
                      top: `${50 + Math.random() * 40 - 20}%`,
                    }}
                    animate={{
                      x: [0, moveX, -moveX, 0],
                      y: [0, -moveY, moveY, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 4,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'mirror',
                      delay: index * 0.3,
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 10,
                    }}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
