import "./HallOfFame.css";

export default function HallOfFame({ items = [], type, months }) {
  return (
    <div className="hall-wrap">
      {items.length ? (
        <div className="hall-table">
          <div className="hall-head">
            <span>Mes / Año</span>
            <span>{type === "people" ? "Ganador" : "Área ganadora"}</span>
            {type === "people" && <span>Área</span>}
            <span>Puntos</span>
          </div>

          {items.map((item) => (
            <div className="hall-row" key={`${item.month}-${item.winner}`}>
              <span>{months[String(item.month)]} 2026</span>
              <strong>{item.winner}</strong>
              {type === "people" && <span>{item.area}</span>}
              <span>{item.points.toLocaleString("es-PE")}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">No hay ganadores disponibles.</div>
      )}
    </div>
  );
}
