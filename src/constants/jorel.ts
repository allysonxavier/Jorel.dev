import type { ComponentType } from 'react'

import {
  FaBone,
  FaWalking,
  FaUtensils,
  FaPaw,
  FaBed,
} from 'react-icons/fa'

export const jorelPhotos = [
  '/aquajorel.jpeg',
  '/20250916_165021.jpg',
  '/20251004_212139.jpg',
  '/jorelzinho.jpeg',
]

export type SobreFeature = {
  icon: ComponentType
  title: string
  description: string
  variant: 'orange' | 'dark'
  photo: string
}

export const sobreFeatures: SobreFeature[] = [
  {
    icon: FaBone,
    title: 'Brincar com seus brinquedos',
    description: 'Jorel adora seus brinquedos favoritos e passa horas se divertindo',
    variant: 'orange',
    photo: '/jorelzinho.jpeg'
  },
  {
    icon: FaWalking,
    title: 'Passeios ao ar livre',
    description: 'Explorar novos lugares e cheirar tudo pelo caminho é sua paixão',
    variant: 'dark',
    photo: '/20250916_165021.jpg'
  },
  {
    icon: FaUtensils,
    title: 'Petiscos deliciosos',
    description: 'Nada deixa o Jorel mais feliz do que um petisco especial',
    variant: 'orange',
    photo: '/aquajorel.jpeg'
  },
  {
    icon: FaPaw,
    title: 'Fazer novos amigos',
    description: 'Jorel é super sociável e adora conhecer outros cachorros e pessoas',
    variant: 'dark',
    photo: '/20251004_212139.jpg'
  },
  {
    icon: FaBed,
    title: 'Dormir a tarde toda',
    description: 'Beagles elevaram a soneca à categoria de esporte — o Jorel consegue dormir em qualquer canto, de qualquer jeito, a qualquer hora',
    variant: 'orange',
    photo: '/jorelzinho.jpeg'
  }
]

export const momentosPhotos = [
  { src: '/aquajorel.jpeg', alt: 'Jorel no quintal' },
  { src: '/20250916_165021.jpg', alt: 'Jorel brincando' },
  { src: '/20251004_212139.jpg', alt: 'Jorel aventureiro' },
  { src: '/jorelzinho.jpeg', alt: 'Jorelzinho fofo' },
  {
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=800&fit=crop',
    alt: 'Beagle curioso'
  },
  {
    src: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600&h=800&fit=crop',
    alt: 'Beagle descansando'
  },
  {
    src: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=800&fit=crop',
    alt: 'Beagle feliz'
  },
  {
    src: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&h=800&fit=crop',
    alt: 'Beagle simpático'
  },
  {
    src: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=800&fit=crop',
    alt: 'Beagle na praia'
  }
]

export type Aumigo = {
  name: string
  breed: string
  age: string
  description: string
  photo: string
}

export const aumigos: Aumigo[] = [
  {
    name: 'Rex',
    breed: 'Labrador',
    age: '3 anos',
    description: 'Melhor amigo do parque, adora correr e brincar',
    photo: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=400&fit=crop'
  },
  {
    name: 'Luna',
    breed: 'Golden',
    age: '2 anos',
    description: 'Companheira de passeios e aventuras',
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop'
  },
  {
    name: 'Bob',
    breed: 'Beagle',
    age: '4 anos',
    description: 'Primo do Jorel, parceiro de travessuras',
    photo: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop'
  },
  {
    name: 'Nii',
    breed: 'Poodle',
    age: '1 ano',
    description: 'A mais elegante e animada da turma',
    photo: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop'
  },
  {
    name: 'Thor',
    breed: 'Husky',
    age: '5 anos',
    description: 'O mais imponente e leal, adora corridas longas',
    photo: 'https://images.unsplash.com/photo-1617895153857-82fe0c43aa28?w=400&h=400&fit=crop'
  },
  {
    name: 'Mel',
    breed: 'Dachshund',
    age: '2 anos',
    description: 'Pequena e corajosa, não tem medo de nada',
    photo: 'https://images.unsplash.com/photo-1518887668165-573c68c28bc5?w=400&h=400&fit=crop'
  }
]

export type HumanoAmigo = {
  name: string
  role: string
  description: string
  photo: string
}

export const humanosAmigos: HumanoAmigo[] = [
  {
    name: 'Maria Silva',
    role: 'Tutora · Melhor amiga',
    description: 'A pessoa mais importante na vida do Jorel, responsável por todo amor e cuidado',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&face'
  },
  {
    name: 'João Santos',
    role: 'Tio · Parceiro de brincadeiras',
    description: 'Sempre traz os melhores brinquedos e adora brincar com o Jorel',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&face'
  },
  {
    name: 'Ana Costa',
    role: 'Vizinha · Fornecedora de petiscos',
    description: 'Sempre tem um petisco especial guardado para quando o Jorel visita',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&face'
  },
  {
    name: 'Pedro Lima',
    role: 'Veterinário · Doutor do Jorel',
    description: 'O profissional de confiança que cuida da saúde do Jorel com muito carinho',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&face'
  },
  {
    name: 'Carla Mendes',
    role: 'Vizinha · Cuidadora nas férias',
    description: 'Cuida do Jorel com todo amor quando a família viaja',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&face'
  }
]

export type PetiscoItem = {
  label: string
  variant: 'orange' | 'dark'
}

export const petiscoItems: PetiscoItem[] = [
  { label: 'Petiscos naturais e saudáveis', variant: 'orange' },
  { label: 'Brinquedos novos para diversão', variant: 'dark' },
  { label: 'Cuidados veterinários', variant: 'orange' }
]

export const navLinks = [
  { label: 'Sobre o Jorel', href: '#sobre' },
  { label: 'Aumigos', href: '#aumigos' },
  { label: 'Humanos Amigos', href: '#humanos' },
  { label: 'Galeria', href: '#momentos' },
  { label: 'Pague um Petisco', href: '#petisco' }
]
