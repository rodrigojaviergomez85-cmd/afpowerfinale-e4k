import { useEffect, useState } from "react";
import { Maximize, Minimize, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useApp } from "@/lib/store";

export function useHotkeys(map: Record<string, () => void>, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const k = e.key === " " ? "Space" : e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const fn = map[k];
      if (fn) {
        e.preventDefault();
        fn();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [map, enabled]);
}

export function toggleFullscreen() {
  if (typeof document === "undefined") return;
  if (document.fullscreenElement) void document.exitFullscreen();
  else void document.documentElement.requestFullscreen?.();
}

export function FullscreenButton() {
  const [fs, setFs] = useState(false);
  useEffect(() => {
    const h = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);
  return (
    <Button variant="panel" size="iconLg" onClick={toggleFullscreen} aria-label="Full screen (F)">
      {fs ? <Minimize /> : <Maximize />}
    </Button>
  );
}

export function MuteButton() {
  const sound = useApp((s) => s.settings.sound);
  const setSettings = useApp((s) => s.setSettings);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="panel"
            size="iconLg"
            onClick={() => setSettings({ sound: !sound })}
            aria-label={sound ? "Mute (M)" : "Unmute (M)"}
          >
            {sound ? <Volume2 /> : <VolumeX />}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-sm">
          Tip: in Zoom, tick “Share sound” when you share your screen so kids hear the effects.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* School logo slot: replace with English4Kids logo image */}
      <div className="flex h-12 items-center rounded-xl border-2 border-dashed border-primary/60 px-3 text-sm font-bold text-primary">
        English4Kids
      </div>
      <div className="leading-none">
        <div className="text-2xl font-bold tracking-tight text-stroke">
          AF <span className="text-primary">Power</span> Finale
        </div>
      </div>
    </div>
  );
}
