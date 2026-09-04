import "./Podium.css";

function Initials({ name, className = "" }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return <div className={`avatar ${className}`}>{initials}</div>;
}

export default function Podium({ items = [], type }) {
  const ordered = [items[1], items[0], items[2]].filter(Boolean);
  const first = items[0];

  if (!first) {
    return <div className="empty-state">No existe información para este período.</div>;
  }

  return (
    <div className={`podium podium-${type}`}>
      {ordered.map((item) => {
        const isFirst = item.position === 1;
        return (
          <article className={`podium-card ${isFirst ? "is-first" : ""}`} key={`${item.position}-${item.name}`}>
            <div className="position-badge">{item.position}</div>

            <Initials name={item.name} className={isFirst ? "avatar-first" : ""} />

            <div className="podium-content">
              <h3>{item.name}</h3>
              {type === "people" && <p>{item.area}</p>}
              <strong>{item.points.toLocaleString("es-PE")} pts</strong>
            </div>
          </article>
        );
      })}
    </div>
  );
}
