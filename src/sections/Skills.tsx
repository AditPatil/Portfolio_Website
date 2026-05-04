import { motion } from 'framer-motion'
import {
  SiC,
  
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'

type Skill = { name: string; icon: React.ComponentType<{ className?: string }> }

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'C++', icon: SiC }, // FIXED (important)
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Django', icon: SiPython }, // ADD (very important)
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb }, // FarmHUB
      { name: 'MySQL', icon: SiMysql }, // Civic Echo
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Vite', icon: SiVite },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'Systems Programming', icon: SiC },
      { name: 'File Handling', icon: SiC },
      { name: 'Memory Management', icon: SiC },
      { name: 'Data Structures', icon: SiC },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Modern stack, solid fundamentals"
          subtitle="Technologies and concepts I’ve used to build full-stack applications and system-level tools."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="card card-hover p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-text-200">{g.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-stroke bg-white/5 px-3 py-2 text-sm text-text-300 transition hover:bg-white/10"
                  >
                    <s.icon className="text-base text-indigo-300" />
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

