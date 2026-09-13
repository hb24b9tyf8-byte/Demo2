--- src/components/PlaceDetail.tsx (原始)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Place } from '../data/places';
import { OrnateDivider, CornerOrnament } from './Decorations';

interface PlaceDetailProps {
  place: Place | null;
  isOpen: boolean;
  onClose: () => void;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ place, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!place) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-vintage-dark via-[#1F1410] to-vintage-dark border border-vintage-gold/30 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 z-10"><CornerOrnament position="tl" /></div>
            <div className="absolute top-3 right-3 z-10"><CornerOrnament position="tr" /></div>
            <div className="absolute bottom-3 left-3 z-10"><CornerOrnament position="bl" /></div>
            <div className="absolute bottom-3 right-3 z-10"><CornerOrnament position="br" /></div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-vintage-gold/40 bg-vintage-dark/80 hover:bg-vintage-gold/20 transition-colors duration-300 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C5943A" strokeWidth="1.5">
                <path d="M4 4L12 12M12 4L4 12" />
              </svg>
            </button>

            {/* Header Section */}
            <div className="relative pt-8 pb-6 px-8 text-center border-b border-vintage-gold/20">
              {/* Decorative top */}
              <div className="flex justify-center mb-4">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                  <path d="M30 2L35 10L43 8L38 15L45 20L37 20L35 28L30 22L25 28L23 20L15 20L22 15L17 8L25 10L30 2Z"
                    stroke="#C5943A" strokeWidth="1" fill="none" />
                  <circle cx="30" cy="15" r="3" fill="#C5943A" opacity="0.5" />
                </svg>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-[Cinzel_Decorative] text-2xl md:text-4xl text-vintage-gold mb-2"
              >
                {place.name}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-[Cormorant_Garamond] text-lg text-vintage-cream/60 italic"
              >
                {place.subtitle}
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4"
              >
                <OrnateDivider className="max-w-sm mx-auto" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-3 flex items-center justify-center gap-4"
              >
                <span className="font-[Cinzel] text-xs text-vintage-gold/60 uppercase tracking-widest">
                  {place.category}
                </span>
                <span className="w-1 h-1 bg-vintage-gold/40 rounded-full" />
                <span className="font-[Cormorant_Garamond] text-sm text-vintage-cream/50 italic">
                  Established {place.year}
                </span>
              </motion.div>
            </div>

            {/* Image Gallery */}
            <div className="px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Main Image */}
                <div className="relative photo-frame mb-4 aspect-[16/9] overflow-hidden rounded-sm">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={place.images[activeImage]}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark/40 to-transparent" />

                  {/* Image navigation arrows */}
                  <button
                    onClick={() => setActiveImage((prev) => (prev - 1 + place.images.length) % place.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-vintage-dark/60 border border-vintage-gold/30 hover:bg-vintage-gold/20 transition-all duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#C5943A" strokeWidth="1.5">
                      <path d="M9 3L5 7L9 11" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev + 1) % place.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-vintage-dark/60 border border-vintage-gold/30 hover:bg-vintage-gold/20 transition-all duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#C5943A" strokeWidth="1.5">
                      <path d="M5 3L9 7L5 11" />
                    </svg>
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-3 right-3 bg-vintage-dark/70 border border-vintage-gold/30 px-3 py-1">
                    <span className="font-[Cinzel] text-xs text-vintage-gold">
                      {activeImage + 1} / {place.images.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="flex gap-3 justify-center">
                  {place.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 h-14 overflow-hidden border-2 transition-all duration-300 ${
                        idx === activeImage
                          ? 'border-vintage-gold shadow-lg shadow-vintage-gold/20'
                          : 'border-vintage-gold/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* History Section */}
            <div className="px-8 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-vintage-gold/30" />
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C5943A" strokeWidth="1">
                      <path d="M8 1V3M8 13V15M1 8H3M13 8H15M3.5 3.5L5 5M11 11L12.5 12.5M3.5 12.5L5 11M11 5L12.5 3.5" />
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                    <h3 className="font-[Cinzel] text-lg text-vintage-gold tracking-wider uppercase">
                      Historical Chronicle
                    </h3>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C5943A" strokeWidth="1">
                      <path d="M8 1V3M8 13V15M1 8H3M13 8H15M3.5 3.5L5 5M11 11L12.5 12.5M3.5 12.5L5 11M11 5L12.5 3.5" />
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-vintage-gold/30" />
                </div>

                {/* History content */}
                <div className="relative p-6 border border-vintage-gold/15 bg-vintage-dark/50 rounded-sm">
                  {/* Decorative quote marks */}
                  <svg className="absolute top-3 left-3 opacity-20" width="24" height="24" viewBox="0 0 24 24" fill="#C5943A">
                    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                  </svg>

                  <p className="font-[Cormorant_Garamond] text-lg md:text-xl text-vintage-cream/85 leading-relaxed pl-4">
                    {place.history}
                  </p>

                  {/* Bottom decorative element */}
                  <div className="mt-6 flex justify-center">
                    <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
                      <path d="M0 10 Q25 0 50 10 Q75 20 100 10" stroke="#C5943A" strokeWidth="0.5" opacity="0.4" />
                      <circle cx="50" cy="10" r="3" stroke="#C5943A" strokeWidth="0.8" fill="none" opacity="0.4" />
                      <circle cx="50" cy="10" r="1" fill="#C5943A" opacity="0.4" />
                    </svg>
                  </div>
                </div>

                {/* Additional info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 border border-vintage-gold/15 bg-vintage-dark/30 text-center rounded-sm">
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5943A" strokeWidth="1.2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <p className="font-[Cinzel] text-xs text-vintage-gold uppercase tracking-wider">Established</p>
                    <p className="font-[Cormorant_Garamond] text-lg text-vintage-cream mt-1">{place.year}</p>
                  </div>
                  <div className="p-4 border border-vintage-gold/15 bg-vintage-dark/30 text-center rounded-sm">
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5943A" strokeWidth="1.2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    <p className="font-[Cinzel] text-xs text-vintage-gold uppercase tracking-wider">Category</p>
                    <p className="font-[Cormorant_Garamond] text-lg text-vintage-cream mt-1">{place.category}</p>
                  </div>
                  <div className="p-4 border border-vintage-gold/15 bg-vintage-dark/30 text-center rounded-sm">
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5943A" strokeWidth="1.2">
                      <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-[Cinzel] text-xs text-vintage-gold uppercase tracking-wider">Location</p>
                    <p className="font-[Cormorant_Garamond] text-lg text-vintage-cream mt-1">Bengaluru</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-6">
              <div className="flex items-center justify-center">
                <button
                  onClick={onClose}
                  className="vintage-btn rounded-sm"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaceDetail;


+++ src/components/PlaceDetail.tsx (修改后)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Place } from '../data/places';
import { OrnateDivider, CornerOrnament } from './Decorations';

interface PlaceDetailProps {
  place: Place | null;
  isOpen: boolean;
  onClose: () => void;
}

const fallbackImage = "image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%231A0F0A' width='800' height='600'/%3E%3Crect fill='%234A2C17' x='50' y='50' width='700' height='500' rx='4'/%3E%3Cg fill='none' stroke='%23C5943A' stroke-width='1' opacity='0.4'%3E%3Ccircle cx='400' cy='250' r='80'/%3E%3Ccircle cx='400' cy='250' r='60'/%3E%3Ccircle cx='400' cy='250' r='40'/%3E%3Ccircle cx='400' cy='250' r='20'/%3E%3Cpath d='M400 170 L400 330'/%3E%3Cpath d='M320 250 L480 250'/%3E%3Cpath d='M343 193 L457 307'/%3E%3Cpath d='M457 193 L343 307'/%3E%3C/g%3E%3Ctext x='400' y='380' text-anchor='middle' fill='%23C5943A' font-family='serif' font-size='18' opacity='0.6'%3EBengaluru Heritage%3C/text%3E%3C/svg%3E";

const PlaceDetail: React.FC<PlaceDetailProps> = ({ place, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  if (!place) return null;

  const getImageSrc = (index: number) => {
    if (failedImages.has(index)) return fallbackImage;
    return place.images[index];
  };

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set([...prev, index]));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-vintage-dark via-[#1F1410] to-vintage-dark border border-vintage-gold/30 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 z-10"><CornerOrnament position="tl" /></div>
            <div className="absolute top-3 right-3 z-10"><CornerOrnament position="tr" /></div>
            <div className="absolute bottom-3 left-3 z-10"><CornerOrnament position="bl" /></div>
            <div className="absolute bottom-3 right-3 z-10"><CornerOrnament position="br" /></div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-vintage-gold/40 bg-vintage-dark/80 hover:bg-vintage-gold/20 transition-colors duration-300 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C5943A" strokeWidth="1.5">
                <path d="M4 4L12 12M12 4L4 12" />
              </svg>
            </button>

            {/* Header Section */}
            <div className="relative pt-8 pb-6 px-8 text-center border-b border-vintage-gold/20">
              {/* Decorative top */}
              <div className="flex justify-center mb-4">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                  <path d="M30 2L35 10L43 8L38 15L45 20L37 20L35 28L30 22L25 28L23 20L15 20L22 15L17 8L25 10L30 2Z"
                    stroke="#C5943A" strokeWidth="1" fill="none" />
                  <circle cx="30" cy="15" r="3" fill="#C5943A" opacity="0.5" />
                </svg>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-[Cinzel_Decorative] text-2xl md:text-4xl text-vintage-gold mb-2"
              >
                {place.name}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-[Cormorant_Garamond] text-lg text-vintage-cream/60 italic"
              >
                {place.subtitle}
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4"
              >
                <OrnateDivider className="max-w-sm mx-auto" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-3 flex items-center justify-center gap-4"
              >
                <span className="font-[Cinzel] text-xs text-vintage-gold/60 uppercase tracking-widest">
                  {place.category}
                </span>
                <span className="w-1 h-1 bg-vintage-gold/40 rounded-full" />
                <span className="font-[Cormorant_Garamond] text-sm text-vintage-cream/50 italic">
                  Established {place.year}
                </span>
              </motion.div>
            </div>

            {/* Image Gallery */}
            <div className="px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Main Image */}
                <div className="relative photo-frame mb-4 aspect-[16/9] overflow-hidden rounded-sm">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={getImageSrc(activeImage)}
                    alt={place.name}
                    onError={() => handleImageError(activeImage)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark/40 to-transparent" />

                  {/* Image navigation arrows */}
                  <button
                    onClick={() => setActiveImage((prev) => (prev - 1 + place.images.length) % place.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-vintage-dark/60 border border-vintage-gold/30 hover:bg-vintage-gold/20 transition-all duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#C5943A" strokeWidth="1.5">
                      <path d="M9 3L5 7L9 11" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev + 1) % place.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-vintage-dark/60 border border-vintage-gold/30 hover:bg-vintage-gold/20 transition-all duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#C5943A" strokeWidth="1.5">
                      <path d="M5 3L9 7L5 11" />
                    </svg>
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-3 right-3 bg-vintage-dark/70 border border-vintage-gold/30 px-3 py-1">
                    <span className="font-[Cinzel] text-xs text-vintage-gold">
                      {activeImage + 1} / {place.images.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="flex gap-3 justify-center">
                  {place.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 h-14 overflow-hidden border-2 transition-all duration-300 ${
                        idx === activeImage
                          ? 'border-vintage-gold shadow-lg shadow-vintage-gold/20'
                          : 'border-vintage-gold/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={getImageSrc(idx)}
                        alt=""
                        onError={() => handleImageError(idx)}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* History Section */}
            <div className="px-8 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-vintage-gold/30" />
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C5943A" strokeWidth="1">
                      <path d="M8 1V3M8 13V15M1 8H3M13 8H15M3.5 3.5L5 5M11 11L12.5 12.5M3.5 12.5L5 11M11 5L12.5 3.5" />
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                    <h3 className="font-[Cinzel] text-lg text-vintage-gold tracking-wider uppercase">
                      Historical Chronicle
                    </h3>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C5943A" strokeWidth="1">
                      <path d="M8 1V3M8 13V15M1 8H3M13 8H15M3.5 3.5L5 5M11 11L12.5 12.5M3.5 12.5L5 11M11 5L12.5 3.5" />
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-vintage-gold/30" />
                </div>

                {/* History content */}
                <div className="relative p-6 border border-vintage-gold/15 bg-vintage-dark/50 rounded-sm">
                  {/* Decorative quote marks */}
                  <svg className="absolute top-3 left-3 opacity-20" width="24" height="24" viewBox="0 0 24 24" fill="#C5943A">
                    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                  </svg>

                  <p className="font-[Cormorant_Garamond] text-lg md:text-xl text-vintage-cream/85 leading-relaxed pl-4">
                    {place.history}
                  </p>

                  {/* Bottom decorative element */}
                  <div className="mt-6 flex justify-center">
                    <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
                      <path d="M0 10 Q25 0 50 10 Q75 20 100 10" stroke="#C5943A" strokeWidth="0.5" opacity="0.4" />
                      <circle cx="50" cy="10" r="3" stroke="#C5943A" strokeWidth="0.8" fill="none" opacity="0.4" />
                      <circle cx="50" cy="10" r="1" fill="#C5943A" opacity="0.4" />
                    </svg>
                  </div>
                </div>

                {/* Additional info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 border border-vintage-gold/15 bg-vintage-dark/30 text-center rounded-sm">
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5943A" strokeWidth="1.2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <p className="font-[Cinzel] text-xs text-vintage-gold uppercase tracking-wider">Established</p>
                    <p className="font-[Cormorant_Garamond] text-lg text-vintage-cream mt-1">{place.year}</p>
                  </div>
                  <div className="p-4 border border-vintage-gold/15 bg-vintage-dark/30 text-center rounded-sm">
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5943A" strokeWidth="1.2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    <p className="font-[Cinzel] text-xs text-vintage-gold uppercase tracking-wider">Category</p>
                    <p className="font-[Cormorant_Garamond] text-lg text-vintage-cream mt-1">{place.category}</p>
                  </div>
                  <div className="p-4 border border-vintage-gold/15 bg-vintage-dark/30 text-center rounded-sm">
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5943A" strokeWidth="1.2">
                      <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-[Cinzel] text-xs text-vintage-gold uppercase tracking-wider">Location</p>
                    <p className="font-[Cormorant_Garamond] text-lg text-vintage-cream mt-1">Bengaluru</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-6">
              <div className="flex items-center justify-center">
                <button
                  onClick={onClose}
                  className="vintage-btn rounded-sm"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaceDetail;
