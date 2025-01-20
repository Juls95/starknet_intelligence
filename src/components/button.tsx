import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  children?: ReactNode
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-lg px-3 py-2 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
    variant === 'primary'
      ? 'bg-gray-900 text-white hover:bg-gray-700'
      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link href={props.href} className={className}>
      {props.children}
    </Link>
  )
}
