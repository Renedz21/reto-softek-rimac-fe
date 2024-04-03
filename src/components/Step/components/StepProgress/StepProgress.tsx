import { useNavigate } from "react-router-dom";
import { Progress } from "../../..";
import { IStepHead } from "../../../../models/IStepHead";
import Styles from "./StepProgress.module.scss";

import { IoChevronBackCircleOutline } from "react-icons/io5";
import { ROUTES } from "../../../../utilities/routes";

interface Props {
  data: IStepHead[];
  isMobile: boolean;
}

export const StepProgress = ({ data, isMobile }: Props) => {
  const { container, containerReturn, active, mobile } = Styles;

  const navigate = useNavigate();

  const numberProgress = () => {
    const percentage = 100 / data.length;

    return (
      percentage *
      data.filter((dataStep: IStepHead) => dataStep.completed).length
    );
  };

  return (
    <>
      {!isMobile && (
        <div className={container}>
          {data.map((head: IStepHead) => (
            <>
              <p className={head.completed ? active : ""}>
                <span>{head.id}</span>
                {head.title}
              </p>
            </>
          ))}
        </div>
      )}
      <div className={`${containerReturn} ${isMobile ? mobile : ""}`}>
        <button onClick={() => navigate(ROUTES.PUBLIC.HOME)}>
          <IoChevronBackCircleOutline />
          <span>Volver</span>
        </button>

        {isMobile && (
          <p>
            {" "}
            Paso 1 de {data.length} <Progress width={numberProgress()} />
          </p>
        )}
      </div>
    </>
  );
};
