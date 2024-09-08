import { Dispatch, SetStateAction } from "react";

export interface IGame {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  timestamp: number;
}

export interface IScoreManager {
  games: IGame[];
  homeTeam: string;
  awayTeam: string;
  setHomeTeam: Dispatch<SetStateAction<string>>;
  setAwayTeam: Dispatch<SetStateAction<string>>;
  startGame: () => void;
  finishGame: (id: string) => void;
  updateScore: (id: string, isHome: boolean, increment: boolean) => void;
  getSummary: () => IGame[];
}
