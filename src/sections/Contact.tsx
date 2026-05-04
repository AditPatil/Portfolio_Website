import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 2400)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="border-t border-stroke py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          subtitle="A simple, clean form + social links. Wire the submit to your backend or a form provider later."
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="card card-hover p-6 sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-text-300">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-stroke bg-white/5 px-4 py-3 text-sm text-text-200 outline-none transition placeholder:text-text-400/70 focus:border-indigo-400/50 focus:bg-white/8"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-text-300">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-stroke bg-white/5 px-4 py-3 text-sm text-text-200 outline-none transition placeholder:text-text-400/70 focus:border-indigo-400/50 focus:bg-white/8"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2">
              <span className="text-sm font-medium text-text-300">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me what you’re building…"
                className="w-full resize-none rounded-xl border border-stroke bg-white/5 px-4 py-3 text-sm text-text-200 outline-none transition placeholder:text-text-400/70 focus:border-indigo-400/50 focus:bg-white/8"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button type="submit" className="btn btn-primary">
                Send message <FiSend />
              </button>
              <span className="text-xs text-text-400">
                This is a placeholder submit (no backend).
              </span>
            </div>

            <AnimatePresence>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
                >
                  Message queued (placeholder). Replace with real form handling.
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="grid gap-4 lg:col-span-5"
          >
            <div className="card card-hover p-6 sm:p-8">
              <p className="text-sm font-semibold text-text-100">Social</p>
              <div className="mt-4 grid gap-2">
                <a
                  className="flex items-center justify-between rounded-xl border border-stroke bg-white/5 px-4 py-3 text-sm text-text-300 transition hover:bg-white/10 hover:text-white"
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <FiGithub className="text-indigo-300" /> GitHub
                  </span>
                  <span className="text-xs text-text-400">@yourname</span>
                </a>

                <a
                  className="flex items-center justify-between rounded-xl border border-stroke bg-white/5 px-4 py-3 text-sm text-text-300 transition hover:bg-white/10 hover:text-white"
                  href="https://linkedin.com/in/yourname"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <FiLinkedin className="text-indigo-300" /> LinkedIn
                  </span>
                  <span className="text-xs text-text-400">/in/yourname</span>
                </a>

                <a
                  className="flex items-center justify-between rounded-xl border border-stroke bg-white/5 px-4 py-3 text-sm text-text-300 transition hover:bg-white/10 hover:text-white"
                  href="mailto:you@example.com"
                >
                  <span className="inline-flex items-center gap-2">
                    <FiMail className="text-indigo-300" /> Email
                  </span>
                  <span className="text-xs text-text-400">you@example.com</span>
                </a>
              </div>
            </div>

            <div className="card card-hover p-6 sm:p-8">
              <p className="text-sm font-semibold text-text-100">Location</p>
              <p className="mt-3 text-sm leading-relaxed text-text-400">
                City, Country (placeholder). Add time zone or availability if you want.
              </p>
              <div className="mt-4 rounded-xl border border-stroke bg-gradient-to-r from-indigo-500/10 via-sky-400/5 to-violet-500/10 p-4 text-sm text-text-300">
                <p className="font-medium text-text-200">Typically replies within 24 hours.</p>
                <p className="mt-1 text-text-400">For urgent queries, email is best.</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

