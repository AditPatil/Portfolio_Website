import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiStar } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const achievements = [
  {
    icon: FiAward,
    title: 'Microsoft Azure AI Fundamentals (AI-900)',
    meta: 'Microsoft • Certified',
    detail: 'Validated understanding of AI concepts, machine learning models, and Azure AI services.',
  },
  {
    icon: FiAward,
    title: 'Oracle Database Programming with SQL',
    meta: 'Oracle Academy • Certified',
    detail: 'Demonstrated proficiency in SQL, database design, querying, and data management concepts.',
  },
  {
    icon: FiAward,
    title: 'Responsive Web Design Certification',
    meta: 'Udemy • Completed',
    detail: 'Built real-world responsive websites using modern HTML, CSS, and layout techniques.',
  },
  {
    icon: FiStar,
    title: 'Smart India Hackathon 2025',
    meta: 'National-Level • Participant',
    detail: 'Participated in SIH 2025, working on problem-solving and scalable solution design in a competitive environment.',
  },
  {
    icon: FiCheckCircle,
    title: 'Technical Club Member',
    meta: 'College Activity',
    detail: 'Contributed to college website development and helped organize technical events.',
  },
  {
    icon: FiCheckCircle,
    title: 'Web Development Mentor',
    meta: 'Peer Mentorship',
    detail: 'Guided junior students in building web development projects and understanding core concepts.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & highlights"
          subtitle="Clean, minimal cards. Replace items with your certifications, exams, and wins."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-stroke bg-white/5">
                  <a.icon className="text-lg text-indigo-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-100">{a.title}</p>
                  <p className="mt-1 text-xs text-text-400">{a.meta}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-400">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

