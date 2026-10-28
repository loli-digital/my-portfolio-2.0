import { ContactLink } from "@/components";
import { contactInfo } from "@/data";
import "./ContactSection.scss";

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      {/* Text */}
      <div className="contact__text">
        {/* Efecto pulse */}
        <div className="contact__animation">
          <span className="contact__animation-bg">
            <span className="contact__animation-circle"></span>
          </span>
          <span className="contact__animation-subtitle">Conectemos</span>
        </div>
        <h2 className="contact__title">¡Hablemos!</h2>
        <p className="contact__description">
          ¿Tienes una vacante para desarrolladora Frontend Junior, un proyecto
          colaborativo o simplemente quieres intercambiar impresiones sobre
          desarrollo web? Mi bandeja siempre está lista para recibir tu mensaje
        </p>
      </div>

      {/* Links */}
      <div className="contact__links">
        {contactInfo.map((info) => (
          <ContactLink
            key={info.id}
            id={info.id}
            icon={info.icon}
            platform={info.platform}
            address={info.address}
            link={info.link}
            titleLink={info.titleLink}
            iconLink={info.iconLink}
          />
        ))}
      </div>
    </section>
  );
}
