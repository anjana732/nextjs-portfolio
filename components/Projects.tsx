// 'use client';

// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Eye } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useState } from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Flashcard Quiz Application',
//       description: 'An interactive learning tool built with the MERN stack. Users can take timed quizzes, and track their performance. Features include Generative AI hint, veriety of question, and real-time score feedback.',
//       image: 'https://images.pexels.com/photos/5905707/pexels-photo-5905707.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['React', 'Node.js', 'webhook', 'Express', 'Gen AI'],
//       githubUrl: 'https://github.com/anjana732/flashcard-quiz-app',
//       liveUrl: 'https://flashcard-quiz-app-eight.vercel.app/',
//       categories: ['Featured', 'Full Stack'],
//       tag: 'React',
//     },
//     {
//       title: 'Payment Microservice',
//       description: 'A scalable payment microservice, integrated with Stripe and Razorpay gateways. Supports secure payment processing, webhook handling, and transaction logging across microservice architecture.',
//       image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['Node.js', 'Express', 'Stripe', 'Razorpay', 'MongoDB'],
//       githubUrl: 'https://github.com/anjana732/payment-microservice',
//       liveUrl: '#',
//       categories: ['Featured', 'Microservice'],
//       tag: 'nodejs',
//     },
//     {
//       title: 'Weather Dashboard',
//       description: 'A responsive weather application with location-based forecasts and detailed weather analytics.',
//       image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['HTML5', 'OpenWeather API', 'Chart.js', 'SCSS'],
//       githubUrl: 'https://github.com/anjana732/WeatherApp',
//       liveUrl: 'https://anjana732.github.io/WeatherApp/',
//       categories: ['Featured', 'Frontend'],
//       tag: 'HTML/CSS/JS',
//     },
//     {
//       title: 'Authentication Microservice',
//       description: 'A lightweight authentication microservice for handling user registration and login using secure password hashing and JWT-based authentication, designed for integration with other services.',
//       image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'dotenv'],
//       githubUrl: 'https://github.com/anjana732/authentication-microservice',
//       liveUrl: '',
//       categories: ['Microservice'],
//       tag: 'nodejs'
//     },
//     {
//       title: 'Book Review API',
//       description: 'A backend API with user authentication and protected routes for managing and searching books and reviews.',
//       image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt'],
//       githubUrl: 'https://github.com/anjana732/book-review-api',
//       liveUrl: '',
//       categories: ['Backend'],
//       tag: 'nodejs',
//     }

//   ];

//   const tabs = ['Featured', 'Frontend', 'Backend', 'Full Stack', 'Microservice'];
//   const [activeTab, setActiveTab] = useState('Featured');
//   const [showAll, setShowAll] = useState(false);

//   const filteredProjects = projects.filter((project) =>
//     activeTab === 'Featured' || project.categories.includes(activeTab)
//   );

//   const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <p className="text-lg text-slate-300 max-w-3xl mx-auto">
//             A showcase of my best work, demonstrating technical skills and creative problem-solving
//           </p>
//         </motion.div>

