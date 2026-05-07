import { clsx } from 'clsx'

import S from './styles.module.css'
import type { SectionBadgeProps } from './types'

const SectionBadge = ({ icon, label, light }: SectionBadgeProps) => (
  <div className={clsx(S.badge, light && S['badge--light'])}>
    {icon && <span className={S.badge_icon}>{icon}</span>}
    {label}
  </div>
)

export default SectionBadge
