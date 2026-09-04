import "./AnnualRanking.css";

function Initials({ name }) {
  return (
    <div className="annual-avatar">
      {name.split(/\s+/).filter(Boolean).slice(0, 2).map((x) => x[0]).join("").toUpperCase()}
    </div>
  );
}

export default function AnnualRanking({ items = [], type }) {
  const max = items[0]?.points || 1;

  if (!items.length) {
    return <div className="empty-state">No existe información anual para esta sede.</div>;
  }

  return (
    <div className="annual-list">
      {items.map((item) => (
        <article className="annual-row" key={`${item.position}-${item.name}`}>
          <span className="annual-position">{item.position}</span>
          <Initials name={item.name} />
          <div className="annual-main">
            <div className="annual-name-line">
              <strong>{item.name}</strong>
              <span>{item.points.toLocaleString("es-PE")} pts</span>
            </div>
            {type === "people" && <small>{item.area}</small>}
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${Math.max(8, (item.points / max) * 100)}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
