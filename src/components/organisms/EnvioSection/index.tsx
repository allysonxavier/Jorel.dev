'use client'

import { useState } from 'react'

import { FaCamera } from 'react-icons/fa'

import Button from 'components/atoms/Button'

import S from './styles.module.css'

const EnvioSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    dogName: '',
    breed: '',
    story: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Foto enviada! O Jorel agradece 🐾')
  }

  return (
    <section className={S.section} id="envio">
      <div className={S.inner}>
        <div className={S.header}>
          <div className={S.badge}><FaCamera /> Participe</div>
          <h2 className={S.title}>Envie a Foto do Seu Cachorro</h2>
          <p className={S.subtitle}>
            Tem um cachorrinho especial? Compartilhe uma foto e faça parte da
            comunidade Jorelverso!
          </p>
        </div>

        <div className={S.form_card}>
          <form onSubmit={handleSubmit}>
            <div className={S.row}>
              <div className={S.field}>
                <label className={S.label} htmlFor="name">
                  Seu Nome
                </label>
                <input
                  id="name"
                  name="name"
                  className={S.input}
                  placeholder="Digite seu nome"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={S.field}>
                <label className={S.label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={S.input}
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={S.field}>
              <label className={S.label} htmlFor="dogName">
                Nome do Cachorro
              </label>
              <input
                id="dogName"
                name="dogName"
                className={S.input}
                placeholder="Nome do seu amigo peludo"
                value={form.dogName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={S.field}>
              <label className={S.label} htmlFor="breed">
                Raça
              </label>
              <input
                id="breed"
                name="breed"
                className={S.input}
                placeholder="Qual a raça?"
                value={form.breed}
                onChange={handleChange}
              />
            </div>

            <div className={S.field}>
              <label className={S.label} htmlFor="story">
                Conte sobre seu cachorro
              </label>
              <textarea
                id="story"
                name="story"
                className={S.textarea}
                placeholder="Compartilhe uma história ou curiosidade..."
                value={form.story}
                onChange={handleChange}
              />
            </div>

            <div className={S.field}>
              <label className={S.label}>Upload da Foto</label>
              <div className={S.upload_area}>
                <div className={S.upload_icon}>☁️</div>
                <span className={S.upload_label}>
                  Clique para fazer upload ou arraste a foto aqui
                </span>
                <span className={S.upload_hint}>PNG, JPG até 10MB</span>
              </div>
            </div>

            <div className={S.submit_wrapper}>
              <Button
                type="submit"
                label="Enviar Foto 🐾"
                size="large"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EnvioSection
