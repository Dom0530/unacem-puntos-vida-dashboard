import "./PreviousWinner.css";

export default function PreviousWinner({ winner, type, monthLabel }) {
  return (
    <article className="previous-card">
      <div className="previous-visual">
        <img
          src="/images/podium/trophy.png"
          alt=""
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <span className="trophy-fallback">1</span>
      </div>

      <div className="previous-copy">
        <span className="eyebrow">
          {type === "people" ? "Ganador del Mes Anterior" : "Área Ganadora del Mes Anterior"}
        </span>

        {winner ? (
          <>
            <h3>{winner.name}</h3>
            {type === "people" && <p>{winner.area}</p>}
            <strong>{winner.points.toLocaleString("es-PE")} pts</strong>
            <small>Período: {monthLabel}</small>
          </>
        ) : (
          <p className="no-previous">No existe información del mes anterior.</p>
        )}
      </div>
    </article>
  );
}
