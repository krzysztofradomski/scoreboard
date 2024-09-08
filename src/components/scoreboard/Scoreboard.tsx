import Games from "./Games";
import Summary from "./Summary";
import ControlPanel from "./ControlPanel";
import Spacer from "../layout/Spacer";
import ComponentTitle from "../layout/ComponentTitle";
import ComponentContainer from "../layout/ComponentContainer";
import { useScoreManager } from "./utils";

/**
 * The score board component
 */
const ScoreBoard = () => {
  const {
    games,
    homeTeam,
    awayTeam,
    setHomeTeam,
    setAwayTeam,
    startGame,
    finishGame,
    updateScore,
    getSummary,
  } = useScoreManager();

  return (
    <ComponentContainer>
      <ComponentTitle>Football World Cup Score Board</ComponentTitle>
      <Spacer />
      <ControlPanel
        startGame={startGame}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        setHomeTeam={setHomeTeam}
        setAwayTeam={setAwayTeam}
      />
      <Spacer />
      <Games games={games} updateScore={updateScore} finishGame={finishGame} />
      <Spacer />
      <Summary getSummary={getSummary} />
    </ComponentContainer>
  );
};

export default ScoreBoard;
