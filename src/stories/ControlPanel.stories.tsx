import type { Meta, StoryObj } from "@storybook/react";
import ControlPanel from "../components/scoreboard/ControlPanel";

const meta: Meta<typeof ControlPanel> = {
  title: "Scoreboard/ControlPanel",
  component: ControlPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ControlPanel>;

export const Default: Story = {
  args: {
    startGame: () => alert("Game started!"),
    homeTeam: "",
    awayTeam: "",
    setHomeTeam: () => {},
    setAwayTeam: () => {},
  },
};

export const WithTeams: Story = {
  args: {
    ...Default.args,
    homeTeam: "Home Team",
    awayTeam: "Away Team",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    homeTeam: "",
    awayTeam: "",
  },
};
