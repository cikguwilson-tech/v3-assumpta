import React from "react";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import {
  CornerBracket,
  TwelveStarsCrown,
  MonstranceStarEmblem,
} from "./CustomIcons";
import { BG_IMAGE_1, BG_IMAGE_2 } from "./ImageRevealBackground";

interface HeroContentProps {
  onJoinMass: () => void;
  onOpenOrderOfMass: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onJoinMass,
  onOpenOrderOfMass,
}) => {
  return (
    <main
      id="hero-liturgical-main"
      className="relative z-10 flex-1 flex flex-col justify-between"
      style={{
        paddingInline: "var(--pad-x)",
        paddingBlock: "var(--main-py)",
      }}
    >
      {/* Mobile/Tablet Sacred Artwork Display (visible below lg) */}
      <div
        id="mobile-devotional-image-frame"
        className="lg:hidden w-full mb-6 relative overflow-hidden rounded-sm border border-[#A9C6E8] shadow-sm bg-white"
      >
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] overflow-hidden bg-[#0B2C6B]/5">
          {/* Base Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
            style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
          />

          {/* Autoplay Gentle Crossfade Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-marian-crossfade pointer-events-none"
            style={{ backgroundImage: `url(${BG_IMAGE_2})` }}
          />

          {/* Corner accents */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <CornerBracket position="top-left" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <CornerBracket position="top-right" />
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none">
            <CornerBracket position="bottom-left" />
          </div>
          <div className="absolute bottom-2 right-2 pointer-events-none">
            <CornerBracket position="bottom-right" />
          </div>

          {/* Subtle Devotional Badge */}
          <div className="absolute bottom-3 inset-x-3 flex justify-between items-center px-3 py-1.5 bg-[#0B2C6B]/80 backdrop-blur-xs text-white rounded-xs">
            <span className="font-garamond italic text-xs tracking-wider text-[#A9C6E8]">
              Sancta Maria, Regina Assumpta in Caelum
            </span>
            <span className="font-cinzel text-[10px] text-[#C9A227] tracking-widest uppercase">
              15 AUG 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Block (Headline & CTA) + Right Feature Block */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 my-auto">
        {/* Left Block: Inscription & Call to Mass */}
        <div id="hero-headline-block" className="relative max-w-2xl text-left">
          {/* Top-Left Corner Bracket */}
          <div className="mb-2 sm:mb-3">
            <CornerBracket position="top-left" />
          </div>

          {/* Inscription Headline */}
          <h1 className="font-cinzel font-extrabold uppercase text-[#0B2C6B] tracking-[0.06em] leading-[1.08] select-none">
            <span className="block" style={{ fontSize: "var(--headline)" }}>
              ASSUMPTA
            </span>
            <span
              className="block text-[#0B2C6B]/90"
              style={{ fontSize: "var(--headline)" }}
            >
              EST MARIA
            </span>
            <span
              className="flex items-center flex-wrap gap-x-3 text-[#1E4FA0]"
              style={{ fontSize: "var(--headline)" }}
            >
              <span>IN CAELUM</span>
              <TwelveStarsCrown className="inline-block" />
            </span>
          </h1>

          {/* Subtitle in Cormorant Garamond Italic */}
          <p
            className="font-garamond italic text-[#5B6B85] mt-3 sm:mt-4 tracking-wide max-w-xl"
            style={{ fontSize: "var(--body)" }}
          >
            Solemnity of the Assumption of the Blessed Virgin Mary &bull; Holy
            Day of Obligation
          </p>

          {/* Liturgical Date & Parish Indicator */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs sm:text-sm font-garamond text-[#5B6B85]">
            <span className="inline-flex items-center gap-1.5 text-[#0B2C6B] font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
              Saturday, August 15, 2026
            </span>
            <span className="text-[#A9C6E8]">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
              6:00 PM (Solemn High Mass)
            </span>
            <span className="text-[#A9C6E8]">&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              St. Mary&apos;s Cathedral Parish
            </span>
          </div>

          {/* Bottom-Left Corner Bracket */}
          <div className="mt-3 sm:mt-4 mb-5 sm:mb-6">
            <CornerBracket position="bottom-left" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              id="cta-join-mass"
              onClick={onJoinMass}
              className="group inline-flex items-center justify-center font-garamond font-medium uppercase tracking-[0.18em] border border-[#5B6B85] rounded-md transition-all duration-200 cursor-pointer min-h-11 hover:bg-[#0B2C6B] hover:text-white hover:border-[#0B2C6B] text-[#0B2C6B] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0]"
              style={{
                fontSize: "var(--body)",
                paddingInline: "var(--btn-px)",
                paddingBlock: "var(--btn-py)",
                gap: "var(--btn-gap)",
              }}
              aria-label="Join the Mass — RSVP and Prepare Mass Booklet"
            >
              <span>JOIN THE MASS</span>
              <ArrowUpRight
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ width: "var(--icon)", height: "var(--icon)" }}
              />
            </button>

            <button
              id="cta-view-propers"
              onClick={onOpenOrderOfMass}
              className="inline-flex items-center justify-center font-garamond italic tracking-wider text-[#1E4FA0] hover:text-[#0B2C6B] hover:underline underline-offset-4 px-3 py-2 min-h-11 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0]"
              style={{ fontSize: "var(--body)" }}
            >
              View Order of Mass &amp; Propers &rarr;
            </button>
          </div>
        </div>

        {/* Right Lower Feature Block */}
        <div
          id="hero-feature-emblem-block"
          className="relative lg:self-end mt-4 lg:mt-0 max-w-sm"
        >
          <div
            className="relative flex flex-col items-start bg-white/70 backdrop-blur-xs transition-all duration-300 hover:bg-white/90"
            style={{
              padding: "var(--feature-pad)",
              minWidth: "var(--feature-min)",
            }}
          >
            {/* Absolute 4 Corner Brackets (no filled card background) */}
            <div className="absolute top-0 left-0">
              <CornerBracket position="top-left" />
            </div>
            <div className="absolute top-0 right-0">
              <CornerBracket position="top-right" />
            </div>
            <div className="absolute bottom-0 left-0">
              <CornerBracket position="bottom-left" />
            </div>
            <div className="absolute bottom-0 right-0">
              <CornerBracket position="bottom-right" />
            </div>

            {/* Radiant Star / Monstrance Emblem */}
            <div className="mb-3">
              <MonstranceStarEmblem />
            </div>

            {/* Taglines in Cormorant Garamond semibold italic uppercase */}
            <div
              className="font-garamond font-semibold italic uppercase text-[#0B2C6B] tracking-[0.14em] leading-[1.35]"
              style={{ fontSize: "var(--body)" }}
            >
              <div className="text-[#0B2C6B]">QUEEN OF HEAVEN.</div>
              <div className="text-[#1E4FA0]">MOTHER OF THE CHURCH.</div>
            </div>

            <div className="mt-2 text-[11px] font-garamond italic text-[#5B6B85] tracking-wider border-t border-[#A9C6E8]/40 pt-2 w-full">
              &ldquo;Signum Magnum Apparuit in Caelo&rdquo; &bull; Rev. 12:1
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
