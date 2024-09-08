import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import Scoreboard from "../components/scoreboard";

const meta = {
  title: "Example/Scoreboard",
  component: Scoreboard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Scoreboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeTeamInput = canvas.getByPlaceholderText("Home Team");
    await expect(homeTeamInput).toBeInTheDocument();
    await userEvent.click(homeTeamInput);
    await userEvent.type(homeTeamInput, "Cool Home Team Name");

    const awayTeamInput = canvas.getByPlaceholderText("Away Team");
    await expect(awayTeamInput).toBeInTheDocument();
    await userEvent.click(awayTeamInput);
    await userEvent.type(awayTeamInput, "Lousy Away Team Name");

    const startGameButton = canvas.getByText("Start Game");
    await expect(startGameButton).toBeInTheDocument();
    await userEvent.click(startGameButton);

    const onlyGameStrip = canvas.getByText(/Cool Home Team Name 0/gi);
    await expect(onlyGameStrip).toBeInTheDocument();

    const homeScoreButtonForOnlyGameStrip = canvas.getByTestId("plus-home");
    await expect(homeScoreButtonForOnlyGameStrip).toBeInTheDocument();

    const awayScoreButtonForOnlyGameStrip = canvas.getByTestId("plus-away");
    await expect(awayScoreButtonForOnlyGameStrip).toBeInTheDocument();

    await userEvent.click(homeScoreButtonForOnlyGameStrip);
    await userEvent.click(homeScoreButtonForOnlyGameStrip);
    await userEvent.click(homeScoreButtonForOnlyGameStrip);
    await userEvent.click(homeScoreButtonForOnlyGameStrip);
    await userEvent.click(homeScoreButtonForOnlyGameStrip);

    await userEvent.click(awayScoreButtonForOnlyGameStrip);

    expect(canvas.getByText(/Cool Home Team Name 5/gi)).toBeInTheDocument();
    expect(canvas.getByText(/1 Lousy Away Team Name/gi)).toBeInTheDocument();
  },
};
