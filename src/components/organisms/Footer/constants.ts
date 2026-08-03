import type { ComponentType } from 'react'

import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

export type FooterLink = {
  label: string
  href: string
}

export type FooterSocialLink = {
  icon: ComponentType
  label: string
  href: string
}

export const QUICK_LINKS: FooterLink[] = [
  { label: 'Sobre o Jorel', href: '#sobre' },
  { label: 'Galeria', href: '#momentos' },
  { label: 'Aumigos', href: '#aumigos' },
  { label: 'Humanos Amigos', href: '#humanos' }
]

export const PARTICIPATE_LINKS: FooterLink[] = [
  { label: 'Pague um Petisco', href: '#petisco' },
  { label: 'Enviar Foto', href: '#envio' },
  { label: 'Contato', href: '#' },
  { label: 'Newsletter', href: '#' }
]

export const SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: SiTiktok, label: 'TikTok', href: '#' }
]

export const LEGAL_LINKS: FooterLink[] = [
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Termos de Uso', href: '#' }
]
