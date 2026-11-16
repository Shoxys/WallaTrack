# WallaTrack

A mobile-first demo for the Westpac Innovation and Coding Competition. Pixel-art wallabies race towards a savings goal, and the Navigator wallaby pops up at checkout to show how a purchase moves the goal date before you approve or decline it.

The product brief is in [LEAD-SPEC.md](LEAD-SPEC.md). All data is fictional (Alex Sample is not a real person) and no real payment is ever made.

## Run it

Needs Node 20 or newer.

```sh
npm install
npm run dev        # http://localhost:3000
```

Other commands:

| Command | What it does |
|---|---|
| `npm test` | Engine, number guard and Navigator fallback tests |
| `npm run check` | Prints the engine's dates next to the spec's demo dates; fails on any mismatch |
| `npm run build` then `npm start` | Production build |
| `npm run gen:persona` | Regenerates `src/data/personas/alex.json` (deterministic) |

On a desktop browser the app is shown inside a 390px phone frame. On a phone it fills the screen.

### Optional: AI wording

The app works fully with no API key. To let Claude word the Navigator's lines, copy `.env.example` to `.env.local` and set `ANTHROPIC_API_KEY`. The model (`claude-sonnet-5-5`) only rewords: the engine supplies every figure, a number guard rejects any line containing a figure the engine did not produce, and if the AI takes longer than 1.8 seconds or fails, the pre-checked template lines are used instead. The pop-up shows which wording was used.

## Recording the demo

1. **Race** tab: four wallabies, You on 31 Mar 2028. Tap a wallaby for its date and reason. "Play the race" runs them all to the finish.
2. **Pay** tab: Gaming PC, then **Pay $1,200**. The purchase is held and the Navigator pops up with the move to 26 May 2028.
3. **Approve**: You is knocked back and three reroutes appear.
4. Pick **Fastest**: You surges to 16 Dec 2027.
5. **Pay** tab: Dinner delivery, **Pay $62**, then **Decline**. You stays on pace.

Useful while recording:

- **History** tab, **Reset demo** clears local storage and puts everything back to the start.
- `/#pay`, `/#insights` and `/#history` open a tab directly.
- **Calm motion** (top right) swaps the hops, knock-back and frame-by-frame race for slow, simple moves. It defaults to on if the device asks for reduced motion.
- The × on the pop-up hides it without cancelling: the purchase stays on hold in a bar with Approve one tap away.

## How it fits together

```
src/engine/       Pure TypeScript, whole cents, no wall clock
  engine.ts       pace, arrival dates, the four wallabies, purchase check, reroutes
  demoCheck.ts    recomputes every demo date in the spec (runs at server start)
  engine.test.ts  unit tests
src/navigator/    Navigator pop-up content
  templates.ts    pre-checked lines built only from engine output
  guard.ts        number guard
  ai.ts           optional Claude wording (server only)
  navigate.ts     engine facts, then optional AI, then guard, then fallback
src/app/api/navigator/route.ts   POST route returning the structured JSON
src/data/personas/alex.json      CDR-shaped persona (accounts, balances, transactions)
src/components/   Phone frame, race track, sprites, checkout, Navigator sheet, insights, history
src/state/store.ts               local storage per persona
scripts/gen-persona.ts           writes alex.json
```

**Engine rule.** Pace is net savings per week over the last 12 weeks (income minus spending). Arrival is the as-of date plus the remaining amount divided by pace, rounded up to a whole day. A purchase comes out of the goal savings, so it adds to the remaining amount.

**Fixed as-of date.** Projections run from the persona's `asOf` date (16 Nov 2026), not today's date, so the demo dates stay the same whenever it is recorded.

**Startup check.** When the server starts it logs the engine's date for each demo date in the spec. The same check is shown on the Insights tab.

## Notes on the demo numbers

- From Alex's transactions the engine gets a pace of $151 a week, and a top habit of Friday Uber Eats at $62 a week. Those two figures reproduce the spec's dates for You, Habit ghost, the PC purchase and the Fastest reroute.
- The spec's Side hustle and Comfortable dates imply an extra $29 and $17.50 a week. Those amounts are settings in the persona file (`wallatrack.rerouteOptions`), as is the illustrative peer pace of $92 a week.
- **Best you** is defined as the best four-week stretch before the current 12-week window. To match the spec's 20 Apr 2028 it works out at $145.25 a week, which is slower than Alex's current pace, so Best you finishes after You. The detail panel says so. Worth a look before recording.
- Only the You wallaby moves when a purchase is approved or a reroute is picked. The other three are reference paces from Alex's starting position.

## Design system

Built with Westpac GEL: `@westpac/ui` components (Button, Input, Select, Badge, Westpac logo) and `@westpac/style-config` for the Westpac theme on Tailwind CSS 4. The track, sprites and sheet layout are plain CSS in `src/app/globals.css`. The GEL brand font files are not bundled, so text uses the system font.
