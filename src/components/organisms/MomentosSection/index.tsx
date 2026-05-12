'use client'

import { useState } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { FaCamera } from 'react-icons/fa'

import { momentosPhotos } from 'constants/jorel'

import useIsMobile from 'hooks/useIsMobile'
import useSwipe from 'hooks/useSwipe'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const VISIBLE = 3

const MomentosSection = () => {
  const [offset, setOffset] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const isMobile = useIsMobile()

  const total = momentosPhotos.length
  const photos = momentosPhotos.slice(offset, offset + VISIBLE)

  const canPrev = offset > 0
  const canNext = isMobile ? offset + 1 < total : offset + VISIBLE < total

  const prev = () => { if (canPrev) { setDirection('prev'); setOffset(o => isMobile ? o - 1 : Math.max(0, o - VISIBLE)) } }
  const next = () => { if (canNext) { setDirection('next'); setOffset(o => isMobile ? o + 1 : Math.min(total - VISIBLE, o + VISIBLE)) } }

  const swipeHandlers = useSwipe(prev, next)

  const counterText = isMobile
    ? `${offset + 1} de ${total} fotos`
    : `${offset + 1}–${Math.min(offset + VISIBLE, total)} de ${total} fotos`

  return (
    <section className={S.section} id="momentos" aria-labelledby="momentos-title">
      <div className={S.inner}>
        <div className={S.header}>
          <SectionBadge icon={<FaCamera />} label="Galeria" light />
          <h2 className={S.title} id="momentos-title">Momentos do Jorel</h2>
          <p className={S.subtitle}>
            Confira os melhores momentos e aventuras do nosso amigo de quatro patas
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
            aria-label="Foto anterior"
          >
            ←
          </button>

          <div
            key={offset}
            className={clsx(S.photos, direction === 'next' ? S['photos--next'] : S['photos--prev'])}
          >
            {photos.map((photo, i) => (
              <div key={`${photo.src}-${offset + i}`} className={S.photo_wrapper}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={S.photo}
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <button
            className={clsx(S.nav_btn, canNext && S['nav_btn--active'])}
            onClick={next}
            disabled={!canNext}
            aria-label="Próxima foto"
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

export default MomentosSection
