import { Banner, Footer, Header } from "../../../components";
import Styles from "./Home.module.scss";
import { HOME } from "../../../data/home";
import { FormLogin, FormTitle } from "./components";

export const Home = () => {
  const { container, containerStructure } = Styles;

  return (
    <div className={container}>
      <Header />

      <main className={containerStructure}>
        <Banner image={HOME.BANNER.IMAGE} />
        <FormTitle />
        <FormLogin />
      </main>

      <Footer />
    </div>
  );
};
