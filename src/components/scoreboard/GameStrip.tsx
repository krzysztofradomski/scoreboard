import { Plus, Minus, X } from "lucide-react";
import { IGame, IScoreManager } from "./types";
import { memo } from "react";

type GameStripProps = {
  game: IGame;
  updateScore: IScoreManager["updateScore"];
  finishGame: IScoreManager["finishGame"];
};
function GameStrip(props: GameStripProps) {
  const { game, updateScore, finishGame } = props;

  return (
    <div
      key={game.id}
      className="flex items-center justify-between bg-gray-100 p-4 rounded"
    >
      <div className="flex items-center space-x-4">
        <span>{game.homeTeam}</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateScore(game.id, true, false)}
            className="p-1 bg-red-500 text-white rounded"
            data-testId="minus-home"
          >
            <Minus size={16} />
          </button>
          <span className="font-bold">{game.homeScore}</span>
          <button
            onClick={() => updateScore(game.id, true, true)}
            className="p-1 bg-green-500 text-white rounded"
            data-testId="plus-home"
          >
            <Plus size={16} />
          </button>
        </div>
        <span>-</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateScore(game.id, false, false)}
            className="p-1 bg-red-500 text-white rounded"
            data-testId="minus-away"
          >
            <Minus size={16} />
          </button>
          <span className="font-bold">{game.awayScore}</span>
          <button
            onClick={() => updateScore(game.id, false, true)}
            className="p-1 bg-green-500 text-white rounded"
            data-testId="plus-away"
          >
            <Plus size={16} />
          </button>
        </div>
        <span>{game.awayTeam}</span>
      </div>
      <button
        onClick={() => finishGame(game.id)}
        className="p-2 bg-red-500 text-white rounded"
        data-testId="finish-game"
      >
        <X size={16} />
      </button>
    </div>
  );
}

export default memo(GameStrip);
