import { memo } from "react";
import { IGame, IScoreManager } from "./types";

type ControlPanelProps = {
  startGame: () => void;
  homeTeam: IGame["homeTeam"];
  awayTeam: IGame["awayTeam"];
  setHomeTeam: IScoreManager["setHomeTeam"];
  setAwayTeam: IScoreManager["setAwayTeam"];
};
function ControlPanel(props: ControlPanelProps) {
  const { startGame, homeTeam, awayTeam, setHomeTeam, setAwayTeam } = props;
  return (
    <div className="mb-4">
      <input
        type="text"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
        placeholder="Home Team"
        className="mr-2 p-2 border rounded"
        name="homeTeam"
      />
      <input
        type="text"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
        placeholder="Away Team"
        className="mr-2 p-2 border rounded"
        name="awayTeam"
      />
      <button
        onClick={startGame}
        className={`bg-blue-500 text-white p-2 rounded ${!homeTeam || !awayTeam ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!homeTeam || !awayTeam}
        name="startGame"
      >
        Start Game
      </button>
    </div>
  );
}

export default memo(ControlPanel);
