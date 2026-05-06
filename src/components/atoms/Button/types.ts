import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type VariantType = 'solid' | 'outline'

export type SizeType = 'small' | 'medium' | 'large'

type CommonProps = {
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: VariantType
  size?: SizeType
  isFullWidth?: boolean
  className?: string
}

export type ButtonProps = CommonProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
  )
