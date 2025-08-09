import { create } from "zustand";

export const useHomeStore = create((set) => ({
  isOpenMovie: false,
  setIsOpenMovie: (state) => set({ isOpenMovie: state }),

  moviePopup: null,
  setMoviePopup: (state) => set({ moviePopup: state }),


}));
