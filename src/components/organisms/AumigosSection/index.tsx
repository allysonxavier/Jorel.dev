'use client'

import { useState } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { FaPaw } from 'react-icons/fa'

import { aumigos } from 'constants/jorel'

import useIsMobile from 'hooks/useIsMobile'
import useSwipe from 'hooks/useSwipe'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const VISIBLE = 3

const AumigosSection = () => {
  const [offset, setOffset] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const isMobile = useIsMobile()

  const total = aumigos.length
  const visible = aumigos.slice(offset, offset + VISIBLE)

  const canPrev = offset > 0
  const canNext = isMobile ? offset + 1 < total : offset + VISIBLE < total

  const prev = () => { if (canPrev) { setDirection('prev'); setOffset(o => isMobile ? o - 1 : Math.max(0, o - VISIBLE)) } }
  const next = () => { if (canNext) { setDirection('next'); setOffset(o => isMobile ? o + 1 : Math.min(total - VISIBLE, o + VISIBLE)) } }

  const swipeHandlers = useSwipe(prev, next)

  const counterText = isMobile
    ? `${offset + 1} de ${total}`
    : `${offset + 1}–${Math.min(offset + VISIBLE, total)} de ${total}`

  return (
    <section className={S.section} id="aumigos" aria-labelledby="aumigos-title">
      <div className={S.inner}>
        <div className={S.header}>
          <SectionBadge icon={<FaPaw />} label="Amigos peludos" />
          <h2 className={S.title} id="aumigos-title">Os Aumigos do Jorel</h2>
          <p className={S.subtitle}>
            Conheça os melhores amigos cachorros do Jorel e suas aventuras juntos
          </p>
        </div>

        <div
          className={S.carousel}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
          }}
          {...swipeHandlers}
        >
          <button
            className={clsx(S.nav_btn, canPrev && S['nav_btn--active'])}
            onClick={prev}
            disabled={!canPrev}
            aria-label="Aumigo anterior"
          >
            ←
          </button>

          <div
            key={offset}
            className={clsx(S.cards, direction === 'next' ? S['cards--next'] : S['cards--prev'])}
          >
            {visible.map(aumigo => (
              <div key={aumigo.name} className={S.card}>
                <div className={S.card_photo}>
                  <Image
                    src={aumigo.photo}
                    alt={aumigo.name}
                    fill
                    className={S.card_image}
                    sizes="(max-width: 640px) 80vw, 33vw"
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

          <button
            className={clsx(S.nav_btn, canNext && S['nav_btn--active'])}
            onClick={next}
            disabled={!canNext}
            aria-label="Próximo aumigo"
          >
            →
          </button>
        </div>

        <div className={S.dots} aria-hidden="true">
          {Array.from({ length: total }, (_, i) => (
            <span key={i} className={clsx(S.dot, i === offset && S['dot--active'])} />
          ))}
        </div>

        <p className={S.counter}>{counterText}</p>
      </div>
    </section>
  )
}

export default AumigosSection
