import { createFileRoute, Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useApp } from "@/lib/store";
import { sfx } from "@/lib/sound";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — AF Power Finale" },
      { name: "description", content: "Turn time, rounds, sound, Spanish hints and theme intensity." },
      { property: "og:title", content: "Settings — AF Power Finale" },
      { property: "og:description", content: "Turn time, rounds, sound, Spanish hints and theme intensity." },
    ],
  }),
  component: SettingsPage,
});

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-6 border-b border-border py-5 last:border-0">
      <div className="flex-1">
        <div className="text-2xl font-bold">{label}</div>
        {hint && <div className="text-muted-foreground">{hint}</div>}
      </div>
      <div className="w-80">{children}</div>
    </div>
  );
}

function SettingsPage() {
  const { settings, setSettings, resetTurns } = useApp();
  return (
    <div className="stage-bg min-h-screen">
      <header className="flex items-center gap-4 px-8 py-5">
        <Button asChild variant="panel" size="iconLg" aria-label="Home"><Link to="/"><Home /></Link></Button>
        <h1 className="text-5xl">⚙️ Settings</h1>
      </header>
      <main className="mx-auto max-w-4xl px-8 pb-12">
        <div className="panel px-8 py-2">
          <Row label={`Turn time: ${settings.turnTime}s`} hint="Seconds per turn (5–60)">
            <Slider min={5} max={60} step={1} value={[settings.turnTime]} onValueChange={([v]) => setSettings({ turnTime: v })} />
          </Row>
          <Row label={`Rounds: ${settings.rounds}`} hint="Cards per game">
            <Slider min={4} max={30} step={1} value={[settings.rounds]} onValueChange={([v]) => setSettings({ rounds: v })} />
          </Row>
          <Row label="Sound" hint="Remember to tick “Share sound” in Zoom">
            <Switch checked={settings.sound} onCheckedChange={(v) => setSettings({ sound: v })} />
          </Row>
          <Row label={`Volume: ${Math.round(settings.volume * 100)}%`}>
            <Slider min={0} max={1} step={0.05} value={[settings.volume]} onValueChange={([v]) => setSettings({ volume: v })} onValueCommit={() => sfx.correct()} />
          </Row>
          <Row label="Spanish hints" hint="Show Spanish prompts and translations">
            <Switch checked={settings.showSpanish} onCheckedChange={(v) => setSettings({ showSpanish: v })} />
          </Row>
          <Row label="Calm theme" hint="Fewer moving things and lighter confetti">
            <Switch checked={settings.calm} onCheckedChange={(v) => setSettings({ calm: v })} />
          </Row>
          <Row label="Today’s turn counts" hint="Start fresh for a new group">
            <Button variant="danger" size="lg" onClick={() => { resetTurns(); toast.success("Turn counts reset"); }}>Reset turns</Button>
          </Row>
        </div>
      </main>
    </div>
  );
}
