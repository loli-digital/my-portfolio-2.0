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
          <li className="navbar__item">Inicio</li>
          <li className="navbar__item">Proyectos</li>
          <li className="navbar__item">Habilidades</li>
          <li className="navbar__item">Sobre mí</li>
          <li className="navbar__item">Contacto</li>
        </ul>
      </nav>
      {/* Botón para descargar CV */}
      <a
        href="/cv/CV_Loli_Guerrero_Frontend_Developer_Junior.pdf"
        download
        className="header__cv-btn"
      >
        <DownloadIcon />
        Descargar CV
      </a>

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
              Inicio
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              Proyectos
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              Habilidades
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              Sobre mí
            </li>
            <li className="navbar__item" role="menuitem" onClick={closeMenu}>
              Contacto
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
