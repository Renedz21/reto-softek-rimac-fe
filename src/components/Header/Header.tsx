import Styles from "./Header.module.scss";
import { HEADER } from "../../data/header";
import { Menu } from "./components";

export const Header = () => {
  const { container } = Styles;

  return (
    <header className={container}>
      {HEADER.LOGO}

      <Menu />
    </header>
  );
};
