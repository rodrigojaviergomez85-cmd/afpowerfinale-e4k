# Roadmap

- [x] Import uploaded Level 8 Weeks 1–8 exactly: 40 days, 800 general cards, 80 mistakes and 8 vocabulary groups; exact upload comparison and unchanged existing lessons verified. All 765 curriculum/Blitz tests pass; Level 8 selected through Quick Setup and Demo Drill answer reveal verified without page errors.

- [ ] AF-SUPER-FINALE-CONTEXT-FIXES_2.txt: six app fixes (APP-01 results scrolling; APP-02 card instructions; APP-03 distinct no-repeat decks; APP-04 scope/difficulty + remove flag-ID cards; APP-05 hidden pictures 3×2 six-tile mosaic with category prompts; APP-06 Bridge Builder Sandbox relabel), CONTENT-EXCEPTION-01 (L2W5 vet question), then 750 exact content replacements. L2W4 and rest of L2W5 protected; preserve 16 lines + 2 mistakes per day.
- [ ] Hot Chair flames: one continuous fire layer rising from below, no flames before halfway, chair fully covered at time-up; verify at 0:40/0:30/0:15/0:00.

- [x] Apply all 434 uploaded targeted curriculum corrections (0 already applied, 0 unmatched, no new duplicates); 444 tests pass, including exact day/type assignments and a whole-bank preservation check. Corrected scene and translation cards verified in Demo Drill at 791×639: clues fit, answers stay hidden until reveal, no scroll or runtime errors; game engines/settings/visuals and Level 2 Weeks 4–5 unchanged.

- [x] Make shared hidden pictures a continuous twelve-tile mosaic with thin seams and exterior-only rounding; manual reveal leaves the image and eleven remaining covers stationary, automatic reveal and full answer reveal verified without runtime errors.
- [x] Fit Muddy Tug of War rules without scrolling; all rules and Skip visible at 951×639, 1366×768, 1920×1080 and 1280×1800; build OK.

- [x] Improve Kitten Rescue's firefighter, ladder and tree using the supplied cartoon reference; preserved Pepper and all reactions. Verified climbing, slipping, holding, victory and loss at 1206×639 and play at 1366×768, with no runtime errors or page overflow; build OK.

- [x] Replace Detective Sniff's net capture with a direct hold, keep Racky's size and surprised expression, and remove dashed capture lines. Capture, results, rematch and unchanged flyaway verified at 1206×639 without runtime errors; build OK.

- [x] Improve Detective Sniff's characters, town and balloon using the supplied cartoon references; verified cards, answer reveal, capture, escape, both results and rematch at 951×639 and 1366×768 with no runtime errors. Separated the captured raccoon from the balloon and kept all controls visible.

- [x] Review all ten games for overlapping cards, answers, notices and controls at 844×639, 1366×768 and 1920×1080. Fixed Rocket Race's layout/steal track, Bomb's columns/controls, Detective's options/answer space, compact rules and shared responsive picture/card fitting. Verified Q/T/F/H/S and M cards where applicable, Hot Chair and Blitz views, and all three team-game timeout tracks; nine content/Blitz tests pass, no timeout runtime errors.

- [x] Correct overlapping cards/timeout messages in Demo Drill and Muddy Tug of War; hidden/revealed cards and timeout verified at 844×639, 1366×768 and 1920×1080.
- [x] Restrict hidden-picture cards to natural vocabulary entries and omit unrelated earlier-week hidden cards; nine content/Blitz tests pass. Two pre-existing routing harness tests still fail (document shell rendered into a div); unrelated to gameplay changes.

- [x] Vocab Blitz: varying ball landing positions and bounce animation; restored shared countdown size. Six exchanges verified at 950×639 and 1366×768; countdown matches Demo Drill (256px numbers, 224px GO), no page errors.

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
- [x] Hot Chair: playable 2-team timed rounds, card modes, final reveal, tiebreaker
- [x] Detective Sniff: M mistake cards (separate mistakes list per day), chase scene, hint, Super Sniff, win/lose, setup presets. Verified 844×639 and 1366×768, no scroll.
- [x] Kitten Rescue: make the on-screen branch countdown (last 10 s) audible with escalating ticks/beeps; verified build and playthrough.

- [x] Reorder the game library: Demo Drill, Beat the Bomb, Circus Splash, Rocket Race, Kitten Rescue, Muddy Tug of War, Bridge Builder, Detective Sniff, Vocab Blitz, Hot Chair last; verified in the hub at 791x639, build OK.
