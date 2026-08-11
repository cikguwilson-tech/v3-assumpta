import React, { useState, useEffect } from 'react';
import { X, BookOpen, ChevronRight, Check, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { DrawerType, BookletItem, LiturgyItem, HymnItem, ReflectionItem } from '../types';
import { ORDER_OF_MASS, HYMNS_LIST, REFLECTIONS_LIST, PARISH_NAME } from '../data/liturgyData';

interface DrawerPanelProps {
  activeDrawer: DrawerType;
  onClose: () => void;
  bookletItems: BookletItem[];
  onAddToBooklet: (item: BookletItem) => void;
  onRemoveFromBooklet: (id: string) => void;
  onConfirmAttendance: () => void;
  onAddAllToBooklet: () => void;
}

export const DrawerPanel: React.FC<DrawerPanelProps> = ({
  activeDrawer,
  onClose,
  bookletItems,
  onAddToBooklet,
  onRemoveFromBooklet,
  onConfirmAttendance,
  onAddAllToBooklet,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeDrawer) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeDrawer, onClose]);

  if (!activeDrawer) return null;

  const isItemInBooklet = (id: string) => bookletItems.some((item) => item.id === id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="liturgical-drawer-portal"
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      {/* Dimmed Backdrop (Marian-navy at 20% opacity) */}
      <div
        id="drawer-backdrop"
        onClick={onClose}
        className="fixed inset-0 transition-opacity duration-300 animate-in fade-in cursor-pointer"
        style={{
          backgroundColor: 'rgba(11, 44, 107, 0.2)',
          WebkitBackdropFilter: 'blur(1px)',
          backdropFilter: 'blur(1px)',
        }}
        aria-hidden="true"
      />

      {/* Drawer Container (Edge-to-Edge Bottom Sheet on Mobile, Right Panel on Desktop) */}
      <div
        id="drawer-surface"
        className="fixed inset-x-0 bottom-0 w-full max-h-[85vh] rounded-t-2xl border-t border-[#A9C6E8] bg-white text-[#0B2C6B] shadow-2xl flex flex-col transition-all duration-300 ease-out overflow-hidden z-50 lg:inset-y-0 lg:right-0 lg:left-auto lg:bottom-auto lg:h-full lg:max-h-screen lg:rounded-none lg:border-t-0 lg:border-l lg:border-[#A9C6E8] lg:w-[460px]"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#0B2C6B',
        }}
      >
        {/* Mobile drag handle indicator */}
        <div
          className="lg:hidden w-full flex justify-center pt-3 pb-1 bg-white shrink-0"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="w-12 h-1 bg-[#A9C6E8]/60 rounded-full" />
        </div>

        {/* Drawer Header */}
        <div
          className="flex items-start justify-between border-b border-[#A9C6E8]/40 shrink-0 px-6 pt-4 pb-3 sm:px-8 bg-white text-[#0B2C6B]"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div>
            <h2
              id="drawer-title"
              className="font-cinzel font-bold text-lg sm:text-xl uppercase tracking-wider text-[#0B2C6B]"
            >
              {activeDrawer === 'liturgy' && 'Order of Mass'}
              {activeDrawer === 'hymns' && 'Hymnal'}
              {activeDrawer === 'readings' && 'Scripture & Reflections'}
              {activeDrawer === 'booklet' && 'My Mass Booklet'}
            </h2>
            <p className="font-garamond italic text-xs sm:text-sm text-[#5B6B85] mt-0.5">
              {activeDrawer === 'liturgy' && 'Solemnity of the Assumption — Proper of the Mass'}
              {activeDrawer === 'hymns' && 'Feast Day Hymns to Our Lady'}
              {activeDrawer === 'readings' && 'Reflections for the Feast'}
              {activeDrawer === 'booklet' && `${bookletItems.length} liturgical selections saved`}
            </p>
          </div>

          <button
            id="drawer-close-btn"
            onClick={onClose}
            className="p-2 min-h-11 min-w-11 -mr-2 -mt-1 text-[#5B6B85] hover:text-[#0B2C6B] hover:bg-[#A9C6E8]/20 rounded-full transition-colors flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0]"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto divide-y divide-[#A9C6E8]/20 px-6 sm:px-8 py-3 bg-white text-[#0B2C6B]"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {/* ======================================================== */}
          {/* 1. ORDER OF MASS / LITURGY PANEL */}
          {/* ======================================================== */}
          {activeDrawer === 'liturgy' && (
            <div className="space-y-4 py-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#A9C6E8]/30">
                <span className="text-[11px] font-garamond italic text-[#5B6B85]">
                  Select propers to compile your custom feast guide
                </span>
                <button
                  onClick={onAddAllToBooklet}
                  className="text-xs font-garamond uppercase tracking-wider text-[#1E4FA0] hover:text-[#0B2C6B] underline underline-offset-2 cursor-pointer"
                >
                  + Add All Propers
                </button>
              </div>

              {ORDER_OF_MASS.map((item) => {
                const inBooklet = isItemInBooklet(item.id);
                const isExpanded = expandedId === item.id;

                return (
                  <div
                    key={item.id}
                    id={`liturgy-item-${item.id}`}
                    className="py-3 group border-b border-[#A9C6E8]/20 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 pr-1">
                        {/* Liturgical Tag (Micro, Gold) */}
                        <div
                          className="font-cinzel text-[10px] font-semibold text-[#C9A227] tracking-[0.15em] uppercase mb-0.5"
                          style={{ fontSize: 'var(--micro)' }}
                        >
                          {item.tag}
                        </div>

                        {/* Title */}
                        <h3 className="font-garamond font-semibold text-base text-[#0B2C6B] leading-tight">
                          {item.title}
                        </h3>

                        {/* Scripture citation (in place of price) */}
                        <p className="font-garamond italic text-xs text-[#5B6B85] mt-0.5">
                          {item.citation}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="p-1.5 min-h-11 min-w-11 text-[#5B6B85] hover:text-[#0B2C6B] rounded-sm transition-colors cursor-pointer flex items-center justify-center"
                          aria-label={isExpanded ? `Hide text for ${item.title}` : `Read text for ${item.title}`}
                          title="Toggle full text"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <button
                          onClick={() =>
                            onAddToBooklet({
                              id: item.id,
                              type: 'liturgy',
                              title: item.title,
                              citationOrSubtitle: item.citation,
                              tag: item.tag,
                            })
                          }
                          disabled={inBooklet}
                          className={`font-garamond font-semibold uppercase tracking-wider text-xs px-3 py-1.5 min-h-11 rounded-sm border transition-all cursor-pointer flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1E4FA0] ${
                            inBooklet
                              ? 'border-[#A9C6E8] bg-[#F4F8FC] text-[#0B2C6B] cursor-default'
                              : 'border-[#5B6B85] text-[#0B2C6B] hover:bg-[#0B2C6B] hover:text-white hover:border-[#0B2C6B]'
                          }`}
                        >
                          {inBooklet ? (
                            <>
                              <Check className="w-3 h-3 text-[#C9A227]" />
                              <span>ADDED</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              <span>ADD</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Liturgical Text */}
                    {isExpanded && (
                      <div className="mt-3 p-3.5 bg-[#F8FAFD] border-l-2 border-[#1E4FA0] rounded-r text-sm text-[#0B2C6B] font-eb-garamond leading-relaxed space-y-2 animate-in fade-in duration-200">
                        {item.latinAntiphon && (
                          <div className="text-xs italic text-[#5B6B85] font-garamond border-b border-[#A9C6E8]/30 pb-1.5">
                            <span className="font-semibold text-[#0B2C6B]">Latin: </span>
                            {item.latinAntiphon}
                          </div>
                        )}
                        <p className="whitespace-pre-line text-[14px]">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ======================================================== */}
          {/* 2. HYMNAL PANEL */}
          {/* ======================================================== */}
          {activeDrawer === 'hymns' && (
            <div className="space-y-4 py-2">
              <p className="text-xs font-garamond italic text-[#5B6B85] pb-2 border-b border-[#A9C6E8]/30">
                Traditional Marian hymns appointed for the Solemnity of the Assumption
              </p>

              {HYMNS_LIST.map((hymn) => {
                const inBooklet = isItemInBooklet(hymn.id);
                const isExpanded = expandedId === hymn.id;

                return (
                  <div
                    key={hymn.id}
                    id={`hymn-item-${hymn.id}`}
                    className="py-3 border-b border-[#A9C6E8]/20 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div
                          className="font-cinzel text-[10px] font-semibold text-[#C9A227] tracking-[0.15em] uppercase mb-0.5"
                          style={{ fontSize: 'var(--micro)' }}
                        >
                          MARIAN HYMN &bull; {hymn.tune}
                        </div>

                        <h3 className="font-garamond font-semibold text-base text-[#0B2C6B] leading-tight">
                          {hymn.title}
                        </h3>

                        <p className="font-garamond italic text-xs text-[#5B6B85] mt-1 leading-normal">
                          {hymn.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => toggleExpand(hymn.id)}
                          className="p-1.5 min-h-11 min-w-11 text-[#5B6B85] hover:text-[#0B2C6B] rounded-sm transition-colors cursor-pointer flex items-center justify-center"
                          aria-label={isExpanded ? `Hide stanzas for ${hymn.title}` : `View stanzas for ${hymn.title}`}
                          title="View hymn stanzas"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <button
                          onClick={() =>
                            onAddToBooklet({
                              id: hymn.id,
                              type: 'hymn',
                              title: hymn.title,
                              citationOrSubtitle: hymn.tune,
                              tag: 'HYMN',
                            })
                          }
                          disabled={inBooklet}
                          className={`font-garamond font-semibold uppercase tracking-wider text-xs px-3 py-1.5 min-h-11 rounded-sm border transition-all cursor-pointer flex items-center gap-1 ${
                            inBooklet
                              ? 'border-[#A9C6E8] bg-[#F4F8FC] text-[#0B2C6B] cursor-default'
                              : 'border-[#5B6B85] text-[#0B2C6B] hover:bg-[#0B2C6B] hover:text-white hover:border-[#0B2C6B]'
                          }`}
                        >
                          {inBooklet ? (
                            <>
                              <Check className="w-3 h-3 text-[#C9A227]" />
                              <span>ADDED</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              <span>ADD</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Stanzas */}
                    {isExpanded && (
                      <div className="mt-3 p-3.5 bg-[#F8FAFD] border-l-2 border-[#1E4FA0] rounded-r space-y-3 font-garamond text-sm text-[#0B2C6B] animate-in fade-in duration-200">
                        {hymn.refrain && (
                          <div className="p-2.5 bg-white border border-[#E2EBF6] rounded-xs font-semibold italic text-xs text-[#0B2C6B]">
                            <span className="text-[#C9A227] not-italic mr-1.5 font-bold">Refrain:</span>
                            {hymn.refrain}
                          </div>
                        )}
                        {hymn.stanzas.map((stanza, idx) => (
                          <div key={idx} className="leading-relaxed">
                            <span className="text-[11px] font-cinzel text-[#5B6B85] mr-1.5 font-bold">
                              {idx + 1}.
                            </span>
                            <span className="whitespace-pre-line text-[14px]">{stanza}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ======================================================== */}
          {/* 3. READINGS & REFLECTIONS PANEL */}
          {/* ======================================================== */}
          {activeDrawer === 'readings' && (
            <div className="space-y-4 py-2">
              <p className="text-xs font-garamond italic text-[#5B6B85] pb-2 border-b border-[#A9C6E8]/30">
                Theological and pastoral commentaries for contemplation on the Assumption
              </p>

              {REFLECTIONS_LIST.map((reflection) => {
                const inBooklet = isItemInBooklet(reflection.id);
                const isExpanded = expandedId === reflection.id;

                return (
                  <div
                    key={reflection.id}
                    id={`reflection-item-${reflection.id}`}
                    className="py-3 border-b border-[#A9C6E8]/20 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div
                          className="font-cinzel text-[10px] font-semibold text-[#C9A227] tracking-[0.15em] uppercase mb-0.5"
                          style={{ fontSize: 'var(--micro)' }}
                        >
                          {reflection.date} &bull; {reflection.readTime}
                        </div>

                        <h3 className="font-garamond font-semibold text-base text-[#0B2C6B] leading-tight">
                          {reflection.title}
                        </h3>

                        <p className="font-garamond italic text-xs text-[#5B6B85] mt-1 leading-normal">
                          {reflection.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => toggleExpand(reflection.id)}
                          className="p-1.5 min-h-11 min-w-11 text-[#5B6B85] hover:text-[#0B2C6B] rounded-sm transition-colors cursor-pointer flex items-center justify-center"
                          aria-label={isExpanded ? `Hide reflection ${reflection.title}` : `Read reflection ${reflection.title}`}
                          title="Read full reflection"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <button
                          onClick={() =>
                            onAddToBooklet({
                              id: reflection.id,
                              type: 'reading',
                              title: reflection.title,
                              citationOrSubtitle: `${reflection.date} • ${reflection.readTime}`,
                              tag: 'REFLECTION',
                            })
                          }
                          disabled={inBooklet}
                          className={`font-garamond font-semibold uppercase tracking-wider text-xs px-3 py-1.5 min-h-11 rounded-sm border transition-all cursor-pointer flex items-center gap-1 ${
                            inBooklet
                              ? 'border-[#A9C6E8] bg-[#F4F8FC] text-[#0B2C6B] cursor-default'
                              : 'border-[#5B6B85] text-[#0B2C6B] hover:bg-[#0B2C6B] hover:text-white hover:border-[#0B2C6B]'
                          }`}
                        >
                          {inBooklet ? (
                            <>
                              <Check className="w-3 h-3 text-[#C9A227]" />
                              <span>SAVED</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              <span>ADD</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Full Reflection Paragraphs */}
                    {isExpanded && (
                      <div className="mt-3 p-3.5 bg-[#F8FAFD] border-l-2 border-[#1E4FA0] rounded-r space-y-2.5 font-eb-garamond text-sm text-[#0B2C6B] leading-relaxed animate-in fade-in duration-200">
                        {reflection.fullText.map((p, idx) => (
                          <p key={idx} className="text-[14px]">
                            {p}
                          </p>
                        ))}
                        {reflection.author && (
                          <div className="pt-2 text-right font-garamond italic text-xs text-[#5B6B85] border-t border-[#A9C6E8]/30">
                            — {reflection.author}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ======================================================== */}
          {/* 4. MY MASS BOOKLET (REPLACING CART) */}
          {/* ======================================================== */}
          {activeDrawer === 'booklet' && (
            <div className="py-2">
              {bookletItems.length === 0 ? (
                <div
                  id="booklet-empty-state"
                  className="py-12 flex flex-col items-center justify-center text-center text-[#5B6B85]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#A9C6E8]/20 flex items-center justify-center mb-3">
                    <BookOpen className="w-6 h-6 text-[#1E4FA0]" strokeWidth={1.5} />
                  </div>
                  <p className="font-garamond text-base text-[#0B2C6B] font-medium">
                    Your Mass booklet is empty.
                  </p>
                  <p className="font-garamond italic text-xs text-[#5B6B85] mt-1 max-w-xs">
                    Add antiphons, readings, hymns, or meditations from the Liturgy and Hymns tabs to prepare for the Assumption feast.
                  </p>
                  <button
                    onClick={onAddAllToBooklet}
                    className="mt-5 font-garamond font-semibold uppercase tracking-wider text-xs px-4 py-2 bg-[#0B2C6B] text-white rounded-md hover:bg-[#1E4FA0] transition-colors cursor-pointer"
                  >
                    + Add Full Feast Propers
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#A9C6E8]/30">
                    <span className="text-xs font-garamond italic text-[#5B6B85]">
                      {bookletItems.length} items ready for Mass
                    </span>
                    <button
                      onClick={() => bookletItems.forEach((it) => onRemoveFromBooklet(it.id))}
                      className="text-xs font-garamond text-[#5B6B85] hover:text-red-700 underline cursor-pointer"
                    >
                      Clear all
                    </button>
                  </div>

                  {bookletItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded bg-white border border-[#A9C6E8]/40 hover:border-[#1E4FA0]/50 transition-colors shadow-2xs"
                    >
                      <div className="flex-1 pr-2">
                        {item.tag && (
                          <span className="font-cinzel text-[9px] text-[#C9A227] tracking-widest uppercase font-semibold block">
                            {item.tag}
                          </span>
                        )}
                        <h4 className="font-garamond font-semibold text-sm text-[#0B2C6B] leading-snug">
                          {item.title}
                        </h4>
                        <p className="font-garamond italic text-xs text-[#5B6B85]">
                          {item.citationOrSubtitle}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveFromBooklet(item.id)}
                        className="p-2 min-h-11 min-w-11 text-[#5B6B85] hover:text-red-700 transition-colors cursor-pointer flex items-center justify-center"
                        title="Remove from booklet"
                        aria-label={`Remove ${item.title} from booklet`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div
          className="border-t border-[#A9C6E8]/40 bg-white shrink-0 px-6 py-4 sm:px-8"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {activeDrawer === 'booklet' ? (
            <div className="space-y-2">
              <button
                id="btn-confirm-attendance"
                onClick={onConfirmAttendance}
                className="w-full flex items-center justify-center font-garamond font-medium uppercase tracking-[0.16em] bg-[#0B2C6B] text-white hover:bg-[#1E4FA0] rounded-md transition-all duration-200 cursor-pointer min-h-11 shadow-md active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4FA0]"
                style={{
                  fontSize: 'var(--body)',
                  paddingBlock: 'var(--btn-py, 12px)',
                  gap: 'var(--btn-gap, 8px)',
                }}
              >
                <span>CONFIRM ATTENDANCE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <p className="text-center font-garamond italic text-[11px] text-[#5B6B85]">
                Generates your personalized Mass attendance pass and saves your booklet
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p
                className="font-garamond uppercase tracking-widest text-[#5B6B85] select-none"
                style={{ fontSize: 'var(--micro, 10px)' }}
              >
                {PARISH_NAME} &copy; 2026 &mdash; Solemnity of the Assumption of the Blessed Virgin Mary
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
