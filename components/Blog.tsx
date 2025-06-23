'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Learn how to create performant and scalable web applications using Next.js, covering advanced patterns, optimization techniques, and best practices.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-15',
      readTime: '8 min read',
      tags: ['Next.js', 'React', 'Web Development'],
      featured: true,
    },
    {
      title: 'Modern State Management in React Applications',
      excerpt: 'A comprehensive guide to managing application state in React using hooks, context, and external libraries like Zustand and Redux Toolkit.',
      image: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-10',
      readTime: '6 min read',
      tags: ['React', 'State Management', 'JavaScript'],
      featured: false,
    },
    {
      title: 'Mastering TypeScript for Better Code Quality',
      excerpt: 'Discover how TypeScript can improve your development workflow, reduce bugs, and make your codebase more maintainable and scalable.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-05',
      readTime: '10 min read',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      featured: false,
    },
    {
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Explore different database design patterns and learn when to use SQL vs NoSQL databases in your applications.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-11-28',
      readTime: '7 min read',
      tags: ['Database', 'MongoDB', 'PostgreSQL'],
      featured: false,
    },
    {
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'An overview of emerging trends in web development, including WebAssembly, edge computing, and the evolution of JavaScript frameworks.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-11-20',
      readTime: '5 min read',
      tags: ['Web Development', 'Trends', 'Technology'],
      featured: false,
    },
    {
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'Step-by-step guide to creating robust and secure RESTful APIs using Node.js, Express, and modern authentication patterns.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-11-15',
      readTime: '12 min read',
      tags: ['Node.js', 'API', 'Backend'],
      featured: false,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Latest <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology trends, and software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm rounded-full font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-slate-400 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blogPosts[0].date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar with Recent Posts */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(1, 4).map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex space-x-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 mb-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-slate-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 'CSS', 'MongoDB', 'API'].map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50 hover:border-blue-500/50 hover:text-white transition-all duration-200 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">All Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-slate-400 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;