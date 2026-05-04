import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl border border-stroke bg-bg-950/70 px-4 py-3 text-sm font-medium text-text-200 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-bg-950/85"
          aria-label="Back to top"
        >
          <FiArrowUp />
          Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

