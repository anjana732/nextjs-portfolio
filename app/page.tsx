'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
// import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        {/* <Blog /> */}
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}