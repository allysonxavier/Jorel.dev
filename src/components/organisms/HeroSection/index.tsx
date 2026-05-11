'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { jorelPhotos } from 'constants/jorel'

import { FaPaw } from 'react-icons/fa'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const INTERVAL_MS = 3500

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % jorelPhotos.length)
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={S.section} id="hero">
      <div className={S.inner}>
        <div className={S.content}>
          <div className={S.badge_wrapper}>
            <SectionBadge icon={<FaPaw />} label="Bem-vindo ao Jorelverso" light />
          </div>

          <h1 className={S.title}>
            <span className={S.title_orange}>Conheça o Jorel,</span>
            <span className={S.title_black}>o Beagle mais famoso</span>
          </h1>

          <p className={S.description}>
            Um universo dedicado ao cachorrinho mais adorável, suas aventuras,
            amigos peludos e momentos inesquecíveis. Explore a vida do Jorel!
          </p>
        </div>

        <div className={S.slideshow}>
          {jorelPhotos.map((src, i) => (
            <div key={src} className={clsx(S.slide, i === current && S['slide--active'])}>
              <Image
                src={src}
                alt={`Jorel foto ${i + 1}`}
                fill
                className={S.slide_image}
                priority={i === 0}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          ))}

          <div className={S.dots}>
            {jorelPhotos.map((_, i) => (
              <button
                key={i}
                className={clsx(S.dot, i === current && S['dot--active'])}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
