# Live Football World Cup Scoreboard

A simple TypeScript library that tracks live football matches and their scores.

## Features

- **Start a match** — initializes with score 0 – 0
- **Update score** — set absolute scores for home and away teams
- **Finish a match** — removes it from the scoreboard
- **Get summary** — returns matches ordered by total score (desc), with ties broken by most recently started

## Usage

```typescript
import { Scoreboard } from "./src";

const scoreboard = new Scoreboard();

scoreboard.startMatch("Mexico", "Canada");
scoreboard.startMatch("Spain", "Brazil");

scoreboard.updateScore("Mexico", "Canada", 0, 5);
scoreboard.updateScore("Spain", "Brazil", 10, 2);

const summary = scoreboard.getSummary();
// 1. Spain 10 - Brazil 2
// 2. Mexico 0 - Canada 5

scoreboard.finishMatch("Mexico", "Canada");
```

## Running Tests

```bash
npm test
```

## Design Decisions

- **Two classes with single responsibilities (SRP):**
  - `Match` — represents a single match, holds team names and score
  - `Scoreboard` — manages the collection of active matches

- **Validation at the boundaries:** invalid inputs (empty team names, negative scores, duplicate matches) are rejected immediately with descriptive errors

- **Deterministic sort order:** matches are assigned a creation order on construction, so ties in total score are broken by most recently started (no reliance on timestamps)

- **Immutable summary:** `getSummary()` returns a copy of the matches array to prevent external mutation of internal state

## Assumptions

- Team names are case-sensitive (`"mexico"` ≠ `"Mexico"`)
- A match is uniquely identified by its home team + away team pair
- Scores are absolute values (not increments) — as stated in the requirements
- The library is consumed as a simple module import, not a REST API or CLI
