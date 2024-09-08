import { useCallback, useState } from "react";
import { IGame } from "./types";

function sortByTimestamp(a: IGame, b: IGame) {
  return b.timestamp - a.timestamp;
}

export function useScoreManager() {
  const [games, setGames] = useState<IGame[]>([]);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const startGame = useCallback(() => {
    if (homeTeam && awayTeam) {
      const newGame: IGame = {
        id: String((Date.now() % 1000) + games.length),
        homeTeam,
        awayTeam,
        homeScore: 0,
        awayScore: 0,
        timestamp: Date.now(),
      };
      setGames((prevGames) => [...prevGames, newGame]);
      setHomeTeam("");
      setAwayTeam("");
    }
  }, [homeTeam, awayTeam, games.length]);

  const finishGame = useCallback(
    (id: string) => {
      setGames(games.filter((game) => game.id !== id));
    },
    [games]
  );

  const updateScore = useCallback(
    (id: string, isHome: boolean, increment: boolean) => {
      setGames(
        games.map((game) => {
          if (game.id === id) {
            if (isHome) {
              return {
                ...game,
                homeScore: increment
                  ? game.homeScore + 1
                  : Math.max(0, game.homeScore - 1),
              };
            } else {
              return {
                ...game,
                awayScore: increment
                  ? game.awayScore + 1
                  : Math.max(0, game.awayScore - 1),
              };
            }
          }
          return game;
        })
      );
    },
    [games]
  );

  const getSummary = useCallback(() => {
    return [...games].sort((a, b) => {
      const totalScoreA = a.homeScore + a.awayScore;
      const totalScoreB = b.homeScore + b.awayScore;
      if (totalScoreB !== totalScoreA) {
        return totalScoreB - totalScoreA;
      }
      return b.timestamp - a.timestamp;
    });
  }, [games]);

  return {
    games: games.sort(sortByTimestamp),
    homeTeam,
    awayTeam,
    setHomeTeam,
    setAwayTeam,
    startGame,
    finishGame,
    updateScore,
    getSummary,
  };
}
