import { memo } from "react";
import { IScoreManager } from "./types";

type SummaryProps = {
  getSummary: IScoreManager["getSummary"];
};

function Summary(props: SummaryProps) {
  const { getSummary } = props;
  return (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>
      <ul className="space-y-2">
        {getSummary().map((game) => (
          <li key={game.id}>
            {game.homeTeam} {game.homeScore} - {game.awayScore} {game.awayTeam}
          </li>
        ))}
      </ul>
    </>
  );
}

export default memo(Summary);
