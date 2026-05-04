import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import BackToTop from './components/BackToTop'
import Loader from './components/Loader'
import Navbar, { type NavItem } from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import About from './sections/About'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Skills from './sections/Skills'

export default function App() {
  const nav = useMemo<NavItem[]>(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'resume', label: 'Resume' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="min-h-dvh bg-gradient-to-b from-bg-950 via-bg-900 to-bg-950 text-text-200">
      <ScrollProgress />
      <Navbar items={nav} />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Resume />
            <Contact />

            <footer className="border-t border-stroke py-10">
              <div className="container-page flex flex-col gap-2 text-sm text-text-400 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p className="text-text-400">
                  Built with React, Tailwind, and Framer Motion.
                </p>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      <BackToTop />
    </div>
  )
}

