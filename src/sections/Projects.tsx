import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

type Project = {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'Smart File Manager',
    description:
      'High-performance C++ system utility for automated file organization, duplicate detection using hashing, and large-file analysis for storage optimization.',
    tech: ['C++', 'Filesystem API'],
    githubUrl: 'https://github.com/yourname/smart-file-manager',
  },
  {
    title: 'Civic Echo',
    description:
      'Community-driven platform for reporting civic issues. Built with React and Django, featuring search, filtering, and structured user feedback storage using MySQL.',
    tech: ['React', 'Django', 'MySQL'],
    githubUrl: 'https://github.com/yourname/civic-echo',
    liveUrl: 'https://manjeetkumar345.github.io/Civic_Echo/',
  },
  {
    title: 'FarmHUB',
    description:
      'Agriculture-focused web platform with a clean React UI and integrated payment system. Handles user data and farm records efficiently using MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourname/farmhub',
    liveUrl: 'https://farmhubproject-nqxb92hge.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of full-stack applications and system-level tools focused on performance and usability."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="card card-hover group flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-text-100">{p.title}</h3>
                <span className="rounded-full border border-stroke bg-white/5 px-3 py-1 text-xs text-text-400">
                  0{idx + 1}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-text-400">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-stroke bg-white/5 px-2.5 py-1 text-xs text-text-300 transition group-hover:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-1">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                ) : null}

                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub <FiGithub />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

