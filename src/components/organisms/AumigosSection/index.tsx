'use client'

import { useState } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { FaPaw } from 'react-icons/fa'

import { aumigos } from 'constants/jorel'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const VISIBLE = 4

const AumigosSection = () => {
  const [offset, setOffset] = useState(0)

  const total = aumigos.length
  const visible = aumigos.slice(offset, offset + VISIBLE)

  const canPrev = offset > 0
  const canNext = offset + VISIBLE < total

  const prev = () => { if (canPrev) setOffset(o => o - 1) }
  const next = () => { if (canNext) setOffset(o => o + 1) }

  return (
    <section className={S.section} id="aumigos">
      <div className={S.inner}>
        <div className={S.header}>
          <SectionBadge icon={<FaPaw />} label="Amigos peludos" light />
          <div className={S.header_title_row}>
            <h2 className={S.title}>Os Aumigos do Jorel</h2>
            <div className={S.nav_buttons}>
              <button
                className={clsx(S.nav_btn, canPrev && S['nav_btn--active'])}
                onClick={prev}
                disabled={!canPrev}
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                className={clsx(S.nav_btn, canNext && S['nav_btn--active'])}
                onClick={next}
                disabled={!canNext}
                aria-label="Próximo"
              >
                →
              </button>
            </div>
          </div>
          <p className={S.subtitle}>
            Conheça os melhores amigos cachorros do Jorel e suas aventuras juntos
          </p>
        </div>

        <div className={S.cards}>
          {visible.map(aumigo => (
            <div key={aumigo.name} className={S.card}>
              <div className={S.card_photo}>
                <Image
                  src={aumigo.photo}
                  alt={aumigo.name}
                  fill
                  className={S.card_image}
                  sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
              </div>
              <span className={S.card_name}>{aumigo.name}</span>
              <span className={S.card_breed}>
                {aumigo.breed} · {aumigo.age}
              </span>
              <p className={S.card_description}>{aumigo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AumigosSection
