import React from 'react';
import { Check, Bell, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      id="toast-container"
      className="fixed top-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-[calc(100vw-40px)] pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          id={`toast-${toast.id}`}
          className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 bg-[#0B2C6B] text-white border border-[#A9C6E8]/30 rounded-md shadow-2xl transition-all duration-300 animate-in slide-in-from-top-3 fade-in"
          role="alert"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 shrink-0">
              {toast.iconType === 'bell' ? (
                <Bell className="w-3.5 h-3.5 text-[#C9A227]" />
              ) : (
                <Check className="w-3.5 h-3.5 text-[#C9A227]" strokeWidth={2.5} />
              )}
            </div>
            <span className="font-garamond text-sm text-[#FFFFFF] tracking-wide">
              {toast.message}
            </span>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-[#A9C6E8] hover:text-white p-1 rounded-sm cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
