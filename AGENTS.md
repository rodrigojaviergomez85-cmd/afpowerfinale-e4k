<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- Curriculum content lives only in `src/data/content.ts` (raw " || " lines parsed by `src/lib/content.ts`); no backend reads — keeps the app login-free.
- Coach settings/selection persist via the zustand store in `src/lib/store.ts` (localStorage); game history is session-only (`sessionUsed`).
- Games plug into `src/components/engine/*` (GameShell phases, Timer, Scoreboard, TurnPicker, Kbd/HelpOverlay); each game is one route under `src/routes/play.*`.
- Bridge Builder's explorer is rendered by the mood-driven SVG in `src/components/bridge/Max.tsx`, using global semantic character tokens so play and ending scenes stay consistent.
- Bridge scenery uses token-colored SVG assets in `src/components/bridge/Scenery.tsx`; Bridge-only layout overrides are scoped through `bridge-shell` and `bridge-play` so other games retain their sizing.

- Circus Rescue retains its existing tightrope game ID and rope route/settings for saved-state compatibility; its self-contained token-colored SVG stage, audience and mood-driven puppet are shared across play and endings so no image requests delay rendering. Altitude is separate from correct-answer count so mistakes lower the platform, and missed cards requeue until the rescue succeeds or fails.
- Circus layout overrides stay scoped to `rope-shell` and `rope-play`; the tall scene sits beside the question with a full-size timer above it so other game layouts remain unchanged.
- Kitten Rescue (`/play/kitten`, own `kitten` settings) reuses Bridge's scoped `bridge-shell`/`bridge-play` layout classes; its token-colored park SVG lives in `src/components/kitten/TreeScene.tsx` — keeps one tested compact layout for timer-race games.
