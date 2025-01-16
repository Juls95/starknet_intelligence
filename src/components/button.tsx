import clsx from 'clsx'
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
} & (
  | React.ComponentPropsWithoutRef<'button'>
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variant === 'primary'
      ? 'bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700'
      : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 active:bg-emerald-200',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
