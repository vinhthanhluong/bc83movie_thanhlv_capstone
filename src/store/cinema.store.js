import { create } from "zustand";

export const useCinemaStore = create((set) => ({
  infoCinema: null,
  setIsOpenMovie: (state) => set({ infoCinema: state }),
}));