//         <div className="flex justify-center mb-10 gap-4 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setShowAll(false);
//               }}
//               className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${activeTab === tab
//                 ? 'bg-blue-500 text-white border-blue-500'
//                 : 'bg-transparent text-slate-300 border-slate-500 hover:bg-slate-700'
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           key={activeTab}
//           variants={container}
//           initial="hidden"
//           animate="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {visibleProjects.length > 0 ? (
//             visibleProjects.map((project) => (
//               <motion.div
//                 key={project.title}
//                 variants={item}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
//               >
//                 <div className="relative overflow-hidden group">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
//                     <div className="flex space-x-2">
//                       <Button
//                         onClick={() => window.open(project.githubUrl, '_blank')}
//                         size="sm"
//                         variant="outline"
//                         className="bg-slate-800/80 backdrop-blur-sm border-slate-600 text-white hover:bg-slate-700/80"
//                       >
//                         <Github className="w-4 h-4 mr-2" />
//                         Code
//                       </Button>
//                       <Button
//                         onClick={() => window.open(project.liveUrl, '_blank')}
//                         size="sm"
//                         className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
//                       >
//                         <Eye className="w-4 h-4 mr-2" />
//                         Live
//                       </Button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//                   <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex space-x-3">
//                       <motion.a
//                         href={project.githubUrl}
//                         className="text-slate-400 hover:text-white transition-colors duration-200"
//                         whileHover={{ scale: 1.1 }}
//                         target="_blank"
//                       >
//                         <Github className="w-5 h-5" />
//                       </motion.a>
//                       <motion.a
//                         href={project.liveUrl}
//                         className="text-slate-400 hover:text-white transition-colors duration-200"
//                         whileHover={{ scale: 1.1 }}
//                         target="_blank"
//                       >
//                         <ExternalLink className="w-5 h-5" />
//                       </motion.a>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {/* {project.categories.map((cat) => ( */}
//                         <span
//                           // key={cat}
//                           className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full"
//                         >
//                           {project.tag}
//                         </span>
//                       {/* ))} */}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-slate-400 py-10">
//               No projects found in this category.
//             </div>
//           )}
//         </motion.div>

//         {filteredProjects.length > 3 && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-center mt-12"
//           >
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => setShowAll(!showAll)}
//               className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full font-semibold"
//             >
//               {showAll ? 'Show Less' : 'View All Projects'}
//             </Button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;


'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Flashcard Quiz Application',
      description: 'An interactive learning tool built with the MERN stack. Users can take timed quizzes, and track their performance. Features include Generative AI hint, veriety of question, and real-time score feedback.',
      image: 'https://images.pexels.com/photos/5905707/pexels-photo-5905707.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'webhook', 'Express', 'Gen AI'],
      githubUrl: 'https://github.com/anjana732/flashcard-quiz-app',
      liveUrl: 'https://flashcard-quiz-app-eight.vercel.app/',
      categories: ['Featured', 'Full Stack'],
      tag: 'React',
    },
    {
      title: 'Payment Microservice',
      description: 'A scalable payment microservice, integrated with Stripe and Razorpay gateways. Supports secure payment processing, webhook handling, and transaction logging across microservice architecture.',
      image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'Stripe', 'Razorpay', 'MongoDB'],
      githubUrl: 'https://github.com/anjana732/payment-microservice',
      liveUrl: '#',
      categories: ['Featured', 'Microservice'],
      tag: 'nodejs',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'OpenWeather API', 'Chart.js', 'SCSS'],
      githubUrl: 'https://github.com/anjana732/WeatherApp',
      liveUrl: 'https://anjana732.github.io/WeatherApp/',
      categories: ['Featured', 'Frontend'],
      tag: 'HTML/CSS/JS',
    },
    {
      title: 'Authentication Microservice',
      description: 'A lightweight authentication microservice for handling user registration and login using secure password hashing and JWT-based authentication, designed for integration with other services.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'dotenv'],
      githubUrl: 'https://github.com/anjana732/authentication-microservice',
      liveUrl: '',
      categories: ['Microservice'],
      tag: 'nodejs',
    },
    {
      title: 'Book Review API',
      description: 'A backend API with user authentication and protected routes for managing and searching books and reviews.',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt'],
      githubUrl: 'https://github.com/anjana732/book-review-api',
      liveUrl: '',
      categories: ['Backend'],
      tag: 'nodejs',
    }
  ];

  const tabs = ['Featured', 'Frontend', 'Backend', 'Full Stack', 'Microservice'];
  const [activeTab, setActiveTab] = useState('Featured');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((project) =>
    activeTab === '' || project.categories.includes(activeTab)
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

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

        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${activeTab === tab
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-transparent text-slate-300 border-slate-500 hover:bg-slate-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
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
                        target="_blank"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        target="_blank"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-400 py-10">
              No projects found in this category.
            </div>
          )}
        </motion.div>

        {activeTab === 'Featured' && filteredProjects.length > 3 && (
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
              onClick={() => setShowAll(!showAll)}
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full font-semibold"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
