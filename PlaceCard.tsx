--- src/components/PlaceCard.tsx (原始)
import React from 'react';
import { motion } from 'framer-motion';
import { Place } from '../data/places';
import { CornerOrnament } from './Decorations';

interface PlaceCardProps {
  place: Place;
  index: number;
  onClick: (place: Place) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Heritage': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M10 2L3 7V18H17V7L10 2Z" />
      <path d="M7 18V12H13V18" />
      <path d="M8 9H12" />
    </svg>
  ),
  'Nature': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M10 18V10" />
      <path d="M10 10C10 10 5 8 5 5C5 2 10 2 10 2C10 2 15 2 15 5C15 8 10 10 10 10Z" />
      <path d="M6 14C6 14 4 12 4 10C4 8 6 8 6 8" />
      <path d="M14 14C14 14 16 12 16 10C16 8 14 8 14 8" />
    </svg>
  ),
  'Architecture': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M3 18H17" />
      <path d="M4 18V8L10 3L16 8V18" />
      <path d="M8 18V13H12V18" />
      <circle cx="10" cy="9" r="2" />
    </svg>
  ),
  'Spiritual': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M10 2V5" />
      <path d="M10 5C7 5 5 8 5 11C5 14 7 16 10 18C13 16 15 14 15 11C15 8 13 5 10 5Z" />
      <circle cx="10" cy="11" r="2" />
    </svg>
  ),
  'Shopping': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M5 7H15L14 18H6L5 7Z" />
      <path d="M7 7V5C7 3 8 2 10 2C12 2 13 3 13 5V7" />
    </svg>
  ),
  'Science': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="2" />
      <path d="M10 3V5" />
      <path d="M10 15V17" />
      <path d="M3 10H5" />
      <path d="M15 10H17" />
    </svg>
  ),
  'Art & Culture': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M4 18L10 2L16 18" />
      <path d="M6 12H14" />
      <circle cx="10" cy="8" r="1.5" />
    </svg>
  ),
};

const PlaceCard: React.FC<PlaceCardProps> = ({ place, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onClick(place)}
      className="vintage-card cursor-pointer group rounded-sm"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={place.images[0]}
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ filter: 'sepia(15%) contrast(1.05) brightness(0.9)' }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark via-vintage-dark/30 to-transparent" />

        {/* Corner ornaments */}
        <div className="absolute top-2 left-2">
          <CornerOrnament position="tl" />
        </div>
        <div className="absolute top-2 right-2">
          <CornerOrnament position="tr" />
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-vintage-dark/80 border border-vintage-gold/40 px-2.5 py-1 rounded-sm">
          {categoryIcons[place.category]}
          <span className="text-[10px] font-[Cinzel] text-vintage-gold uppercase tracking-wider">
            {place.category}
          </span>
        </div>

        {/* Number badge */}
        <div className="absolute bottom-3 left-3 w-8 h-8 flex items-center justify-center border border-vintage-gold/60 bg-vintage-dark/70">
          <span className="font-[Cinzel] text-sm text-vintage-gold">{String(place.id).padStart(2, '0')}</span>
        </div>

        {/* Year badge */}
        <div className="absolute bottom-3 right-3">
          <span className="font-[Cormorant_Garamond] text-sm text-vintage-cream/70 italic">Est. {place.year}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 relative">
        {/* Top decorative line */}
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-vintage-gold/40 to-transparent" />

        <h3 className="font-[Cinzel] text-lg text-vintage-gold mb-1 group-hover:text-vintage-brass transition-colors duration-300">
          {place.name}
        </h3>
        <p className="font-[Cormorant_Garamond] text-sm text-vintage-cream/60 italic mb-3">
          {place.subtitle}
        </p>
        <p className="font-[Cormorant_Garamond] text-base text-vintage-cream/80 leading-relaxed line-clamp-3">
          {place.description}
        </p>

        {/* Bottom decorative element */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-vintage-gold/30 to-transparent" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
              stroke="#C5943A" strokeWidth="0.8" fill="none" opacity="0.5" />
          </svg>
          <span className="font-[Cinzel] text-[10px] text-vintage-gold/50 uppercase tracking-widest">
            Explore
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
              stroke="#C5943A" strokeWidth="0.8" fill="none" opacity="0.5" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-vintage-gold/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceCard;


+++ src/components/PlaceCard.tsx (修改后)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Place } from '../data/places';
import { CornerOrnament } from './Decorations';

interface PlaceCardProps {
  place: Place;
  index: number;
  onClick: (place: Place) => void;
}

