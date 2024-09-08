import type { Meta, StoryObj } from "@storybook/react";
import Games from "../components/scoreboard/Games";
import { IGame } from "../components/scoreboard/types";

const meta: Meta<typeof Games> = {
  title: "Scoreboard/Games",
  component: Games,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Games>;

const sampleGames: IGame[] = [
  {
    id: "1",
    homeTeam: "Home Team 1",
    awayTeam: "Away Team 1",
    homeScore: 2,
    awayScore: 1,
    timestamp: Number(new Date()),
  },
  {
    id: "2",
    homeTeam: "Home Team 2",
    awayTeam: "Away Team 2",
    homeScore: 0,
    awayScore: 3,
    timestamp: Number(new Date()),
  },
];

export const Default: Story = {
  args: {
    games: [],
    updateScore: () => {},
    finishGame: () => {},
  },
};

export const NoGames: Story = {
  args: {
    games: [],
    updateScore: () => {},
    finishGame: () => {},
  },
};

export const ManyGames: Story = {
  args: {
    games: [
      ...sampleGames,
      {
        id: "3",
        homeTeam: "Home Team Lala",
        awayTeam: "Away Team Away",
        homeScore: 1,
        awayScore: 1,
        timestamp: Number(new Date()),
      },
      {
        id: "4",
        homeTeam: "Home Team Max",
        awayTeam: "Away Team Min",
        homeScore: 5,
        awayScore: 0,
        timestamp: Number(new Date()),
      },
    ],
    updateScore: () => {},
    finishGame: () => {},
  },
};
