'use client';

import { useState } from 'react';
import Image from 'next/image';

const cutePhrases = [
  "Este é o melhor cachorro do mundo! 🐶",
  "Olha só essa fofura! 💕",
  "Muito amor em uma foto só! 🥰",
  "O cachorro mais lindo que você vai ver hoje! ✨",
  "Prepare-se para um ataque de fofura! 🌟",
  "Este cachorro roubou meu coração! ❤️",
  "Não resisti, tive que compartilhar! 🐾"
];

const jorelPhotos = [
  '/aquajorel.jpeg',
  '/20250916_165021.jpg',
  '/20251003_134941.jpg',
  '/20251004_212139.jpg',
  '/Screenshot_20250911_111559_Instagram.jpg'
];

export default function Home() {
  const [showDog, setShowDog] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    if (!showDog) {
      const randomPhrase = cutePhrases[Math.floor(Math.random() * cutePhrases.length)];
      setCurrentPhrase(randomPhrase);
      setShowDog(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % jorelPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + jorelPhotos.length) % jorelPhotos.length);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-4">
      <div className="text-center">
        {!showDog ? (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Tenho uma surpresa para você!
            </h1>
            <button
              onClick={handleClick}
              className="group relative px-12 py-6 bg-white text-purple-600 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:bg-purple-50"
            >
              <span className="relative z-10">Clique aqui! 🎁</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="mt-6 text-white text-lg md:text-xl drop-shadow">
              Vai valer a pena, eu prometo!
            </p>
          </div>
        ) : (
          <div className="animate-slide-up bg-white rounded-3xl p-8 shadow-2xl max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              {currentPhrase}
            </h2>

            <div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src={jorelPhotos[currentImageIndex]}
                  alt="Jorel - o beagle mais fofo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Navegação do Slider */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                aria-label="Foto anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                aria-label="Próxima foto"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores de foto */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {jorelPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Contador de fotos */}
            <p className="text-gray-500 text-sm">
              Foto {currentImageIndex + 1} de {jorelPhotos.length}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
