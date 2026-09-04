import "./RankingSection.css";
import Podium from "../Podium/Podium";
import PreviousWinner from "../PreviousWinner/PreviousWinner";
import AnnualRanking from "../AnnualRanking/AnnualRanking";
import HallOfFame from "../HallOfFame/HallOfFame";

export default function RankingSection({
  type,
  monthlyTop,
  previousWinner,
  previousMonthLabel,
  annualRanking,
  hallOfFame,
  months,
}) {
  const isPeople = type === "people";
  const title = isPeople ? "POR USUARIO" : "POR ÁREA";
  const subtitle = isPeople ? "Reconocimiento a trabajadores" : "Reconocimiento por áreas";

  return (
    <section className="ranking-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">{subtitle}</span>
          <h2>{title}</h2>
        </div>
      </div>

      <div className="module">
        <div className="module-title">
          <span>TOP 3 DEL MES</span>
          <small>Posiciones 1, 2 y 3 del ranking mensual</small>
        </div>
        <Podium items={monthlyTop} type={type} />
      </div>

      <div className="module">
        <div className="module-title">
          <span>GANADOR DEL MES ANTERIOR</span>
        </div>
        <PreviousWinner winner={previousWinner} type={type} monthLabel={previousMonthLabel} />
      </div>

      <div className="module">
        <div className="module-title">
          <span>TOP 5 DEL AÑO</span>
          <small>Ranking anual almacenado como input independiente</small>
        </div>
        <AnnualRanking items={annualRanking} type={type} />
      </div>

      <div className="module">
        <div className="module-title">
          <span>"MURO DE LA FAMA"</span>
          <small>Ganadores mensuales disponibles</small>
        </div>
        <HallOfFame items={hallOfFame} type={type} months={months} />
      </div>
    </section>
  );
}
