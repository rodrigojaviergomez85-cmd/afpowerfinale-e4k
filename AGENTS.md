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

## Weekly game publication
- Each day exposes at most two selected games. Selection lives in `src/data/content.ts` and `weekGames`; never infer approval from an existing implementation.
- The master catalog is `/`; stable weekly Prezi links are `/week/4` and `/week/5` for the currently published Level 2 pilot. Additional levels must use level-qualified routes, not reuse those identities.
- Week 4 uses the approved mission engine under `missions/` through `/play/adventure`. Week 5 retains its prior engine and is marked pending visual review in the master catalog.
- Weekly story, characters, visuals and language must match the curriculum. Prior-week review is explicitly labeled. Do not copy a story's characters into a different week by default.
- Memory cards pair identical images; speech is validated by the coach without displaying the completed answer.
- Run `npm run build` to compile versioned mission assets before the main app. Do not publish only the main Vite build with stale mission assets.
