'use client'

import { motion } from 'framer-motion'

const items = [
  'Tepung Tapioka',
  'Pati Singkong',
  'Cassava Starch',
  'Mutu Industri',
  'Bandar Lampung',
  'Teknologi Eropa',
  'Pangan & Industri',
  'Berkelanjutan',
]

export function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="border-y border-border bg-primary py-4 text-primary-foreground">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-8 pr-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
        >
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-heading text-xl italic">{item}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex shrink-0 items-center gap-8 pr-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
          aria-hidden="true"
        >
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-heading text-xl italic">{item}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
