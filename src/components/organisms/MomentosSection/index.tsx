'use client'

import { useState } from 'react'

import useIsMobile from 'hooks/useIsMobile'

import Image from 'next/image'

import { clsx } from 'clsx'

import { FaCamera } from 'react-icons/fa'

import { momentosPhotos } from 'constants/jorel'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const VISIBLE = 3

const MomentosSection = () => {
  const [offset, setOffset] = useState(0)
  const isMobile = useIsMobile()

  const total = momentosPhotos.length
  const photos = momentosPhotos.slice(offset, offset + VISIBLE)

  const canPrev = offset > 0
  const canNext = isMobile ? offset + 1 < total : offset + VISIBLE < total

  const prev = () => { if (canPrev) setOffset(o => o - 1) }
  const next = () => { if (canNext) setOffset(o => o + 1) }

  return (
    <section className={S.section} id="momentos">
      <div className={S.inner}>
        <div className={S.header}>
          <SectionBadge icon={<FaCamera />} label="Galeria" light />
          <h2 className={S.title}>Momentos do Jorel</h2>
          <p className={S.subtitle}>
            Confira os melhores momentos e aventuras do nosso amigo de quatro patas
          </p>
        </div>

        <div className={S.carousel}>
          <button
            className={clsx(S.nav_btn, canPrev && S['nav_btn--active'])}
            onClick={prev}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            ←
          </button>

          <div className={S.photos}>
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
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        <p className={S.counter}>
          {offset + 1} de {total} fotos
        </p>
      </div>
    </section>
  )
}

export default MomentosSection
