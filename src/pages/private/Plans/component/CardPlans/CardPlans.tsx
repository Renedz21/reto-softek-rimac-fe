import { Card, PrimaryButton } from "../../../../../components";
import Slider from "../../../../../components/Slide/Slide";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { IStepHead } from "../../../../../models/IStepHead";
import { IPlan } from "../../../../../models/data";
import {
  DEVICE,
  DISCOUNT_AMOUNT,
  TYPE_OPTION,
} from "../../../../../utilities/constants";

import Styles from "./CardPlans.module.scss";

interface Props {
  data: IPlan[];
  setPlanSelected: React.Dispatch<React.SetStateAction<IPlan[]>>;
  typeSelection: string;
  dataStep: IStepHead[];
  setDataStep: React.Dispatch<React.SetStateAction<IStepHead[]>>;
}

export const CardPlans = ({
  data,
  setPlanSelected,
  typeSelection,
  dataStep,
  setDataStep,
}: Props) => {
  const { container } = Styles;
  const { width } = useWindowSize();

  const hasDiscount = (price: number) => {
    return price - DISCOUNT_AMOUNT * price;
  };

  const isForOtherPerson = () => {
    return TYPE_OPTION.FOR_YOU === typeSelection;
  };

  const onSelectPlan = (nameProduct: string) => {
    const updatedDataStep = dataStep.map((step) =>
      step.id === 2 ? { ...step, completed: true } : step
    );

    setPlanSelected(data.filter((plan: IPlan) => plan.name === nameProduct));
    setDataStep(updatedDataStep);
  };

  const isMobile = () => {
    if (!width) return false;

    return width <= DEVICE.MOBILE;
  };

  const validatIcon = (name: string) => {
    switch (name) {
      case "Plan en Casa + Bienestar":
        return "/assets/icons/plans/basic.svg";
        break;
      case "Plan en Casa + Fitness":
        return "/assets/icons/plans/clinica.svg";
        break;
      default:
        break;
    }
    return "";
  };

  return (
    <>
      <Slider cards={data} cardsPerSlide={isMobile() ? 1 : 2}>
        {data.map((response) => (
          <div key={response.name}>
            <Card>
              <div className={container}>
                <div>
                  <h5>{response.name} </h5>
                  <small>Costo del plan</small>
                  {isForOtherPerson() && <del>${response.price} antes</del>}
                  <p>
                    $
                    {isForOtherPerson()
                      ? hasDiscount(response.price)
                      : response.price}{" "}
                    al mes
                  </p>
                </div>

                <img src={validatIcon(response.name)} alt={response.name} />
              </div>
              <ul>
                {response.description.map((list) => (
                  <li>{list}</li>
                ))}
                <PrimaryButton
                  onClick={() => onSelectPlan(response.name)}
                  text="Seleccionar Plan"
                  style={{ backgroundColor: "#FF1C44", borderColor: "#FF1C44" }}
                />
              </ul>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
};
