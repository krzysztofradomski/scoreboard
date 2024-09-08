import { describe, it, expect } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useScoreManager } from "../components/scoreboard/utils";

describe("useScoreManager unit tests", () => {
  // Initialize with empty games list should work
  it("should initialize with an empty games list", async () => {
    const { result } = renderHook(() => useScoreManager());
    await waitFor(() => expect(result.current.games).toEqual([]));
  });

  // Attempt to start a game with empty home team should not work
  it("should not start a game when home team is empty", async () => {
    const { result } = renderHook(() => useScoreManager());
    await act(async () => {
      result.current.setAwayTeam("Away Team");
      result.current.startGame();
    });
    await waitFor(() => expect(result.current.games).toEqual([]));
  });

  // // Add a new game with empty away team should not work
  it("should not add a new game when away team is empty", async () => {
    const { result } = renderHook(() => useScoreManager());
    await act(async () => {
      result.current.setHomeTeam("Home Team");
      result.current.startGame();
    });
    await waitFor(() => expect(result.current.games).toHaveLength(0));
  });

  // Add a new game with valid home and away teams should work
  it("should add a new game when valid teams are provided", async () => {
    const { result } = renderHook(() => useScoreManager());
    await act(async () => {
      result.current.setHomeTeam("Team A");
      result.current.setAwayTeam("Team B");
    });
    await act(async () => {
      result.current.startGame();
    });
    await waitFor(() => {
      expect(result.current.homeTeam).toBe("");
      expect(result.current.awayTeam).toBe("");
      expect(result.current.games).toHaveLength(1);
    });
  });

  // Remove a game by its ID should work
  it("should remove a game by its ID", async () => {
    const { result } = renderHook(() => useScoreManager());
    await act(async () => {
      result.current.setHomeTeam("Team A");
      result.current.setAwayTeam("Team B");
    });
    await act(async () => {
      result.current.startGame();
    });
    await waitFor(() => expect(result.current.games).toHaveLength(1));
    await act(async () => {
      const gameId = result.current.games[0].id;
      result.current.finishGame(gameId);
    });
    await waitFor(() => expect(result.current.games).toHaveLength(0));
  });

  // Finish a game that does not exist should not work
  it("should not finish a game that does not exist", async () => {
    const { result } = renderHook(() => useScoreManager());
    const nonExistentGameId = "999";
    await act(async () => {
      result.current.finishGame(nonExistentGameId);
    });
    await waitFor(() => expect(result.current.games).toHaveLength(0));
  });

  // Add multiple games with unique teams and increment the games list length accordingly should work
  it("should add multiple games with unique teams and increment the games list length accordingly", async () => {
    const { result } = renderHook(() => useScoreManager());
    await act(async () => {
      result.current.setHomeTeam("Team A");
      result.current.setAwayTeam("Team B");
    });
    await act(async () => {
      result.current.startGame();
    });
    await act(async () => {
      result.current.setHomeTeam("Team C");
      result.current.setAwayTeam("Team D");
    });
    await act(async () => {
      result.current.startGame();
    });
    await waitFor(() => expect(result.current.games).toHaveLength(2));
  });
});
