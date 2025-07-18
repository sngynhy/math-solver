import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export const useStyleStore = create(
    devtools((set, get) => ({
        openSidebar: true,
        setOpenSidebar: value => set({ openSidebar: value })
    }))
)