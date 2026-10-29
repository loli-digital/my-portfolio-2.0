import { DownloadIcon } from "../../icons";
import "./Button.scss";

export function Button() {
  return (
    <div className="button__cv-wrapper">
      <a
        href="/cv/CV_Loli_Guerrero_Frontend_Developer_Junior.pdf"
        download
        className="button__cv button__cv--mobile"
      >
        <DownloadIcon />
        Descargar CV
      </a>
    </div>
  );
}