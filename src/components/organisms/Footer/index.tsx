import S from './styles.module.css'

const quickLinks = [
  { label: 'Sobre o Jorel', href: '#sobre' },
  { label: 'Galeria', href: '#momentos' },
  { label: 'Aumigos', href: '#aumigos' },
  { label: 'Humanos Amigos', href: '#humanos' }
]

const participateLinks = [
  { label: 'Pague um Petisco', href: '#petisco' },
  { label: 'Enviar Foto', href: '#envio' },
  { label: 'Contato', href: '#' },
  { label: 'Newsletter', href: '#' }
]

const socialLinks = [
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '👥', label: 'Facebook', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
  { icon: '🎵', label: 'TikTok', href: '#' }
]

const Footer = () => (
  <footer className={S.footer}>
    <div className={S.inner}>
      <div className={S.top}>
        <div className={S.brand}>
          <div className={S.logo}>
            <div className={S.logo_icon}>🐾</div>
            <span className={S.logo_name}>Jorelverso</span>
          </div>
          <p className={S.brand_description}>
            Um universo dedicado ao Jorel, o Beagle mais adorável. Acompanhe suas
            aventuras, conheça seus amigos e faça parte dessa comunidade apaixonada
            por cachorros.
          </p>
          <div className={S.social_links}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} className={S.social_link} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={S.links_col}>
          <span className={S.links_title}>Links Rápidos</span>
          {quickLinks.map(link => (
            <a key={link.label} href={link.href} className={S.link}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={S.links_col}>
          <span className={S.links_title}>Participe</span>
          {participateLinks.map(link => (
            <a key={link.label} href={link.href} className={S.link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={S.bottom}>
        <span className={S.copyright}>
          © 2025 Jorelverso. Todos os direitos reservados.
        </span>
        <div className={S.legal_links}>
          <a href="#" className={S.legal_link}>Política de Privacidade</a>
          <a href="#" className={S.legal_link}>Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
