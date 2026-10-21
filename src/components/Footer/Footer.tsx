import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer__container">
      <p>
        &copy; <span>{new Date().getFullYear()}</span> Loli Guerrero ·
        Desarrollado en <span className="footer__container--react">React</span>,{" "}
        <span className="footer__container--typescript">TypeScript</span> y{" "}
        <span className="footer__container--sass">SaSS</span>
      </p>
    </footer>
  );
}
