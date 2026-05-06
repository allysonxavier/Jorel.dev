import { clsx } from 'clsx'

import { petiscoItems } from 'constants/jorel'

import SectionBadge from 'components/atoms/SectionBadge'

import S from './styles.module.css'

const PetiscoSection = () => (
  <section className={S.section} id="petisco">
    <div className={S.inner}>
      <div className={S.header}>
        <SectionBadge icon="🎁" label="Contribua" />
        <h2 className={S.title}>Me Pague um Petisco</h2>
        <p className={S.subtitle}>
          Quer fazer o dia do Jorel mais feliz? Contribua para seus petiscos favoritos!
        </p>
      </div>

      <div className={S.card}>
        <div className={S.card_text}>
          <h3 className={S.card_title}>
            Ajude o Jorel a ter mais petiscos!
          </h3>
          <p className={S.card_description}>
            Sua contribuição ajuda a manter o Jorel sempre feliz e bem alimentado
            com seus petiscos favoritos. Cada doação é muito apreciada e vai direto
            para a felicidade do nosso amigo peludo!
          </p>

          <ul className={S.items_list}>
            {petiscoItems.map(item => (
              <li key={item.label} className={S.item}>
                <div
                  className={clsx(
                    S.item_check,
                    S[`item_check--${item.variant}`]
                  )}
                >
                  ✓
                </div>
                <span className={S.item_label}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={S.qr_wrapper}>
          <div className={S.qr_card}>
            <div className={S.qr_placeholder}>📱</div>
            <span className={S.qr_label}>Escaneie para contribuir</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default PetiscoSection
