import { useEffect, useRef, useState } from "react";

import { Header, Step } from "../../../components";
import { getPlans } from "../../../services/plans/plans.service";

import { useFetchAndLoad } from "../../../hooks/useFetchAndLoad";

import Styles from "./Plans.module.scss";
import { PLANS, STEP_HEAD } from "../../../data/plans";
import { CardPlans, CardRadio, Summary } from "./component";
import { IPlan } from "../../../models/data";
import { IStepHead } from "../../../models/IStepHead";
import { calculateAge } from "../../../utilities/functions";
import { ROUTES } from "../../../utilities/routes";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/use-auth";

const defaultData = [
  {
    name: "Plan en Casa",
    price: 39,
    description: [
      "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
      "Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.",
      "Indemnización de S/300 en caso de hospitalización por más de un día.",
    ],
    age: 60,
  },
];

export const Plans = () => {
  const { container, containerInformation, containerCards, containerPlans } =
    Styles;

  const { callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  const { name, birthDay } = useAuthStore();

  const cardRef = useRef<HTMLDivElement>(null);
  const [dataStep, setDataStep] = useState(STEP_HEAD);
  const [data, setData] = useState<IPlan[]>(defaultData);
  const [planSelected, setPlanSelected] = useState<IPlan[]>(defaultData);
  const [typeSelection, setTypeSelection] = useState("");

  const getAllPlans = async () => {
    try {
      const response = await callEndpoint(getPlans());
      if (response.success) {
        const responseData = response.data as { list?: IPlan[] };
        if (responseData.list) {
          setData(
            responseData.list.filter(
              (response: IPlan) => response.age <= calculateAge(birthDay)
            )
          );
        } else {
          console.error("Response data error");
        }
      }
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  useEffect(() => {
    if (name === "") {
      navigate(ROUTES.PUBLIC.HOME);
    }

    getAllPlans();
  }, [name]);

  const isCompletedStep = dataStep.find(
    (dataStep: IStepHead) => dataStep.completed === false
  );

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [typeSelection]);

  return (
    <div className={container}>
      <Header />
      <Step stepHead={dataStep}>
        {isCompletedStep && (
          <div>
            <div className={containerInformation}>
              <h3>
                {name} {PLANS.TITLE}
              </h3>
              <p>{PLANS.SUB_TITLE}</p>

              <div className={containerCards} ref={cardRef}>
                <CardRadio setTypeSelection={setTypeSelection} />
              </div>
            </div>
            {typeSelection !== "" && (
              <div className={containerPlans}>
                <CardPlans
                  data={data}
                  setPlanSelected={setPlanSelected}
                  typeSelection={typeSelection}
                  dataStep={dataStep}
                  setDataStep={setDataStep}
                />
              </div>
            )}
          </div>
        )}

        {!isCompletedStep && <Summary planSelected={planSelected} />}
      </Step>
    </div>
  );
};
