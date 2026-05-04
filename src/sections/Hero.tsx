import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiArrowRight, FiMail } from 'react-icons/fi'

function useTypewriter(text: string, speedMs = 22) {
  const [out, setOut] = useState('')

  useEffect(() => {
    setOut('')
    let i = 0
    const t = window.setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) window.clearInterval(t)
    }, speedMs)
    return () => window.clearInterval(t)
  }, [text, speedMs])

  return out
}

export default function Hero() {
  const taglineFull = useMemo(
    () => 'I build polished, fast web experiences with a strong eye for detail.',
    [],
  )
  const tagline = useTypewriter(taglineFull, 18)

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-48 right-[-10rem] h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-12rem] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="container-page flex min-h-[92vh] items-center py-16">
        <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white/5 px-4 py-2 text-xs font-medium text-text-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for internships & projects
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
              className="mt-6 text-4xl font-semibold tracking-tight text-text-100 sm:text-5xl lg:text-6xl"
            >
              Hi, I’m <span className="heading-gradient">Adit Patil</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
              className="mt-4 text-base text-text-300 sm:text-lg"
            >
              Computer Engineering Student | Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-text-400 sm:text-base"
            >
              <span className="text-text-300">{tagline}</span>
              <span className="ml-1 inline-block h-4 w-2 translate-y-[3px] animate-pulse rounded-sm bg-text-300/60" />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button type="button" className="btn btn-primary" onClick={() => scrollTo('projects')}>
                View Projects <FiArrowRight />
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => scrollTo('contact')}>
                Contact Me <FiMail />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-2 text-xs text-text-400"
            >
              {['Performance-minded', 'Clean UI', 'Accessible', 'Detail oriented'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-stroke bg-white/5 px-3 py-1.5"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
              className="card card-hover relative p-6"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <div className="relative">
                <p className="text-sm font-medium text-text-200">Quick snapshot</p>
                <div className="mt-5 grid gap-3">
                  <div className="flex items-center justify-between rounded-xl border border-stroke bg-white/5 px-4 py-3">
                    <span className="text-sm text-text-300">Focus</span>
                    <span className="text-sm font-medium text-text-200">Full‑stack / Frontend</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-stroke bg-white/5 px-4 py-3">
                    <span className="text-sm text-text-300">Currently</span>
                    <span className="text-sm font-medium text-text-200">Building projects</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-stroke bg-white/5 px-4 py-3">
                    <span className="text-sm text-text-300">Open to</span>
                    <span className="text-sm font-medium text-text-200">Internships</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-stroke bg-gradient-to-r from-indigo-500/15 via-sky-400/10 to-violet-500/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-400">
                    Principle
                  </p>
                  <p className="mt-2 text-sm text-text-200">
                    Simple, premium interfaces — powered by solid engineering.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

