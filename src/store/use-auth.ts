// userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from "zustand";

interface UserState {
  name: string;
  lastName: string;
  birthDay: string;
  setUser: (user: UserState) => void;
}

// const initialState: UserState = {
//   name: '',
//   lastName: '',
//   birthDay: '',
// };

export const useAuthStore = create<UserState>((set) => ({
  name: "",
  lastName: "",
  birthDay: "",
  setUser: (user) => set({ ...user }),
}));

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<UserState>) => {
//       return { ...state, ...action.payload };
//     },
//   },
// });

// export const { setUser } = userSlice.actions;
// export default userSlice.reducer;
