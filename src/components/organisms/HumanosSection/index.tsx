'use client'

import { useState } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { humanosAmigos } from 'constants/jorel'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const VISIBLE = 3

const HumanosSection = () => {
  const [offset, setOffset] = useState(0)

  const total = humanosAmigos.length
  const visible = humanosAmigos.slice(offset, offset + VISIBLE)

  const canPrev = offset > 0
  const canNext = offset + VISIBLE < total

  const prev = () => { if (canPrev) setOffset(o => o - 1) }
  const next = () => { if (canNext) setOffset(o => o + 1) }

  return (
    <section className={S.section} id="humanos">
      <div className={S.inner}>
        <div className={S.header}>
          <div className={S.header_left}>
            <SectionBadge icon="👥" label="Família" />
            <h2 className={S.title}>Humanos Amigos</h2>
            <p className={S.subtitle}>
              As pessoas especiais que fazem parte da vida do Jorel
            </p>
          </div>

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

        <div className={S.cards}>
          {visible.map(humano => (
            <div key={humano.name} className={S.card}>
              <div className={S.avatar_wrapper}>
                <Image
                  src={humano.photo}
                  alt={humano.name}
                  fill
                  className={S.avatar}
                  sizes="80px"
                />
              </div>
              <span className={S.card_name}>{humano.name}</span>
              <span className={S.card_role}>{humano.role}</span>
              <p className={S.card_description}>{humano.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HumanosSection
