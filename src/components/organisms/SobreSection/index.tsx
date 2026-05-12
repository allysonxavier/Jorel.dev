'use client'

import { useState } from 'react'

import Image from 'next/image'

import { clsx } from 'clsx'

import { FaHeart } from 'react-icons/fa'

import { sobreFeatures } from 'constants/jorel'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const SobreSection = () => {
  const [selected, setSelected] = useState(0)

  const activePhoto = sobreFeatures[selected].photo

  return (
    <section className={S.section} id="sobre">
      <div className={S.inner}>
        <div className={S.header}>
          <SectionBadge icon={<FaHeart />} label="Conheça melhor" />
          <h2 className={S.title}>Sobre o Jorel</h2>
          <p className={S.subtitle}>
            Um Beagle cheio de personalidade, amor e muita energia para compartilhar
          </p>
        </div>

        <div className={S.content}>
          <div className={S.image_wrapper}>
            <Image
              key={activePhoto}
              src={activePhoto}
              alt="Jorel"
              fill
              className={S.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className={S.features_col}>
            <h3 className={S.features_title}>O que o Jorel ama fazer</h3>

            {/* Desktop: lista vertical */}
            <ul className={S.features_list}>
              {sobreFeatures.map((feature, i) => (
                <li
                  key={feature.title}
                  className={clsx(
                    S.feature_item,
                    i === selected && S['feature_item--active']
                  )}
                  onClick={() => setSelected(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setSelected(i)}
                >
                  <div className={clsx(S.feature_icon, S[`feature_icon--${feature.variant}`])}>
                    <feature.icon />
                  </div>
                  <div className={S.feature_text}>
                    <span className={S.feature_title}>{feature.title}</span>
                    <span className={S.feature_description}>{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile: ícones em linha com scroll + painel de detalhe */}
            <div className={S.features_mobile}>
              <div className={S.icons_scroll}>
                {sobreFeatures.map((feature, i) => (
                  <button
                    key={feature.title}
                    className={clsx(S.icon_btn, i === selected && S['icon_btn--active'])}
                    onClick={() => setSelected(i)}
                    aria-label={feature.title}
                  >
                    <div className={clsx(S.icon_circle, S[`icon_circle--${feature.variant}`], i === selected && S['icon_circle--selected'])}>
                      <feature.icon />
                    </div>
                    <span className={S.icon_label}>{feature.shortLabel}</span>
                  </button>
                ))}
              </div>

              <div className={S.detail_panel}>
                <span className={S.detail_title}>{sobreFeatures[selected].title}</span>
                <span className={S.detail_description}>{sobreFeatures[selected].description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreSection
