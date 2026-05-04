import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export type NavItem = { id: string; label: string }

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { root: null, rootMargin: '-40% 0px -55% 0px', threshold: [0.05, 0.1, 0.2] },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [sectionIds])

  return activeId
}

export default function Navbar({ items }: { items: NavItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 border-b border-stroke bg-bg-950/70 backdrop-blur supports-[backdrop-filter]:bg-bg-950/55">
      <div className="container-page flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-left"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(99,102,241,0.75)]" />
          <span className="text-sm font-semibold text-text-200 transition group-hover:text-white">
            AditPatil.dev
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={[
                  'rounded-xl px-3 py-2 text-sm transition',
                  isActive
                    ? 'bg-white/6 text-white'
                    : 'text-text-300 hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('contact')
            }}
            className="btn btn-primary hidden sm:inline-flex"
          >
            Let’s talk
          </a>

          <button
            type="button"
            className="btn btn-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="container-page grid gap-1 pb-4">
              {items.map((item) => {
                const isActive = active === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={[
                      'w-full rounded-xl px-3 py-2 text-left text-sm transition',
                      isActive
                        ? 'bg-white/6 text-white'
                        : 'text-text-300 hover:bg-white/5 hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

