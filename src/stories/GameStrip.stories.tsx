import type { Meta, StoryObj } from "@storybook/react";
import GameStrip from "../components/scoreboard/GameStrip";
import { IGame } from "../components/scoreboard/types";

const meta: Meta<typeof GameStrip> = {
  title: "Scoreboard/GameStrip",
  component: GameStrip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GameStrip>;

const sampleGame: IGame = {
  id: "1",
  homeTeam: "Home Team",
  awayTeam: "Away Team",
  homeScore: 0,
  awayScore: 0,
  timestamp: Number(new Date()),
};

export const Default: Story = {
  args: {
    game: sampleGame,
    updateScore: () => {},
    finishGame: () => {},
  },
};

export const WithScores: Story = {
  args: {
    ...Default.args,
    game: {
      ...sampleGame,
      homeScore: 2,
      awayScore: 1,
    },
  },
};

export const LongTeamNames: Story = {
  args: {
    ...Default.args,
    game: {
      ...sampleGame,
      homeTeam: "Very Long Home Team Name",
      awayTeam: "Extremely Looooooooooo0000kkkookokookkng Away Team Name",
    },
  },
};
