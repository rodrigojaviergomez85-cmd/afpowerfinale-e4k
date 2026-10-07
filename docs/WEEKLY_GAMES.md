# Weekly game production and publishing

## Content and approval

The publication has a maximum of two games per day. Mechanics can repeat across days; lesson content and purpose determine selection. The Week 4 lineup was explicitly approved: Spotlight + Rescue, Bomb + Rockets, Memory + Inspection, Spotlight + Bomb, Rockets + Memory. Week 5 uses the first two previously suggested games in each lesson and remains pending visual review in the master catalog.

For each new week prepare a content sheet containing course, level, week, story/version, characters, locations, approved art/audio, target vocabulary and grammar, each day's learning objective, and explicitly identified prior-week review. Do not invent a missing story or assume an existing game is approved. All authored curriculum stays in src/data/content.ts; the game engine imports it.

For each selected game record: objective, speaking task, visible consequence of success, failure/retry behavior, inclusive turn plan, and win/loss ending. Every answer must cause an understandable change. Image memory uses identical illustrations for each pair. Hints must not show the completed spoken answer.

## User views and share links

- `/`: master catalog. Course, level and week filters; review status, two games per day, open/copy links. This is a read-only content dashboard, not a protected account or editing interface.
- `/week/4`, `/week/5`: stable Level 2 pilot weekly pages, each containing five days and at most two games per day.
- `/lesson/kids-super-intensive-l2-w4-d1` (and equivalent IDs): stable daily links.
- `/play/adventure?lesson=...&activity=...`: allowlisted Week 4 game link. A game cannot be paired with a different week/day.
- Week 5 game links retain their existing lesson query parameter.

Copy buttons construct URLs from the current public origin. If clipboard permission is denied, a selectable URL is displayed. Weekly CSV export contains the week, five daily links, and the selected game links. Embed these URLs as links in Prezi; no assumption is made about Prezi supporting interactive iframe embedding.

Additional levels must receive level-qualified week identities (for example `/course/.../level/3/week/4`). Never repurpose the existing Level 2 URLs for another course, level, or story.

## Engine and publishing

`missions/` contains the reviewed standalone engine, served inside the game route with its CSS isolated. Its data adapters import the central curriculum file. `npm run build:missions` emits `/public/missions/v1/`; these generated files are ignored in Git. `npm run build` always builds missions first, then the TanStack application. Source art is tracked under missions/public/assets. The original local mission-preview directory is not the publishing source after this integration.

Before publishing: typecheck, run unit tests, build both outputs, verify every selected game loads, match each link to its week/day, exercise clipboard success/fallback and CSV, and visually inspect desktop/mobile layouts. Check direct links in a fresh browser without localStorage. Preserve Git history with normal commits and pushes. Confirm deployment by loading the public master page, weekly URLs and versioned game assets; a push alone is not deployment verification.