const fallbackImage = "image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%231A0F0A' width='800' height='600'/%3E%3Crect fill='%234A2C17' x='50' y='50' width='700' height='500' rx='4'/%3E%3Cg fill='none' stroke='%23C5943A' stroke-width='1' opacity='0.4'%3E%3Ccircle cx='400' cy='250' r='80'/%3E%3Ccircle cx='400' cy='250' r='60'/%3E%3Ccircle cx='400' cy='250' r='40'/%3E%3Ccircle cx='400' cy='250' r='20'/%3E%3Cpath d='M400 170 L400 330'/%3E%3Cpath d='M320 250 L480 250'/%3E%3Cpath d='M343 193 L457 307'/%3E%3Cpath d='M457 193 L343 307'/%3E%3C/g%3E%3Ctext x='400' y='380' text-anchor='middle' fill='%23C5943A' font-family='serif' font-size='18' opacity='0.6'%3EBengaluru Heritage%3C/text%3E%3C/svg%3E";

const categoryIcons: Record<string, React.ReactNode> = {
  'Heritage': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M10 2L3 7V18H17V7L10 2Z" />
      <path d="M7 18V12H13V18" />
      <path d="M8 9H12" />
    </svg>
  ),
  'Nature': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M10 18V10" />
      <path d="M10 10C10 10 5 8 5 5C5 2 10 2 10 2C10 2 15 2 15 5C15 8 10 10 10 10Z" />
      <path d="M6 14C6 14 4 12 4 10C4 8 6 8 6 8" />
      <path d="M14 14C14 14 16 12 16 10C16 8 14 8 14 8" />
    </svg>
  ),
  'Architecture': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M3 18H17" />
      <path d="M4 18V8L10 3L16 8V18" />
      <path d="M8 18V13H12V18" />
      <circle cx="10" cy="9" r="2" />
    </svg>
  ),
  'Spiritual': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M10 2V5" />
      <path d="M10 5C7 5 5 8 5 11C5 14 7 16 10 18C13 16 15 14 15 11C15 8 13 5 10 5Z" />
      <circle cx="10" cy="11" r="2" />
    </svg>
  ),
  'Shopping': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M5 7H15L14 18H6L5 7Z" />
      <path d="M7 7V5C7 3 8 2 10 2C12 2 13 3 13 5V7" />
    </svg>
  ),
  'Science': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="2" />
      <path d="M10 3V5" />
      <path d="M10 15V17" />
      <path d="M3 10H5" />
      <path d="M15 10H17" />
    </svg>
  ),
  'Art & Culture': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C5943A" strokeWidth="1.2">
      <path d="M4 18L10 2L16 18" />
      <path d="M6 12H14" />
      <circle cx="10" cy="8" r="1.5" />
    </svg>
  ),
};

const PlaceCard: React.FC<PlaceCardProps> = ({ place, index, onClick }) => {
  const [imgSrc, setImgSrc] = useState(place.images[0]);

  const handleImageError = () => {
    setImgSrc(fallbackImage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onClick(place)}
      className="vintage-card cursor-pointer group rounded-sm"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={imgSrc}
          alt={place.name}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ filter: 'sepia(15%) contrast(1.05) brightness(0.9)' }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark via-vintage-dark/30 to-transparent" />

        {/* Corner ornaments */}
        <div className="absolute top-2 left-2">
          <CornerOrnament position="tl" />
        </div>
        <div className="absolute top-2 right-2">
          <CornerOrnament position="tr" />
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-vintage-dark/80 border border-vintage-gold/40 px-2.5 py-1 rounded-sm">
          {categoryIcons[place.category]}
          <span className="text-[10px] font-[Cinzel] text-vintage-gold uppercase tracking-wider">
            {place.category}
          </span>
        </div>

        {/* Number badge */}
        <div className="absolute bottom-3 left-3 w-8 h-8 flex items-center justify-center border border-vintage-gold/60 bg-vintage-dark/70">
          <span className="font-[Cinzel] text-sm text-vintage-gold">{String(place.id).padStart(2, '0')}</span>
        </div>

        {/* Year badge */}
        <div className="absolute bottom-3 right-3">
          <span className="font-[Cormorant_Garamond] text-sm text-vintage-cream/70 italic">Est. {place.year}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 relative">
        {/* Top decorative line */}
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-vintage-gold/40 to-transparent" />

        <h3 className="font-[Cinzel] text-lg text-vintage-gold mb-1 group-hover:text-vintage-brass transition-colors duration-300">
          {place.name}
        </h3>
        <p className="font-[Cormorant_Garamond] text-sm text-vintage-cream/60 italic mb-3">
          {place.subtitle}
        </p>
        <p className="font-[Cormorant_Garamond] text-base text-vintage-cream/80 leading-relaxed line-clamp-3">
          {place.description}
        </p>

        {/* Bottom decorative element */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-vintage-gold/30 to-transparent" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
              stroke="#C5943A" strokeWidth="0.8" fill="none" opacity="0.5" />
          </svg>
          <span className="font-[Cinzel] text-[10px] text-vintage-gold/50 uppercase tracking-widest">
            Explore
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
              stroke="#C5943A" strokeWidth="0.8" fill="none" opacity="0.5" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-vintage-gold/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceCard;
