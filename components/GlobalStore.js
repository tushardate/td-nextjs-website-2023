import { create } from "zustand";
import {
	FaMagic,
	FaPaintBrush,
	FaThumbsUp,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaFireExtinguisher,
	FaHandsHelping,
	FaHandPeace,
} from "react-icons/fa";

export const useCursorStore = create((set) => ({
	cursorType: "default",
	setCursorType: (value) => set((state) => ({ cursorType: value })),
}));

export const useTickerStore = create((set) => ({
	counter: 0,
	icons: [
		FaMagic,
		FaPaintBrush,
		FaThumbsUp,
		FaPhoneAlt,
		FaEnvelope,
		FaMapMarkerAlt,
	],
	texts: [
		"Creative Director",
		"Art Director",
		"Freelance",
		"720-292-0384",
		"tushardate@gmail.com",
		"Los Angeles",
	],
	increment: () =>
		set((state) => ({ counter: (state.counter + 1) % state.texts.length })),
	setCounter: (val) => set((state) => ({ counter: val })),
}));
