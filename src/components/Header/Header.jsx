import "./Header.css";

export default function Header({ lastUpdated }) {
  return (
    <header className="app-header">
      <div className="brand-block">
        <img
          src="/images/branding/logo.png"
          alt="Logo"
          className="brand-logo"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="brand-fallback">UNACEM</div>
      </div>

      <div className="header-title">
        <span>SISTEMA DE RECONOCIMIENTO</span>
        <strong>POR PUNTOS VIDA</strong>
      </div>

      <div className="header-meta">
        <span>Última actualización</span>
        <strong>{lastUpdated}</strong>
      </div>
    </header>
  );
}
