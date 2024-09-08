import { memo } from "react";
import GameStrip from "./GameStrip";
import { IGame, IScoreManager } from "./types";
import Spacer from "../layout/Spacer";

type GamesProps = {
  games: IGame[];
  updateScore: IScoreManager["updateScore"];
  finishGame: IScoreManager["finishGame"];
};

function Games(props: GamesProps) {
  const { games, updateScore, finishGame } = props;
  return games.map((game) => (
    <>
      <GameStrip
        key={game.id}
        game={game}
        updateScore={updateScore}
        finishGame={finishGame}
      />
      <Spacer />
    </>
  ));
}

export default memo(Games);
