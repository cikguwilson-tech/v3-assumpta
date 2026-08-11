import React from 'react';
import { BookOpen, Bell, Volume2, VolumeX } from 'lucide-react';
import { DrawerType } from '../types';

interface HeaderProps {
  activeDrawer: DrawerType;
  onOpenDrawer: (type: DrawerType) => void;
  bookletCount: number;
  isAudioMuted?: boolean;
  onToggleAudio?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeDrawer,
  onOpenDrawer,
  bookletCount,
  isAudioMuted,
  onToggleAudio,
}) => {
  return (
    <header
      id="main-liturgical-header"
      className="relative z-20 w-full flex items-center justify-between transition-all duration-300"
      style={{
        paddingInline: 'var(--pad-x)',
        paddingTop: 'var(--header-pt)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      {/* Wordmark (left) */}
      <button
        id="btn-wordmark"
        onClick={() => onOpenDrawer(null)}
        className="group text-left cursor-pointer transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0] rounded-sm py-1"
        aria-label="ASSUMPTA — Return to home"
      >
        <div className="flex items-center">
          <span
            className="font-cinzel font-bold tracking-[0.15em] text-[#0B2C6B] uppercase leading-none"
            style={{ fontSize: 'var(--logo)' }}
          >
            ASSUMPTA
          </span>
          <span
            className="font-cinzel text-[#C9A227] font-semibold select-none -mt-0.5 ml-1 transition-transform group-hover:scale-110 duration-200 inline-block"
            style={{ fontSize: 'var(--logo-deg)' }}
            aria-hidden="true"
          >
            ✝
          </span>
        </div>
        <div className="font-garamond italic text-[11px] text-[#5B6B85] tracking-[0.08em] mt-0.5 block leading-none">
          St. Mary&apos;s Parish &bull; Solemnity 2026
        </div>
      </button>

      {/* Nav (right) */}
      <nav
        id="liturgical-nav"
        className="flex items-center"
        style={{ gap: 'var(--gap-nav)' }}
        aria-label="Liturgical Navigation"
      >
        {/* LITURGY */}
        <button
          id="nav-liturgy-btn"
          onClick={() => onOpenDrawer(activeDrawer === 'liturgy' ? null : 'liturgy')}
          className={`font-garamond font-medium uppercase tracking-[0.2em] transition-all duration-200 min-h-11 px-2.5 flex items-center justify-center cursor-pointer hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0] ${
            activeDrawer === 'liturgy'
              ? 'text-[#1E4FA0] font-semibold underline underline-offset-4 decoration-[#C9A227]'
              : 'text-[#0B2C6B]'
          }`}
          style={{ fontSize: 'var(--nav)' }}
          aria-expanded={activeDrawer === 'liturgy'}
        >
          LITURGY
        </button>

        {/* HYMNS */}
        <button
          id="nav-hymns-btn"
          onClick={() => onOpenDrawer(activeDrawer === 'hymns' ? null : 'hymns')}
          className={`font-garamond font-medium uppercase tracking-[0.2em] transition-all duration-200 min-h-11 px-2.5 flex items-center justify-center cursor-pointer hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0] ${
            activeDrawer === 'hymns'
              ? 'text-[#1E4FA0] font-semibold underline underline-offset-4 decoration-[#C9A227]'
              : 'text-[#0B2C6B]'
          }`}
          style={{ fontSize: 'var(--nav)' }}
          aria-expanded={activeDrawer === 'hymns'}
        >
          HYMNS
        </button>

        {/* READINGS */}
        <button
          id="nav-readings-btn"
          onClick={() => onOpenDrawer(activeDrawer === 'readings' ? null : 'readings')}
          className={`font-garamond font-medium uppercase tracking-[0.2em] transition-all duration-200 min-h-11 px-2.5 flex items-center justify-center cursor-pointer hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0] ${
            activeDrawer === 'readings'
              ? 'text-[#1E4FA0] font-semibold underline underline-offset-4 decoration-[#C9A227]'
              : 'text-[#0B2C6B]'
          }`}
          style={{ fontSize: 'var(--nav)' }}
          aria-expanded={activeDrawer === 'readings'}
        >
          READINGS
        </button>

        {/* Liturgical Divider */}
        <span
          className="text-[#5B6B85] opacity-40 select-none font-light"
          aria-hidden="true"
        >
          |
        </span>

        {/* BOOKLET (Replacing Cart) */}
        <button
          id="nav-booklet-btn"
          onClick={() => onOpenDrawer(activeDrawer === 'booklet' ? null : 'booklet')}
          className={`relative min-h-11 min-w-11 px-2 flex items-center justify-center cursor-pointer transition-all duration-200 hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0] ${
            activeDrawer === 'booklet' ? 'text-[#1E4FA0]' : 'text-[#0B2C6B]'
          }`}
          aria-label={`My Mass Booklet, ${bookletCount} items saved`}
          aria-expanded={activeDrawer === 'booklet'}
        >
          <BookOpen
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:scale-105"
            style={{ width: 'var(--icon)', height: 'var(--icon)' }}
          />

          {bookletCount > 0 && (
            <span
              id="booklet-count-badge"
              className="absolute -top-1 -right-1.5 flex items-center justify-center bg-[#C9A227] text-white font-cinzel font-bold text-[10px] w-4 h-4 rounded-full shadow-xs ring-1 ring-white animate-in zoom-in-50 duration-200"
            >
              {bookletCount}
            </span>
          )}
        </button>

        {/* Optional Ambient Chime / Bell Sound Toggle */}
        {onToggleAudio && (
          <button
            id="nav-audio-toggle-btn"
            onClick={onToggleAudio}
            title={isAudioMuted ? 'Unmute Sacred Bell' : 'Mute Sacred Bell'}
            className="hidden sm:flex min-h-11 min-w-11 px-1.5 items-center justify-center text-[#5B6B85] hover:text-[#0B2C6B] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0]"
            aria-label={isAudioMuted ? 'Unmute Sacred Bell' : 'Mute Sacred Bell'}
          >
            {isAudioMuted ? (
              <VolumeX className="w-4 h-4 opacity-50" strokeWidth={1.5} />
            ) : (
              <Volume2 className="w-4 h-4 text-[#C9A227]" strokeWidth={1.5} />
            )}
          </button>
        )}
      </nav>
    </header>
  );
};
