import "./Navbar.scss";
import DownloadIcon from '@mui/icons-material/Download';

export function Navbar() {
  return (
    <nav className="navbar">
      {/* Mis iniciales */}
      <p className="navbar__brand">
        <span className="navbar__brand-initials">Loli G.F.</span>{" "}
        <span className="navbar__brand-role">Junior Frontend Dev</span>
      </p>

      {/* Elementos del menú */}
      <ul className="navbar__menu">
        <li className="navbar__item">Inicio</li>
        <li className="navbar__item">Proyectos</li>
        <li className="navbar__item">Habilidades</li>
        <li className="navbar__item">Sobre mí</li>
        <li className="navbar__item">Contacto</li>
      </ul>

      {/* Botón para descargar CV */}
      <a
        href="/cv/CV_Loli_Guerrero_Frontend_Developer_Junior.pdf"
        download
        className="navbar__cv-btn"
      >
        <DownloadIcon />
        Descargar CV
      </a>
    </nav>
  );
}
