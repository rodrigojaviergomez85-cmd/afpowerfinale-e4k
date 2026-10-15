# Roadmap

- [ ] Vocab Blitz: varying ball landing positions and bounce animation; restore shared countdown size. Verify movement and countdown.

- [x] Vocab Blitz: larger court, compact category area/buttons, profession activities category label; Beat the Bomb: single WH-only switch with Yes/No. Verified switch persistence, correct/out and review at 950×639, 1366×768 and 1920×1080 without scrolling or page errors; six logic tests pass.

- [x] Vocab Blitz: static vocabulary groups, remembered category/clock/round setup, word-tennis court, alternating team-specific roster turns, undo, timed review, sudden-death reducer and finals. Five logic tests pass; full three/five-round matches, timeout/undo, automatic review advance and rematch verified at 874×639, 1366×768 and 1920×1080 with no page errors.

- [x] Circus Rescue: centered blue splash and plain white So close; large tilted pink rescue sign and Tadaa emoji; both endings verified at 874×639, 1366×768 and 1920×1080 with no runtime errors (test browser lacks emoji glyphs).

- [x] Hub, quick setup, shared engine, Demo Drill, results, settings
- [x] Replace all content with real curriculum in src/data/content.ts (no backend, no admin)
- [x] Setup: Course → Level → Week → Day dropdowns with Review badge
- [x] Picture items (SVG shapes, big emoji)
- [x] Beat the Bomb: full game, dramatic bomb, explosion + defuse sequences, end screens, options/presets
- [x] Key badges inside every button; "?" help overlay; remove shortcut text line
- [x] Content rules (fallback to earlier days/weeks, lower target, rematch prefers unused)
- [x] Bridge Builder: canyon/river game, sandbags, win/lose sequences, setup options
- [x] Tightrope Rescue: circus co-op game, type rotation, auto-opening hidden boxes, splash/win sequences; all play screens fit 1366×768
- [x] Rocket Race: 2-team space race, turbo, sputter, sudden death, landing sequence, setup options
- [x] Bridge Builder: drawn explorer and full-width question card; verify during play
- [x] Bridge Builder: drawn open treasure, continuous river waves, compact status and floating timer; all card types verified without scrolling at 874×639, 1366×768 and 1920×1080
- [x] Bridge Builder: enlarged scene, restored 64px buttons and 120px floating timer, reduced empty card space; full rounds verified at 874×639, 1366×768 and 1920×1080.
- [x] Remove card-type on/off pickers from Tightrope Rescue and Rocket Race setup — the app always picks a balanced mix.
- [x] Tightrope: illustrated elevator rescue, upward/downward platform and safe/splash endings; large scene, floating timer and full-size controls without scrolling.
- [x] Tightrope: lightweight cohesive illustrated scene, expressive character, continuous animated SAFE/SPLASH endings; play and both endings verified at 874×639, 1366×768 and 1920×1080, with no character/background image requests.
- [x] Circus Rescue: restored striped tent and reacting audience, removed footer text, normalized safe wording, renamed game, dramatic banner endings and flooding water; removed near-defeat rattle; play and both endings verified at 874×639, 1366×768 and 1920×1080.
- [x] Kitten Rescue game
- [x] Kitten Rescue: expressive reacting neighbors and detailed truck and sun; preserved firefighter, kitten, tree and result designs. Verified watch/cheer/gasp reactions in play, no runtime errors or windowed overflow.
- [x] Muddy Tug of War: 2-team tug game with drawn bunny/puppy teams, alternating turns, steal, POWER PULL on 3-streak or fast hidden picture, sudden death and tie; options (4–7 pulls, 10/15/20/30 s, 10/16/20 cards) remembered; SPLOOSH finale and results. Verified win, tie, power pull, "So close" glow and compact 874×639 layout with no overflow or page errors.
