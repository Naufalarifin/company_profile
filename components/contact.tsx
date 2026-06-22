'use client'

import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { Reveal, RevealText } from '@/components/reveal'
import { company } from '@/lib/site-data'

const details = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: company.address,
    href: 'https://www.google.com/maps/search/?api=1&query=Jl.+Pangeran+Tirtayasa+99+Bandar+Lampung',
  },
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, '')}`,
  },
]

export function Contact() {
  return (
    <section id="kontak" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Hubungi Kami
              </span>
            </div>
            <h2 className="mt-5 font-heading text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.02] tracking-tight text-balance">
              <RevealText text="Mari bermitra untuk pati berkualitas." />
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
              Tertarik dengan produk tepung tapioka kami atau ingin mengetahui
              lebih lanjut tentang PT. Bukit Kencana Mas? Tim kami siap
              membantu.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.1}>
                <a
                  href={d.href}
                  target={d.icon === MapPin ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-primary-foreground/60">
                        {d.label}
                      </p>
                      <p className="mt-0.5 text-pretty font-medium">{d.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
