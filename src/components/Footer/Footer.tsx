import { FOOTER } from "../../data/footer";
import Styles from "./Footer.module.scss";

export const Footer = () => {
  const { container } = Styles;

  return (
    <footer className={container}>
      <ul>
        <li>
          <img src={FOOTER.LOGO} alt="Logo Rimac" />
        </li>
        <li>
          <p>{FOOTER.COPY}</p>
        </li>
      </ul>
    </footer>
  );
};
