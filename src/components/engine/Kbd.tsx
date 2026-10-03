import { X } from "lucide-react";
import { useHotkeys } from "./controls";

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="ml-1 inline-flex min-w-8 items-center justify-center rounded-lg border-2 border-current/40 bg-stage/25 px-2 py-0.5 font-display text-[0.6em] font-bold leading-none">
      {children}
    </kbd>
  );
}

export function HelpOverlay({ open, onClose, shortcuts }: { open: boolean; onClose: () => void; shortcuts: [string, string][] }) {
  useHotkeys({ Escape: onClose, "?": onClose }, open);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-stage/85 backdrop-blur-sm" onClick={onClose}>
      <div className="panel relative animate-pop px-12 py-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4"><X className="h-8 w-8" /></button>
        <h2 className="mb-6 text-5xl">⌨️ Shortcuts</h2>
        <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-3xl font-bold">
          {shortcuts.map(([k, v]) => (
            <div key={k} className="contents">
              <span className="rounded-xl bg-primary px-4 py-1 text-center text-primary-foreground">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
