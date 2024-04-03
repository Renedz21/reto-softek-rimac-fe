export type IUser = {
  name: string;
  lastName: string;
  birthDay: string;
  setUser?: (user: IUser) => void;
};
