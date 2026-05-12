'use client'

import { useState } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { FaUsers } from 'react-icons/fa'

import { humanosAmigos } from 'constants/jorel'

import useIsMobile from 'hooks/useIsMobile'
import useSwipe from 'hooks/useSwipe'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const VISIBLE = 3

const HumanosSection = () => {
  const [offset, setOffset] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const isMobile = useIsMobile()

  const total = humanosAmigos.length
  const visible = humanosAmigos.slice(offset, offset + VISIBLE)

  const canPrev = offset > 0
  const canNext = isMobile ? offset + 1 < total : offset + VISIBLE < total

  const prev = () => { if (canPrev) { setDirection('prev'); setOffset(o => isMobile ? o - 1 : Math.max(0, o - VISIBLE)) } }
  const next = () => { if (canNext) { setDirection('next'); setOffset(o => isMobile ? o + 1 : Math.min(total - VISIBLE, o + VISIBLE)) } }

  const swipeHandlers = useSwipe(prev, next)

  const counterText = isMobile
    ? `${offset + 1} de ${total}`
    : `${offset + 1}–${Math.min(offset + VISIBLE, total)} de ${total}`

  return (
    <section className={S.section} id="humanos" aria-labelledby="humanos-title">
      <div className={S.inner}>
        <div className={S.header}>
          <SectionBadge icon={<FaUsers />} label="Família" light />
          <h2 className={S.title} id="humanos-title">Humanos Amigos</h2>
          <p className={S.subtitle}>
            As pessoas especiais que fazem parte da vida do Jorel
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
            aria-label="Humano anterior"
          >
            ←
          </button>

          <div
            key={offset}
            className={clsx(S.cards, direction === 'next' ? S['cards--next'] : S['cards--prev'])}
          >
            {visible.map(humano => (
              <div key={humano.name} className={S.card}>
                <div className={S.avatar_wrapper}>
                  <Image
                    src={humano.photo}
                    alt={humano.name}
                    fill
                    className={S.avatar}
                    sizes="(max-width: 640px) 80px, 80px"
                  />
                </div>
                <span className={S.card_name}>{humano.name}</span>
                <span className={S.card_role}>{humano.role}</span>
                <p className={S.card_description}>{humano.description}</p>
              </div>
            ))}
          </div>

          <button
            className={clsx(S.nav_btn, canNext && S['nav_btn--active'])}
            onClick={next}
            disabled={!canNext}
            aria-label="Próximo humano"
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

export default HumanosSection
