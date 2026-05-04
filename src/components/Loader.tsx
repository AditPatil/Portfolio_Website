import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="grid min-h-[70vh] place-items-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <motion.div
            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-400 to-violet-500 shadow-[0_0_40px_rgba(99,102,241,0.45)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          />
          <div className="absolute inset-0 rounded-2xl bg-bg-950/30 blur-md" />
        </div>
        <p className="text-sm text-text-400">Loading portfolio…</p>
      </div>
    </motion.div>
  )
}

