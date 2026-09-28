# OSRS Dry Calculator

**Live:** https://oskar-bobro.github.io/osrs-dry-calculator/

How long should an Old School RuneScape drop take, and how unlucky are you if you still haven't got it?

## What it does

You enter three numbers:

- **Kills per hour:** how fast you kill the monster
- **Drop rate:** the X in "1 in X", for example `128`
- **Kills so far:** how many kills you have done without the drop

It shows the expected number of kills, the expected time in hours, and the chance of still being without the drop after your kills so far. The result updates as you type.

## The maths

| Result                    | Formula                             |
| ------------------------- | ----------------------------------- |
| Expected kills            | X                                   |
| Expected time             | X ÷ kills per hour                  |
| Chance of still being dry | (1 − 1/X)ⁿ, where n is kills so far |

Expected kills is simply X. The expected number of tries for a 1/X chance is 1 ÷ (1/X), which is X.

The dry chance works because every kill is an independent roll. The chance of missing once is 1 − 1/X, so the chance of missing n times in a row is that number multiplied by itself n times.

Test values for a 1/128 drop at 45 kills per hour:

| Kills so far | Still dry |
| ------------ | --------- |
| 0            | 100.0%    |
| 128          | 36.6%     |
| 256          | 13.4%     |

Expected time: 2.8 hours.

## The result worth knowing

At exactly the drop rate, when n = X, you are still dry about 37% of the time. For a 1/128 drop it is 36.6%. The rarer the drop, the closer it gets to 1/e ≈ 36.8%, but it never goes above that. Roughly one player in three goes past the drop rate without the item. That is normal, not bad luck.

## A common mistake

It is tempting to multiply the drop rate by the number of kills: 128 kills at 1/128 would give 100%, and 256 kills would give 200%. A probability above 100% is impossible, so the model must be wrong. A coin shows the same thing: two flips at 50% do not guarantee heads, since you can get tails twice in a row. The drop does not get more likely with each kill. Every kill is a fresh roll, so the right question is how likely it is to miss every one of them.

## Input validation

The calculator refuses to show a result it cannot stand behind:

- Kills per hour must be above 0
- Drop rate must be 1 or more
- Kills so far must be 0 or more

Empty fields are caught as well. The inputs are read with `valueAsNumber`, so an empty field gives `NaN` instead of a silent `0`, and it is checked with `Number.isNaN`. The function always runs in the same order: read, check, calculate, show.

## Built with

Plain HTML, CSS and JavaScript. No frameworks, no libraries, no build step. This is my first JavaScript project, and I wrote the code by hand using MDN as my reference.

A few deliberate CSS choices:

- **`font: inherit` on inputs.** Browsers give form fields their own smaller font (13.33px Arial in Chrome), and it overrides inheritance. Inheriting the page font also stops iOS Safari from zooming in when a field is tapped.
- **Inputs about 48px tall,** for easy tapping on a phone: 24px line height, 2 × 10px padding and the browser's default border.
- **`white-space: pre-line` on the result,** so line breaks in the text are shown without inserting HTML.
