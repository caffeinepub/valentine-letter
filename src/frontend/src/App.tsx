import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Envelope */}
      {!isOpen && (
        <button
          onClick={handleOpenEnvelope}
          className="group relative w-full max-w-md aspect-[3/2] bg-gradient-to-br from-rose-500 via-rose-600 to-pink-600 rounded-3xl shadow-2xl hover:shadow-rose-500/30 transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-400/50"
          aria-label="Open Valentine's letter"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              💌
            </div>
            <span className="text-2xl font-semibold tracking-wide group-hover:tracking-wider transition-all duration-300">
              Click to Open
            </span>
          </div>
          
          {/* Decorative hearts */}
          <div className="absolute top-4 right-4 text-white/20 group-hover:text-white/40 transition-colors duration-300">
            <Heart className="w-8 h-8" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 left-4 text-white/20 group-hover:text-white/40 transition-colors duration-300">
            <Heart className="w-6 h-6" fill="currentColor" />
          </div>
        </button>
      )}

      {/* Letter */}
      {isOpen && (
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border border-rose-100">
            {/* Decorative header */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
                <Heart className="w-8 h-8 text-rose-600" fill="currentColor" />
                <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
              </div>
            </div>

            {/* Letter content */}
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p className="text-lg">
                I know you said you didn't want me buying you anything,
              </p>
              <p className="text-lg">
                so I wanted to write this instead, because it actually comes from me.
              </p>
              <p className="text-lg">
                Since we met on November 13th and started dating on New Year's, you've truly become
              </p>
              <p className="text-lg">
                someone incredibly special to me. You make me laugh, brighten my days, and I honestly
              </p>
              <p className="text-lg">
                just enjoy every single moment I get to spend with you.
              </p>
              <p className="text-lg">
                I appreciate you, I appreciate us, and I'm so glad you're mine.
              </p>
              <p className="text-xl font-semibold text-rose-600 mt-8">
                Happy Valentine's Day, bae ❤️
              </p>
              <p className="text-lg italic text-gray-600 mt-6">
                From Batman, aka the king, aka Raaji
              </p>
            </div>

            {/* Decorative footer */}
            <div className="flex justify-center mt-12 pt-8 border-t border-rose-100">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-rose-400"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-600">
        <p className="flex items-center justify-center gap-1">
          Built with <Heart className="w-4 h-4 text-rose-500" fill="currentColor" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-letter'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1 text-gray-500">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
