import { useEffect, useState } from "react";
import "./Navbar.scss";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Bloqueo pantalla mientras se abre el mobile navbar
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      {/* Marca personal */}
      <a href="#" className="header__brand">
        <span className="header__brand-initials">Loli G.F.</span>{" "}
        <span className="header__brand-role">Junior Frontend Dev</span>
      </a>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#">Inicio</a>
          </li>
          <li className="navbar__item">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="navbar__item">
            <a href="#habilities">Habilidades</a>
          </li>
          <li className="navbar__item">
            <a href="#about-me">Sobre mí</a>
          </li>
          <li className="navbar__item">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      {/* Botón para descargar CV */}
      <div className="header__cv-btn-wrapper">
        <a
          href="/cv/CV_Loli_Guerrero_Frontend_Developer_Junior.pdf"
          download
          className="header__cv-btn"
        >
          <DownloadIcon />
          Descargar CV
        </a>
      </div>

      {/* Botón menú hamburguesa */}
      <button
        type="button"
        onClick={toggleMenu}
        className="header__toggle"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="header__mobile-menu"
          role="menu"
          aria-labelledby="header__toggle"
        >
          {/* Mobile menu */}
          <ul className="navbar__menu">
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              <a href="#">Inicio</a>
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              <a href="#projects">Proyectos</a>
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              <a href="#habilities">Habilidades</a>
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              <a href="#about-me">Sobre mí</a>
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
          {/* Botón para descargar CV */}
          <a
            href="/cv/CV_Loli_Guerrero_Frontend_Developer_Junior.pdf"
            download
            className="header__cv-btn header__cv-btn--mobile"
          >
            <DownloadIcon />
            Descargar CV
          </a>
        </div>
      )}
    </header>
  );
}
