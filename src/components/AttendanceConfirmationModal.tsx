import React from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Download, Share2, Sparkles } from 'lucide-react';
import { CornerBracket, TwelveStarsCrown } from './CustomIcons';
import { BookletItem } from '../types';
import { PARISH_NAME } from '../data/liturgyData';

interface AttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookletItems: BookletItem[];
  attendeeName?: string;
}

export const AttendanceConfirmationModal: React.FC<AttendanceModalProps> = ({
  isOpen,
  onClose,
  bookletItems,
  attendeeName = 'Faithful Pilgrim',
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleAddToCalendar = () => {
    // Generate .ics calendar link or google calendar url for August 15, 2026
    const title = encodeURIComponent(`Solemnity of the Assumption of the Blessed Virgin Mary — ${PARISH_NAME}`);
    const details = encodeURIComponent(
      `Solemn Feast Day Mass at ${PARISH_NAME}.\nFeast of the Assumption of Our Lady.\nMass Booklet Items: ${bookletItems.length > 0 ? bookletItems.map((b) => b.title).join(', ') : 'All Propers & Hymns included.'}`
    );
    const location = encodeURIComponent(`${PARISH_NAME}, Sanctuary`);
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260815T103000Z/20260815T120000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="attendance-modal-portal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="attendance-modal-title"
    >
      <div
        className="fixed inset-0 transition-opacity cursor-pointer"
        style={{
          backgroundColor: 'rgba(11, 44, 107, 0.2)',
          WebkitBackdropFilter: 'blur(1px)',
          backdropFilter: 'blur(1px)',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="attendance-card"
        className="relative z-10 w-full max-w-lg bg-white border border-[#A9C6E8] shadow-2xl p-6 sm:p-8 rounded-sm text-[#0B2C6B] animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#0B2C6B',
        }}
      >
        {/* Absolute 4 Corner Brackets */}
        <div className="absolute top-3 left-3">
          <CornerBracket position="top-left" />
        </div>
        <div className="absolute top-3 right-3">
          <CornerBracket position="top-right" />
        </div>
        <div className="absolute bottom-3 left-3">
          <CornerBracket position="bottom-left" />
        </div>
        <div className="absolute bottom-3 right-3">
          <CornerBracket position="bottom-right" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5B6B85] hover:text-[#0B2C6B] p-2 min-h-11 min-w-11 rounded-full hover:bg-[#A9C6E8]/20 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pt-2 pb-4 border-b border-[#A9C6E8]/40">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 mb-3">
            <Sparkles className="w-6 h-6 text-[#C9A227]" />
          </div>
          <div className="font-cinzel text-[11px] text-[#C9A227] tracking-[0.2em] font-semibold uppercase">
            Holy Day of Obligation
          </div>
          <h3
            id="attendance-modal-title"
            className="font-cinzel font-bold text-xl sm:text-2xl uppercase tracking-wider text-[#0B2C6B] mt-1"
          >
            Attendance Confirmed
          </h3>
          <p className="font-garamond italic text-sm text-[#5B6B85] mt-0.5">
            &ldquo;Assumpta est Maria in Caelum &mdash; Gaudeamus Omnes!&rdquo;
          </p>
        </div>

        {/* Details Card */}
        <div className="my-5 space-y-3 font-garamond text-sm text-[#0B2C6B]">
          <div className="flex items-center gap-3 p-3.5 bg-[#F8FAFD] border border-[#E2EBF6] rounded-sm">
            <Calendar className="w-5 h-5 text-[#C9A227] shrink-0" />
            <div>
              <div className="font-semibold text-[#0B2C6B]">Saturday, August 15, 2026</div>
              <div className="text-xs text-[#5B6B85] italic">Feast of the Assumption of Our Lady</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-[#F8FAFD] border border-[#E2EBF6] rounded-sm">
            <Clock className="w-5 h-5 text-[#C9A227] shrink-0" />
            <div>
              <div className="font-semibold text-[#0B2C6B]">10:30 AM &bull; Solemn Feast Day High Mass</div>
              <div className="text-xs text-[#5B6B85] italic">Also at 8:00 AM (Low Mass) &amp; 6:00 PM (Vespers &amp; Mass)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-[#F8FAFD] border border-[#E2EBF6] rounded-sm">
            <MapPin className="w-5 h-5 text-[#C9A227] shrink-0" />
            <div>
              <div className="font-semibold text-[#0B2C6B]">{PARISH_NAME} Main Sanctuary</div>
              <div className="text-xs text-[#5B6B85] italic">Cathedral of the Blessed Virgin Mary</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleAddToCalendar}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#0B2C6B] text-white hover:bg-[#1E4FA0] font-garamond uppercase tracking-wider text-xs font-semibold rounded-md shadow-sm transition-colors cursor-pointer min-h-11"
          >
            <Calendar className="w-4 h-4 text-[#C9A227]" />
            <span>Add to Calendar</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-[#5B6B85] text-[#0B2C6B] hover:bg-[#F8FAFD] font-garamond uppercase tracking-wider text-xs font-semibold rounded-md transition-colors cursor-pointer min-h-11"
          >
            <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
            <span>Done &bull; Ave Maria</span>
          </button>
        </div>
      </div>
    </div>
  );
};
