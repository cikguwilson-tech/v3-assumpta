import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroContent } from './components/HeroContent';
import { ImageRevealBackground } from './components/ImageRevealBackground';
import { DrawerPanel } from './components/DrawerPanel';
import { ToastContainer } from './components/Toast';
import { AttendanceConfirmationModal } from './components/AttendanceConfirmationModal';
import { DrawerType, BookletItem, ToastMessage } from './types';
import { ORDER_OF_MASS, HYMNS_LIST, REFLECTIONS_LIST } from './data/liturgyData';
import { playSanctusBell } from './utils/audio';

const STORAGE_KEY = 'assumpta_mass_booklet_v1';
const AUDIO_MUTE_KEY = 'assumpta_audio_muted_v1';

export default function App() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [bookletItems, setBookletItems] = useState<BookletItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUDIO_MUTE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Save booklet items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookletItems));
    } catch (e) {
      console.debug('Storage save note:', e);
    }
  }, [bookletItems]);

  // Save audio mute preference
  const toggleAudio = () => {
    setIsAudioMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(AUDIO_MUTE_KEY, String(next));
      } catch (e) {
        console.debug('Storage note:', e);
      }
      if (!next) {
        playSanctusBell(659.25, false); // E5 sacred chime
      }
      return next;
    });
  };

  // Toast Helper
  const showToast = useCallback((message: string, iconType: 'check' | 'bell' = 'check') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 7);
    setToasts((prev) => [...prev, { id, message, iconType }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Add Item to Mass Booklet
  const handleAddToBooklet = (item: BookletItem) => {
    if (!bookletItems.some((b) => b.id === item.id)) {
      setBookletItems((prev) => [...prev, item]);
      playSanctusBell(587.33, isAudioMuted); // D5 chime
      showToast(`Added "${item.title}" to your Mass booklet.`, 'check');
    }
  };

  // Remove Item from Booklet
  const handleRemoveFromBooklet = (id: string) => {
    setBookletItems((prev) => prev.filter((b) => b.id !== id));
  };

  // Add all propers & hymns to booklet helper
  const handleAddAllToBooklet = () => {
    const allPropers: BookletItem[] = ORDER_OF_MASS.map((m) => ({
      id: m.id,
      type: 'liturgy',
      title: m.title,
      citationOrSubtitle: m.citation,
      tag: m.tag,
    }));
    const allHymns: BookletItem[] = HYMNS_LIST.map((h) => ({
      id: h.id,
      type: 'hymn',
      title: h.title,
      citationOrSubtitle: h.tune,
      tag: 'HYMN',
    }));

    const combined = [...allPropers, ...allHymns];
    setBookletItems(combined);
    playSanctusBell(523.25, isAudioMuted); // C5 chime
    showToast('All feast propers and hymns added to your booklet.', 'check');
  };

  // Confirm Attendance action
  const handleConfirmAttendance = () => {
    playSanctusBell(783.99, isAudioMuted); // G5 chime
    showToast('Attendance confirmed. Ave Maria!', 'bell');
    setBookletItems([]);
    setActiveDrawer(null);
    setIsAttendanceModalOpen(true);
  };

  return (
    <div
      id="assumpta-liturgical-app"
      className="min-h-screen bg-white text-[#0B2C6B] font-garamond flex flex-col justify-between relative overflow-x-hidden selection:bg-[#0B2C6B] selection:text-white"
      style={{
        paddingBottom: 'calc(var(--pad-y) + var(--safe-bottom))',
      }}
    >
      {/* 1. Desktop Interactive Image Reveal Layer with Halo Math & Grid */}
      <ImageRevealBackground />

      {/* 2. Liturgical Header (Wordmark, Nav, Booklet Counter) */}
      <Header
        activeDrawer={activeDrawer}
        onOpenDrawer={setActiveDrawer}
        bookletCount={bookletItems.length}
        isAudioMuted={isAudioMuted}
        onToggleAudio={toggleAudio}
      />

      {/* 3. Main Hero Viewport (Headline, 12-Stars Crown, CTA, Emblem) */}
      <HeroContent
        onJoinMass={() => setActiveDrawer('booklet')}
        onOpenOrderOfMass={() => setActiveDrawer('liturgy')}
      />

      {/* 4. Side Panels / Mobile Bottom Sheets (LITURGY, HYMNS, READINGS, BOOKLET) */}
      <DrawerPanel
        activeDrawer={activeDrawer}
        onClose={() => setActiveDrawer(null)}
        bookletItems={bookletItems}
        onAddToBooklet={handleAddToBooklet}
        onRemoveFromBooklet={handleRemoveFromBooklet}
        onConfirmAttendance={handleConfirmAttendance}
        onAddAllToBooklet={handleAddAllToBooklet}
      />

      {/* 5. Attendance Pass & Calendar Confirmation Modal */}
      <AttendanceConfirmationModal
        isOpen={isAttendanceModalOpen}
        onClose={() => setIsAttendanceModalOpen(false)}
        bookletItems={bookletItems}
      />

      {/* 6. Liturgical Toast System (3s navy toast with gold check) */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
