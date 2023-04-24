import { create } from "zustand";

export const useCursorStore = create((set) => ({
	cursorType: "default",
	setCursorType: (value) => set((state) => ({ cursorType: value })),
}));
