# WallaTrack

**Your savings goal, at the moment you pay.** WallaTrack is a prototype feature for the Westpac app. Pixel-art wallabies, each one a projected future version of you, race towards your savings goal. When you're about to make a purchase, your wallaby pops up and shows how that purchase moves your goal date. You then decide whether to buy.

Built for the Westpac Innovation and Coding Competition.

## Who it's for

Everyday Westpac customers who have a savings goal, such as a first home deposit. They rarely open budgeting tools, but they make purchases every day. WallaTrack puts the goal into the purchase itself, not a budgeting tab nobody opens.

## How to test it

You need [Node.js 22](https://nodejs.org) or newer.

```bash
git clone https://github.com/Shoxys/WallaTrack.git
cd WallaTrack
git checkout final-prototype
npm ci
npm run dev
```

Open the address Vite prints (usually http://localhost:5173) in a desktop browser window at least 1024px wide. A **presenter panel** on the left lets you jump to any screen, and the app runs in a phone frame on the right. On a phone-sized window, the app fills the screen and you navigate with the bottom tabs.

### What to try (about 3 minutes)

1. **Home**: Alex, a fake customer, has $4,200 saved towards a $15,000 goal.
2. **Set goal**: enter an amount, a date and a reason. WallaTrack analyses 12 weeks of spending and projects an arrival date: 31 Mar 2028, nine weeks behind the target.
3. **Goal timeline**: press **Play**. Four wallabies race to the goal: you at your current pace, you without your biggest habit, your best recent stretch, and people like you. Tap a wallaby to see when it arrives and why.
4. **Pending payment**: a $1,200 gaming PC is held before it goes through. The wallaby pops up and shows that it pushes the goal back about 8 weeks, to 26 May 2028.
5. Tap **Approve**. Your wallaby is knocked back on the track. Then pick one of three ways to win the time back (Fastest, Side hustle or Comfortable). Open the timeline again to see your wallaby surge ahead. Or tap **Decline** instead to stay on pace.
6. **Customise wallaby**: change its name, fur, outfit and accessories. Every option is free. Your wallaby looks the same everywhere it appears: on Home, on the race track and in the purchase pop-up.
7. **Your journey** and **Preview savings milestones** (25% to 100%): see goal milestones and the "goal achieved" screen.

**Reset demo** at the bottom of the presenter panel starts over. **Calm motion** turns animations off.

## How it works

- **Purchase check:** the core feature. The payment is held, the wallaby shows the goal impact in plain numbers, and the customer approves or declines. Approve is always one tap away, so it's a nudge, not a lock on anyone's money.
- **Wallaby race:** four projected futures on one track, so the trade-offs are easy to see.
- **Habit insights:** a spending breakdown and habit cards, such as Friday Uber Eats at $62 a week, drawn from transactions.
- **Number guard:** a deterministic engine works out every date and amount and re-checks the demo dates at startup. The presenter panel shows the result.
- **Westpac GEL styling:** the app uses the colours, type and components of Westpac's GEL design system. The customer's wallaby can be any colour.

## Good to know

- All data is fake. There are no real bank connections, payments or accounts.
- Everything shown is general information, not financial advice. The decision is always the customer's.
- Built with React, Vite, TypeScript and Tailwind CSS. App state is saved in the browser's local storage.

More detail is in [LEAD-SPEC.md](LEAD-SPEC.md).
