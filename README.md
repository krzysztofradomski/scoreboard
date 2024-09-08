## Install

```bash
npm install "football-scoreboard-1.0.0.tgz" or build from source
```

## Usage

```tsx
import Scoreboard from "football-scoreboard";

export default function App() {
  return <Scoreboard />;
}
```

## Dependencies

- React
- TailwindCSS
- Lucide

Modify tailwind.config.ts to include key:

```ts
content: [
  "./node_modules/football-scoreboard/dist/football-scoreboard.umd.js",
],
```

## Tests:

```bash
npm test
```

Also available Storybook tests.

```bash
npm run storybook

```

## TODO:

- fix missing TS exports
