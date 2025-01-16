import { useId } from 'react'
import clsx from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div
      className={clsx(
        'absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 opacity-20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]',
        className,
      )}
      {...props}
    >
      <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay">
        <defs>
          <pattern id={`${id}-1`} width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
            <path d="M.5 56V.5H72" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id}-1)`} />
      </svg>
    </div>
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
