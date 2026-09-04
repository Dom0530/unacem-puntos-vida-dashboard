import "./Filters.css";

export default function Filters({ year, month, location, months, locations, onChange }) {
  return (
    <section className="filters-card" aria-label="Filtros del dashboard">
      <div className="filter-group">
        <label htmlFor="year">Año</label>
        <select id="year" value={year} onChange={(e) => onChange("year", e.target.value)}>
          <option value="2026">2026</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="month">Mes</label>
        <select id="month" value={month} onChange={(e) => onChange("month", e.target.value)}>
          {Object.entries(months).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="location">Sede</label>
        <select id="location" value={location} onChange={(e) => onChange("location", e.target.value)}>
          {locations.map((item) => (
            <option key={item} value={item}>{item === "Junin" ? "Junín" : item}</option>
          ))}
        </select>
      </div>
    </section>
  );
}
