import { create } from "zustand";

const userLocal = localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : null;

export const useAuthStore = create((set) => ({
    user: userLocal,
    setUser: (state) => set({ user: state }),
    clearUser: () => set({ user: null }),

    alert: null,
    setAlert: (state) => set({ alert: state }),
}));