import { IUser } from "../../models/IUser";
import { axiosInstance } from "../../utilities/axios";
import { loadAbort } from "../../utilities/functions";

export const getUser = () => {
  const controller = loadAbort();

  return {
    call: axiosInstance.get<IUser>(`/user.json`, { signal: controller.signal }),
    controller,
  };
};
