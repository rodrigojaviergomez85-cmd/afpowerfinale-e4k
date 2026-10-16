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
- Kitten Rescue (`/play/kitten`, own `kitten` settings) reuses Bridge's scoped `bridge-shell`/`bridge-play` layout classes; its token-colored park SVG, expressive firefighter and outlined progress ladder live in `src/components/kitten/TreeScene.tsx` and are shared by play and endings — keeps one tested compact layout and cohesive rescue animation without changing Pepper's reactions.
- Vocab Blitz uses vocabulary groups from the static curriculum, a pure rally reducer in `src/lib/blitz.ts`, and its own scoped court layout and persisted options; roster order assigns alternating entries to teams so selection stays team-specific without changing shared roster data.
- Vocabulary display labels are centralized separately from curriculum category keys so wording changes preserve saved coach selections and original curriculum content.
- Hot Chair (`/play/chair`, `chair` options) builds its deck with `chairDeck` in `src/lib/content.ts` (coach-chosen card mode, never hidden pictures) and consumes it sequentially across both teams so the second team sees fresh cards.
- Detective Sniff (`/play/detective`, `detective` options) reads M items from each day's separate `mistakes` list via `drawMistakes`, so other games and review-day detection ignore them; `drawMistakes` fills the target from earlier days, weeks and levels first and only then from later days of the level, so a round is never shorter than the chosen target; reuses bridge-shell/bridge-play layout.
- Detective Sniff shares mood-driven SVG characters from `src/components/detective/Characters.tsx` across its town chase and results; semantic illustration tokens keep reactions and endings cohesive without image-loading delays.
- Hidden-picture cards use vocabulary answers in the static curriculum and draw only from the selected week; shared ItemCard omits redundant hidden prompts, while Demo/Tug reserve a separate timeout track to prevent content overlap.
- HiddenPicture uses one fixed image beneath a gapless 4×3 grid of independent covers; clip rounding only at the board so revealing a tile never moves or exposes adjacent covers.
- Tug rules sizing is scoped to tug-shell at all viewport heights, with a compact short-window variant, so the pre-game screen fits without changing other games.
- Shared ItemCard measures available space on content/size changes and scales overflowing content without resizing its frame; team-game steal notices occupy separate tracks to keep answers and controls unobstructed.
- Tug of War uses a shared mood-driven profile animal SVG in play and endings, mirrored per team, so visual changes preserve the existing game mechanics and compact scene dimensions.
