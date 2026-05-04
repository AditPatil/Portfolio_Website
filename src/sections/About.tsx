import { motion } from 'framer-motion'
import { FiCompass, FiCpu, FiZap } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  {
    icon: FiZap,
    title: 'Product-minded',
    text: 'I like shipping clean features with great UX and solid performance.',
  },
  {
    icon: FiCpu,
    title: 'Engineering-first',
    text: 'I focus on readable code, maintainable structure, and practical trade-offs.',
  },
  {
    icon: FiCompass,
    title: 'Always learning',
    text: 'I’m exploring modern web tooling, system design basics, and best practices.',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="A short intro"
          subtitle="Placeholder content you can replace later. Keep it concise, confident, and focused on what you enjoy building."
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="card card-hover lg:col-span-7"
          >
            <div className="p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-text-300 sm:text-base">
              Computer Engineering student at SPPU with a strong foundation in C++ and a focus on Systems 
Programming. Experienced in building full-stack applications with Django and React, while currently 
specializing in Operating Systems, Networking, and low-level memory management. 
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-400 sm:text-base">
              Proven track record of 
developing resource-efficient software independently and contributing to college technical teams. Committed 
to mastering system-level architecture to build high-performance software solutions.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 lg:col-span-5">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="card card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-stroke bg-white/5">
                    <h.icon className="text-lg text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-200">{h.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-400">{h.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

