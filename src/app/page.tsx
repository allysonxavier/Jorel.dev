'use client';

import { useState } from 'react';

const cutePhrases = [
  "Este é o melhor cachorro do mundo! 🐶",
  "Olha só essa fofura! 💕",
  "Muito amor em uma foto só! 🥰",
  "O cachorro mais lindo que você vai ver hoje! ✨",
  "Prepare-se para um ataque de fofura! 🌟",
  "Este cachorro roubou meu coração! ❤️",
  "Cuteness overload! 🎉",
  "Não resisti, tive que compartilhar! 🐾"
];

export default function Home() {
  const [showDog, setShowDog] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState('');

  const handleClick = () => {
    if (!showDog) {
      const randomPhrase = cutePhrases[Math.floor(Math.random() * cutePhrases.length)];
      setCurrentPhrase(randomPhrase);
      setShowDog(true);
    }
  };

  const handleReset = () => {
    setShowDog(false);
    setCurrentPhrase('');
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

            <div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder para a foto do cachorro */}
              <div className="aspect-square bg-gradient-to-br from-yellow-200 to-pink-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl mb-4">🐕</p>
                  <p className="text-gray-700 text-lg font-medium">
                    Adicione a foto do seu cachorro aqui!
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Coloque a imagem em /public/cachorro.jpg
                  </p>
                </div>
              </div>
              {/* Descomente quando adicionar a foto:
              <Image
                src="/cachorro.jpg"
                alt="Meu cachorro fofo"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
              */}
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Ver de novo! 🔄
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
