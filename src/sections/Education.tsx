import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const items = [
  {
    degree: 'B.E. Computer Engineering',
    school: 'Pimpri Chinchwad College of Engineering and Research',
    duration: '2023 — 2027',
    notes: '',
  },
  // {
  //   degree: 'Higher Secondary / Diploma',
  //   school: 'Sant Tu',
  //   duration: '2021 — 2023',
  //   notes: 'Achievements or specialization (placeholder).',
  // },
]

export default function Education() {
  return (
    <section id="education" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Academic timeline"
          subtitle="A clean timeline layout with premium cards. Replace entries with your details."
        />

        <div className="relative grid gap-4">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-6" />

          {items.map((it, idx) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-14 sm:pl-16"
            >
              <div className="absolute left-2.5 top-6 grid h-6 w-6 place-items-center rounded-full border border-stroke bg-bg-950 sm:left-3">
                <FiBookOpen className="text-sm text-indigo-300" />
              </div>

              <div className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-text-100">{it.degree}</p>
                    <p className="mt-1 text-sm text-text-400">{it.school}</p>
                  </div>
                  <span className="rounded-full border border-stroke bg-white/5 px-3 py-1 text-xs text-text-300">
                    {it.duration}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-400">{it.notes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

