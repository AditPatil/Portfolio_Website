import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

export default function Resume() {
  return (
    <section id="resume" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Resume"
          title="One click download"
          subtitle="Drop your PDF into the `public/` folder as `resume.pdf` and this button will work on Vercel."
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="card card-hover p-6 sm:p-8 lg:col-span-7"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-stroke bg-white/5">
                  <FiFileText className="text-lg text-indigo-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-100">Resume (PDF)</p>
                  <p className="mt-1 text-sm text-text-400">Last updated: Month Year</p>
                </div>
              </div>
              <a href="/resume.pdf" className="btn btn-primary w-fit" download>
                Download <FiDownload />
              </a>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-text-400">
              Optional: add a preview image or embed a PDF viewer later. For now, this section
              stays minimal and deploy-friendly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card card-hover p-6 sm:p-8 lg:col-span-5"
          >
            <p className="text-sm font-semibold text-text-100">Quick notes</p>
            <ul className="mt-4 grid gap-3 text-sm text-text-400">
              <li className="rounded-xl border border-stroke bg-white/5 px-4 py-3">
                Keep it to 1 page if possible.
              </li>
              <li className="rounded-xl border border-stroke bg-white/5 px-4 py-3">
                Add links to GitHub + LinkedIn.
              </li>
              <li className="rounded-xl border border-stroke bg-white/5 px-4 py-3">
                Highlight impact with numbers.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

