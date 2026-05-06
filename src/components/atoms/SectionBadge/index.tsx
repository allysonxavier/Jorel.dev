import S from './styles.module.css'
import type { SectionBadgeProps } from './types'

const SectionBadge = ({ icon, label }: SectionBadgeProps) => (
  <div className={S.badge}>
    {icon && <span className={S.badge_icon}>{icon}</span>}
    {label}
  </div>
)

export default SectionBadge
