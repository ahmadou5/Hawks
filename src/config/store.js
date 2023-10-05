import { create } from "zustand";




export const useStore = create((set) => ({
    toggle: true,
    setToggle: () => set((state) => ({ toggle: !state.toggle })),
  }))