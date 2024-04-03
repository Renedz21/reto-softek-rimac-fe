import { FaCheck } from "react-icons/fa";

import Styles from "./CardRadio.module.scss";

import { PLANS } from "../../../../../data/plans";
import { Card } from "../../../../../components";

interface Props {
  setTypeSelection: (selectedOption: string) => void;
}

export const CardRadio = ({ setTypeSelection }: Props) => {
  const { container } = Styles;

  const handleRadioChange = (selectedOption: string) => {
    setTypeSelection(selectedOption);
  };

  return (
    <>
      {PLANS.OPTIONS.map((options) => (
        <>
          <div className={container}>
            <label>
              <input
                type="radio"
                name="type"
                id={options.NAME}
                onChange={() => handleRadioChange(options.NAME)}
              />
              <Card>
                <span>
                  <FaCheck />
                </span>
                <p>
                  <img src={options.ICON.IMAGE} alt={options.ICON.ALT} />
                  {options.TITLE}
                </p>
                <small>{options.SUB_TITLE}</small>
              </Card>
            </label>
          </div>
        </>
      ))}
    </>
  );
};
