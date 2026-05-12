'use client'

import { useState } from 'react'

import { clsx } from 'clsx'

import { FaDog } from 'react-icons/fa'

import { navLinks } from 'constants/jorel'

import Button from 'components/atoms/Button'

import S from './styles.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <>
      <header className={S.header}>
        <div className={S.inner}>
          <a className={S.logo} href="#">
            <div className={S.logo_icon}><FaDog /></div>
            <span className={S.logo_name}>Jorelverso</span>
          </a>

          <nav className={S.nav}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={S.nav_link}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={S.actions}>
            <Button
              as="a"
              href="#envio"
              label="Enviar Foto"
              size="small"
            />
          </div>

          <button
            className={S.hamburger}
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <span className={S.hamburger_line} />
            <span className={S.hamburger_line} />
            <span className={S.hamburger_line} />
          </button>
        </div>
      </header>

      <div className={clsx(S.mobile_menu, isMenuOpen && S['mobile_menu--open'])}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={S.mobile_nav_link}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Button
          as="a"
          href="#envio"
          label="Enviar Foto"
          isFullWidth
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </>
  )
}

export default Header
