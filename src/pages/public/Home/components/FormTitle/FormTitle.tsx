import Styles from "./FormTitle.module.scss";

import { Badge } from "../../../../../components";
import { HOME } from "../../../../../data/home";

export const FormTitle = () => {
  const { container } = Styles;

  return (
    <div className={container}>
      <Badge text={HOME.BADGE} />
      <h1>{HOME.TITLE}</h1>
    </div>
  );
};
