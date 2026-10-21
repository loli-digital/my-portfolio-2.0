import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; <span>{new Date().getFullYear()}</span> Loli Guerrero ·
        Desarrollado en{" "}
        <span className="footer__tech footer__tech--react">React</span>,
        <span className="footer__tech footer__tech--typescript">
          TypeScript
        </span>{" "}
        y <span className="footer__tech footer__tech--sass">SaSS</span>
      </p>
    </footer>
  );
}
