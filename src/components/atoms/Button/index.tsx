'use client'

import type { ElementType } from 'react'

import { clsx } from 'clsx'

import S from './styles.module.css'
import type { ButtonProps } from './types'

const Button = ({
  label,
  leftIcon,
  rightIcon,
  variant = 'solid',
  size = 'medium',
  isFullWidth,
  className,
  as = 'button',
  ...props
}: ButtonProps) => {
  const Component = as as ElementType

  return (
    <Component
      className={clsx(
        S.button,
        S[`button_size--${size}`],
        S[`button_variant--${variant}`],
        isFullWidth && S.button_full_width,
        className
      )}
      {...props}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </Component>
  )
}

export default Button
