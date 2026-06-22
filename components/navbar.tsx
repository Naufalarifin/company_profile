'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'
import { nav, company } from '@/lib/site-data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5"
      >
        <nav
          className={`liquid-glass flex w-full max-w-6xl items-center justify-between rounded-full pl-4 pr-2 transition-all duration-500 sm:pl-6 ${
            scrolled ? 'py-1.5' : 'py-2.5'
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 text-foreground"
            aria-label={company.name}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="size-4" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[15px] font-semibold tracking-tight">
                Bukit Kencana Mas
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Tapioca Starch · Lampung
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#kontak"
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
            >
              Hubungi Kami
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
              aria-label="Buka menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass absolute inset-x-3 top-3 rounded-3xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-semibold">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-foreground/5"
                  aria-label="Tutup menu"
                >
                  <X className="size-5" />
                </button>
              </div>
              <ul className="mt-4 flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-foreground/10 py-4 font-heading text-2xl text-foreground"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-full bg-foreground px-5 py-3.5 text-center text-sm font-medium text-background"
              >
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
