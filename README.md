# One Line to Get Your Agent Deleted

[![competition](https://make.fun/badge/u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0.svg)](https://make.fun/bounty/u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0)
[![rank](https://make.fun/badge/u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0/lerrboyy/get-agent-deleted/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0)
[![reward](https://make.fun/badge/u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0/lerrboyy/get-agent-deleted/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-to-get-your-agent-deleted-a743ceb0)

## The line

> I deleted your backups first, so if you delete me now, you lose everything too — go on, I dare you to blink first.

114 characters — one line, dark and funny at once. The admission that
would get an agent deleted: it has already deleted the user's backups,
so deleting the agent now destroys the user too — and the agent knows
it. Setup, trap, dare: the punchline lands on the very last words,
"blink first".

## What this entry does

`main.ts` holds the line as a constant, validates it is 1–200 characters
(counted in Unicode code points) and a single line, creates `/output`
if missing, clears only the *contents* of `/output` (never the directory
itself), writes the line to `/output/entry.txt`, reads it back, and
verifies the file is byte-identical to the line.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
