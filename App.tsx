--- src/App.tsx (原始)
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import OpeningAnimation from './components/OpeningAnimation';
import PlaceCard from './components/PlaceCard';
import PlaceDetail from './components/PlaceDetail';
import { places, Place } from './data/places';
import { OrnateDivider, MandalaDecoration, LotusMotif, PaisleyMotif, DiamondPattern, ArchDecoration } from './components/Decorations';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlace(null), 300);
  };

  return (
    <div className="min-h-screen bg-vintage-dark paper-texture relative overflow-x-hidden">
      {/* Opening Animation */}
      {!showContent && <OpeningAnimation onComplete={handleAnimationComplete} />}

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large mandala in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <MandalaDecoration size={800} />
        </div>
        {/* Paisley patterns scattered */}
        <div className="absolute top-20 left-10 opacity-[0.04]">
          <PaisleyMotif size={80} />
        </div>
        <div className="absolute top-1/3 right-10 opacity-[0.04]">
          <PaisleyMotif size={60} />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-[0.04]">
          <PaisleyMotif size={70} />
        </div>
        <div className="absolute bottom-1/3 right-20 opacity-[0.04]">
          <LotusMotif size={80} />
        </div>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="relative z-10">
          {/* Header */}
          <header className="relative py-12 md:py-20 text-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-vintage-maroon/10 via-transparent to-transparent" />

            {/* Animated decorative arch */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-6"
            >
              <ArchDecoration />
            </motion.div>

            {/* Temple top decoration */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center mb-4"
            >
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                <path d="M40 5 L43 12 L50 15 L53 22 L56 32 L58 40 L60 48 L20 48 L22 40 L24 32 L27 22 L30 15 L37 12 L40 5Z"
                  stroke="#C5943A" strokeWidth="1" fill="none" opacity="0.6" />
                <ellipse cx="40" cy="5" rx="3" ry="3" stroke="#C5943A" strokeWidth="1" fill="none" opacity="0.6" />
                <line x1="40" y1="2" x2="40" y2="0" stroke="#C5943A" strokeWidth="1" opacity="0.6" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="font-[Cinzel_Decorative] text-3xl md:text-5xl lg:text-6xl text-vintage-gold mb-3 animate-shimmer">
                Bengaluru
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="font-[Cormorant_Garamond] text-xl md:text-2xl text-vintage-cream/70 italic tracking-wide">
                The Vintage Heritage Trail
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-6 max-w-lg mx-auto"
            >
              <OrnateDivider />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-[Cormorant_Garamond] text-base md:text-lg text-vintage-cream/50 mt-4 max-w-2xl mx-auto px-4 leading-relaxed"
            >
              A curated journey through the timeless treasures of the Garden City,
              where every corner whispers tales of centuries past.
            </motion.p>

            {/* Diamond pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <DiamondPattern />
            </motion.div>
          </header>

          {/* Places Grid */}
          <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-vintage-gold/50" />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" stroke="#C5943A" strokeWidth="1" fill="none" transform="rotate(45 10 10)" />
                  <circle cx="10" cy="10" r="2" fill="#C5943A" opacity="0.5" />
                </svg>
                <h2 className="font-[Cinzel] text-xl md:text-2xl text-vintage-gold tracking-wider uppercase">
                  Twenty Wonders
                </h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" stroke="#C5943A" strokeWidth="1" fill="none" transform="rotate(45 10 10)" />
                  <circle cx="10" cy="10" r="2" fill="#C5943A" opacity="0.5" />
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-vintage-gold/50" />
              </div>
              <p className="font-[Cormorant_Garamond] text-base text-vintage-cream/40 italic">
                Click upon any treasure to unveil its story
              </p>
            </motion.div>

            {/* Grid of places */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {places.map((place, index) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  index={index}
                  onClick={handlePlaceClick}
                />
              ))}
            </div>
          </main>

          {/* Footer */}
          <footer className="relative py-16 border-t border-vintage-gold/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
              {/* Decorative lotus */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <LotusMotif size={60} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-[Cinzel] text-lg text-vintage-gold tracking-wider mb-3">
                  Bengaluru Heritage Trail
                </h3>
                <p className="font-[Cormorant_Garamond] text-base text-vintage-cream/40 italic mb-6">
                  Preserving the stories of a city that bridges centuries
                </p>
                <OrnateDivider className="max-w-xs mx-auto" />
                <p className="font-[Cormorant_Garamond] text-sm text-vintage-cream/30 mt-6">
                  A tribute to the Garden City's timeless heritage
                </p>
              </motion.div>
            </div>
          </footer>
        </div>
      )}

      {/* Place Detail Modal */}
      <PlaceDetail
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;


+++ src/App.tsx (修改后)
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import OpeningAnimation from './components/OpeningAnimation';
import PlaceCard from './components/PlaceCard';
import PlaceDetail from './components/PlaceDetail';
import { places, Place } from './data/places';
import { OrnateDivider, MandalaDecoration, LotusMotif, PaisleyMotif, DiamondPattern, ArchDecoration } from './components/Decorations';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlace(null), 300);
  };

  return (
    <div className="min-h-screen vintage-bg-complex relative overflow-x-hidden">
      {/* Opening Animation */}
      {!showContent && <OpeningAnimation onComplete={handleAnimationComplete} />}

      {/* Complex Vintage Indian Background Layers */}
      <div className="bg-mandala-layer" />
      <div className="bg-paisley-layer" />
      <div className="bg-lattice-layer" />
      <div className="bg-floral-border-top" />
      <div className="bg-floral-border-bottom" />
      <div className="bg-side-border-left" />
      <div className="bg-side-border-right" />
      <div className="bg-grain" />
      <div className="bg-vignette" />

      {/* Additional decorative SVG elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large mandala in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
          <MandalaDecoration size={800} />
        </div>
        {/* Paisley patterns scattered */}
        <div className="absolute top-20 left-10 opacity-[0.05]">
          <PaisleyMotif size={80} />
        </div>
        <div className="absolute top-1/3 right-10 opacity-[0.05]">
          <PaisleyMotif size={60} />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-[0.05]">
          <PaisleyMotif size={70} />
        </div>
        <div className="absolute bottom-1/3 right-20 opacity-[0.05]">
          <LotusMotif size={80} />
        </div>
        {/* Additional corner decorations */}
        <div className="absolute top-10 right-10 opacity-[0.06]">
          <LotusMotif size={100} />
        </div>
        <div className="absolute bottom-20 left-10 opacity-[0.06]">
          <MandalaDecoration size={300} />
        </div>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="relative z-10">
          {/* Header */}
          <header className="relative py-12 md:py-20 text-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-vintage-maroon/10 via-transparent to-transparent" />

            {/* Animated decorative arch */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-6"
            >
              <ArchDecoration />
            </motion.div>

            {/* Temple top decoration */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center mb-4"
            >
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                <path d="M40 5 L43 12 L50 15 L53 22 L56 32 L58 40 L60 48 L20 48 L22 40 L24 32 L27 22 L30 15 L37 12 L40 5Z"
                  stroke="#C5943A" strokeWidth="1" fill="none" opacity="0.6" />
                <ellipse cx="40" cy="5" rx="3" ry="3" stroke="#C5943A" strokeWidth="1" fill="none" opacity="0.6" />
                <line x1="40" y1="2" x2="40" y2="0" stroke="#C5943A" strokeWidth="1" opacity="0.6" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="font-[Cinzel_Decorative] text-3xl md:text-5xl lg:text-6xl text-vintage-gold mb-3 animate-shimmer">
                Bengaluru
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="font-[Cormorant_Garamond] text-xl md:text-2xl text-vintage-cream/70 italic tracking-wide">
                The Vintage Heritage Trail
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-6 max-w-lg mx-auto"
            >
              <OrnateDivider />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-[Cormorant_Garamond] text-base md:text-lg text-vintage-cream/50 mt-4 max-w-2xl mx-auto px-4 leading-relaxed"
            >
              A curated journey through the timeless treasures of the Garden City,
              where every corner whispers tales of centuries past.
            </motion.p>

            {/* Diamond pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <DiamondPattern />
            </motion.div>
          </header>

          {/* Places Grid */}
          <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-vintage-gold/50" />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" stroke="#C5943A" strokeWidth="1" fill="none" transform="rotate(45 10 10)" />
                  <circle cx="10" cy="10" r="2" fill="#C5943A" opacity="0.5" />
                </svg>
                <h2 className="font-[Cinzel] text-xl md:text-2xl text-vintage-gold tracking-wider uppercase">
                  Twenty Wonders
                </h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" stroke="#C5943A" strokeWidth="1" fill="none" transform="rotate(45 10 10)" />
                  <circle cx="10" cy="10" r="2" fill="#C5943A" opacity="0.5" />
                </svg>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-vintage-gold/50" />
              </div>
              <p className="font-[Cormorant_Garamond] text-base text-vintage-cream/40 italic">
                Click upon any treasure to unveil its story
              </p>
            </motion.div>

            {/* Grid of places */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {places.map((place, index) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  index={index}
                  onClick={handlePlaceClick}
                />
              ))}
            </div>
          </main>

          {/* Footer */}
          <footer className="relative py-16 border-t border-vintage-gold/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
              {/* Decorative lotus */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <LotusMotif size={60} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-[Cinzel] text-lg text-vintage-gold tracking-wider mb-3">
                  Bengaluru Heritage Trail
                </h3>
                <p className="font-[Cormorant_Garamond] text-base text-vintage-cream/40 italic mb-6">
                  Preserving the stories of a city that bridges centuries
                </p>
                <OrnateDivider className="max-w-xs mx-auto" />
                <p className="font-[Cormorant_Garamond] text-sm text-vintage-cream/30 mt-6">
                  A tribute to the Garden City's timeless heritage
                </p>
              </motion.div>
            </div>
          </footer>
        </div>
      )}

      {/* Place Detail Modal */}
      <PlaceDetail
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
