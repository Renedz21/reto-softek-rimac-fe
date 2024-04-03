import { useWindowSize } from "../../hooks/useWindowSize";

import Styles from "./Step.module.scss";

import { IStepHead } from "../../models/IStepHead";
import { DEVICE } from "../../utilities/constants";

import { StepContent, StepProgress } from "./components";

interface Props {
  stepHead: IStepHead[];
  children: React.ReactNode;
}

export const Step = ({ stepHead, children }: Props) => {
  const { container } = Styles;

  const { width } = useWindowSize();

  const isMobile = () => {
    if (!width) return false;

    return width <= DEVICE.MOBILE;
  };

  return (
    <div className={container}>
      <StepProgress data={stepHead} isMobile={isMobile()} />

      <StepContent>{children}</StepContent>
    </div>
  );
};
