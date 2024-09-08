import type { Meta, StoryObj } from "@storybook/react";
import Summary from "../components/scoreboard/Summary";
import { IGame } from "../components/scoreboard/types";

const meta: Meta<typeof Summary> = {
  title: "Scoreboard/Summary",
  component: Summary,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Summary>;

const sampleGames: IGame[] = [
  {
    id: "1",
    homeTeam: "Home Team Home",
    awayTeam: "Away Team Away",
    homeScore: 3,
    awayScore: 1,
    timestamp: Number(new Date()),
  },
  {
    id: "2",
    homeTeam: "Home Team 12",
    awayTeam: "Away Team 34",
    homeScore: 2,
    awayScore: 2,
    timestamp: Number(new Date()),
  },
];

export const Default: Story = {
  args: {
    getSummary: () => [],
  },
};

export const NoGames: Story = {
  args: {
    getSummary: () => [],
  },
};

export const ManyGames: Story = {
  args: {
    getSummary: () => [
      ...sampleGames,
      {
        id: "3",
        homeTeam: "Home Team 3",
        awayTeam: "Away Team 3",
        homeScore: 0,
        awayScore: 1,
        timestamp: Number(new Date()),
      },
      {
        id: "4",
        homeTeam: "Home Team 4",
        awayTeam: "Away Team 4",
        homeScore: 5,
        awayScore: 0,
        timestamp: Number(new Date()),
      },
    ],
  },
};
