import { create } from "zustand";

export const useCinemaStore = create((set) => ({
  cartTicket: [],

  setCartTicket: (ticket) =>
    set((state) => {
      const exists = state.cartTicket.some((t) => t.stt === ticket.stt);
      const newTickets = exists ? state.cartTicket.filter((t) => t.stt !== ticket.stt) : [...state.cartTicket, ticket];
      return { cartTicket: newTickets };
    }),
  setDeleteTicket: () => set({ cartTicket: [] }),
}));
