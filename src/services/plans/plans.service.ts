import { IPlan } from "../../models/data";
import { axiosInstance } from "../../utilities/axios";
import { loadAbort } from "../../utilities/functions";

export const getPlans = () => {
  const controller = loadAbort();

  return {
    call: axiosInstance.get<IPlan[]>(`/plans.json`, {
      signal: controller.signal,
    }),
    controller,
  };
};
