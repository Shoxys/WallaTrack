# WallaTrack: high-level requirements, specification, and scope

Westpac Innovation and Coding Competition. Draft plan for the team, updated by Hackathon Lead.

## Overview

WallaTrack is a mobile-first web app for Westpac customers. Artistic wallabies race along a track towards the customer's savings goal, and each wallaby is a projected future version of the customer.

The core moment is the **purchase check**. When the customer is about to spend, the AI Navigator, an animated wallaby, pops up mid-purchase. It shows in plain numbers how the purchase moves their goal date, then lets them **approve** (buy it and see the cost to the goal) or **decline** (skip it and stay on pace). After an approval, it offers ways to win the time back. A deterministic engine checks every number before it is shown.

**Who it is for:** everyday customers with a goal, such as a first home starter, who rarely open budgeting tools but do make purchases every day.

## Objectives

| Objective | How Wallatrack meets it |
|---|---|
| Help customers understand their spending | The goal impact is shown at the moment of purchase, plus a spending breakdown and insight cards |
| Help customers achieve financial goals | Approve or decline at checkout, projected arrival dates, and reroutes that recover lost time |
| Give insights into habits | Habit ghost wallaby and habit cards, for example Friday Uber Eats at $62 a week. Repeat purchases get flagged when the pop-up appears |
| A novel engagement feature for the bank | The goal shows up inside the purchase flow, at the moment the decision is made, instead of in a budgeting tab nobody opens |

## Functional requirements

1. **Financial history.** A user's previous income and spending history (which will be analysed).
2. **Goal.** Set a goal with an amount and a target. Mock savings count towards it.
3. **Race track.** Four wallabies: You (current pace), Habit ghost (you without your top habit), Best you (your best past stretch) and People like you (illustrative peer pace). They sit on a race track timeline together, which the user can playback to see all wallabies run forwards together at different paces to the goal line.
4. **Wallaby details.** Tap a wallaby to see its projected arrival date and the reason behind it.
5. **Purchase check (core).** A simulated purchase (a demo "Pay" button on a mock checkout or card-tap screen) is held before it completes, and the Navigator wallaby pops up with:
   - the purchase (merchant, amount, category)
   - the goal impact in one line, for example "This pushes your first home starter back about 8 weeks" (the engine works out the date)
   - a habit link where one exists, for example "3rd takeaway this week"
   - **Approve** and **Decline** buttons
6. **Approve.** The purchase completes, the You wallaby is visibly knocked back on the track, and the new arrival date is shown. The Navigator then offers three reroutes (Fastest, Side hustle, Comfortable), and picking one moves You forward again.
7. **Decline.** The purchase is cancelled, You keeps its pace (with a small hop or cheer), and the Navigator shows the time saved against the goal.
8. **What-if.** The customer can also type in a planned purchase (for example a $1,200 PC) to run the same purchase check without buying anything.
9. **Habit insights and spending breakdown.** Cards drawn from transactions. They feed the habit line in the pop-up.
10. **Decision history.** A short list of approved and declined purchases with their goal impact, which feeds the habit cards.

## Non-functional requirements

- The engine verifies every number the AI shows. If the AI fails or is slow (target under 2 seconds for the pop-up), the app falls back to pre-checked lines, so the purchase check never blocks the demo.
- Factual information only, never personal advice. The pop-up shows the impact and the choice is the customer's. A general information notice is on screen.
- The pop-up must be dismissible, and Approve must always be one tap away, so it feels like a nudge, not a lock on the customer's money.
- Built for phones about 390px wide and shown in a phone frame. Readable, with a calm motion mode.
- Fake data only, with no real personal details.
- Utilise Westpac's own design resources and components available from their [Westpac GEL GitHub Repository](https://github.com/WestpacGEL/GEL-next).

## Specification

| Area | Approach |
|---|---|
| App | Next.js web app, mobile first, presented as a phone app |
| Purchase flow | Mock checkout or card-tap screen with scripted demo purchases (PC, Uber Eats, coffee). Purchases are held until approved or declined. No real payments |
| Wallabies | Pixel-art CSS sprite sheets. Each wallaby is a tappable element on the track |
| AI Navigator | Animated wallaby pop-up driven by a server route that returns structured JSON (purchase, goal impact, habit link, approve or decline, reroutes), with a fallback to pre-checked messages |
| Engine | TypeScript, whole cents. Pace is net savings per week, and arrival is the remaining amount divided by pace. It works out the before and after dates for each purchase. Dates are confirmed when the app starts |
| Data | JSON personas shaped like Consumer Data Right banking data (Australia's open banking standard) |
| State | Browser local storage per persona, including decision history. No database for the demo |

## Scope

**In scope**
- One persona, two if time allows
- Goal race and wallaby details
- **Purchase check pop-up with approve or decline and an instant race update**
- Reroutes after an approval
- What-if entry using the same pop-up
- Habit insights
- Number guard
- Demo video and the bank's business case

**Out of scope**
- Real bank or card connections, and real payment holds
- Login and sign-up
- Real money movement
- Backend database
- Native app
- Investment features
- Interest calculations

**Stretch, if time allows**
- Weekly check-ins, streaks and badges ("declined 3 impulse buys this week")
- Goal-linked deposits (when a purchase is declined, offer to move that amount into the goal)
- Consented insights for the bank
- A future-self letter: a short note from the customer's future self about how they reached the goal

## Demo data

Alex Sample is a fake customer, paid $1,850 a fortnight, who pays $390 a week in rent. Alex is saving for a $15,000 first home starter and has $4,200 saved.

Projected arrivals: Habit ghost 6 Nov 2027, You 31 Mar 2028, Best you 20 Apr 2028, People like you 15 Feb 2029 (illustrative).

**Demo purchase:** a $1,200 PC at checkout. The pop-up shows You moving from 31 Mar 2028 to 26 May 2028.
- **Approve** knocks You back to 26 May 2028, then the reroutes appear: Fastest 16 Dec 2027, Side hustle 26 Feb 2028, Comfortable 29 Mar 2028.
- **Decline** keeps You at 31 Mar 2028.

The engine must re-check and confirm every date above at startup. Any extra demo purchases (Uber Eats, coffee) get their dates from the engine, never hand-written.

## Demo spine (what the video shows first)

1. Alex's race track, with four wallabies and You on 31 Mar 2028.
2. Alex taps Pay on a $1,200 PC. The purchase is held and the Navigator wallaby pops up: "This pushes your goal back to 26 May 2028."
3. Alex taps Approve. The wallaby is knocked back and the Navigator offers three reroutes.
4. Alex picks Fastest. The wallaby surges to 16 Dec 2027.
5. A quick second purchase (Uber Eats) is declined, and the wallaby stays on pace.

## Success criteria

- A smooth video of up to 10 minutes, submitted before 4pm on Tue 17 Nov.
- The purchase check works end to end: tap Pay, the Navigator pops up with the goal impact, Approve knocks the wallaby back, a reroute recovers it, and Decline keeps it on pace.
- No number on screen fails the engine check.
- The bank's value is clear. The customer's goal is part of every purchase decision inside the Westpac app, with stretch features pointing to repeat visits and deposits.

Full detail: SPEC.md (product) and BUILD.md (build plan). Names were checked with a quick web search, not a trade mark search.
