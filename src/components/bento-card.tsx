'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function BentoCard({
  className,
  eyebrow,
  title,
  description,
  graphic,
  dark = false,
  fade = [],
}: {
  className?: string
  eyebrow: string
  title: string
  description: string
  graphic: React.ReactNode
  dark?: boolean
  fade?: ('top' | 'bottom')[]
}) {
  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-xl bg-white/[0.02] transition hover:bg-white/[0.04]',
        dark ? 'text-white' : 'text-gray-950',
        className,
      )}
    >
      <div className="p-6">
        <p className="font-mono text-sm text-emerald-500">{eyebrow}</p>
        <p className="mt-2 font-display text-2xl font-semibold">{title}</p>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
      <div className="relative h-48 overflow-hidden">
        {graphic}
        {fade.map((direction) => (
          <div
            key={direction}
            className={clsx(
              'pointer-events-none absolute z-10',
              direction === 'top' &&
                'top-0 h-32 w-full bg-gradient-to-b from-gray-950 to-transparent',
              direction === 'bottom' &&
                'bottom-0 h-32 w-full bg-gradient-to-t from-gray-950 to-transparent',
            )}
          />
        ))}
      </div>
    </div>
  )
}
