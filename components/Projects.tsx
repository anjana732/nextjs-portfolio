'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Flashcard Quiz Application',
      description: 'An interactive learning tool built with the MERN stack. Users can take timed quizzes, and track their performance. Features include Generative AI hint, veriety of question, and real-time score feedback.',
      image: 'https://images.pexels.com/photos/5905707/pexels-photo-5905707.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'webhook', 'Express', 'Gen AI'],
      githubUrl: 'https://github.com/anjana732/flashcard-quiz-app',
      liveUrl: 'https://flashcard-quiz-app-eight.vercel.app/',
      featured: true,
    },
    {
      title: 'Payment Microservice',
      description: 'A scalable payment microservice, integrated with Stripe and Razorpay gateways. Supports secure payment processing, webhook handling, and transaction logging across microservice architecture.',
      image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'Stripe', 'Razorpay', 'MongoDB'],
      githubUrl: 'https://github.com/anjana732/payment-microservice',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'OpenWeather API', 'Chart.js', 'SCSS'],
      githubUrl: 'https://github.com/anjana732/WeatherApp',
      liveUrl: 'https://anjana732.github.io/WeatherApp/',
      featured: false,
    }

  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      size="sm"
                      variant="outline"
                      className="bg-slate-800/80 backdrop-blur-sm border-slate-600 text-white hover:bg-slate-700/80"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubUrl}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {project.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full font-semibold"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;