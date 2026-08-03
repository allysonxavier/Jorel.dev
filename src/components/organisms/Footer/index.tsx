import { FaDog } from 'react-icons/fa'

import {
  QUICK_LINKS,
  PARTICIPATE_LINKS,
  SOCIAL_LINKS,
  LEGAL_LINKS
} from './constants'

import S from './styles.module.css'

const Footer = () => (
  <footer className={S.footer}>
    <div className={S.inner}>
      <div className={S.top}>
        <div className={S.brand}>
          <div className={S.logo}>
            <div className={S.logo_icon}><FaDog /></div>
            <span className={S.logo_name}>Jorelverso</span>
          </div>
          <p className={S.brand_description}>
            Um universo dedicado ao Jorel, o Beagle mais adorável. Acompanhe suas
            aventuras, conheça seus amigos e faça parte dessa comunidade apaixonada
            por cachorros.
          </p>
          <div className={S.social_links}>
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} className={S.social_link} aria-label={s.label}>
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        <div className={S.links_col}>
          <span className={S.links_title}>Links Rápidos</span>
          {QUICK_LINKS.map(link => (
            <a key={link.label} href={link.href} className={S.link}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={S.links_col}>
          <span className={S.links_title}>Participe</span>
          {PARTICIPATE_LINKS.map(link => (
            <a key={link.label} href={link.href} className={S.link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={S.bottom}>
        <span className={S.copyright}>
          © 2026 Jorelverso. Todos os direitos reservados.
        </span>
        <div className={S.legal_links}>
          {LEGAL_LINKS.map(link => (
            <a key={link.label} href={link.href} className={S.legal_link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
