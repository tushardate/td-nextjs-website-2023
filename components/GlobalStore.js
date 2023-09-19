import { create } from "zustand";

export const useCursorStore = create((set) => ({
	cursorType: "default",
	setCursorType: (value) => set((state) => ({ cursorType: value })),
}));

export const useBGColorStore = create((set) => ({
	previousRandom: 10,
	getRandomHue: () =>
		set((state) => ({
			previousRandom: (state.previousRandom + 50 + 360) % 360,
		})),
}));

// export const useBGColorStore = create((set) => ({
// 	previousRandom: 10,
// 	getRandomHue: () => {
// 	  set((state) => {
// 		let { previousRandom } = state;

// 		if (previousRandom === null) {
// 		  // Generate the first random number between 0 and 360 that is a multiple of 10.
// 		  previousRandom = Math.floor(Math.random() * 37) * 10;
// 		  return { previousRandom };
// 		} else {
// 		  let randomChange;
// 		  do {
// 			// Generate a random number between -4 and 4 (plus/minus 40).
// 			randomChange = (Math.floor(Math.random() * 9) - 4) * 10;
// 		  } while (Math.abs(randomChange) < 20); // Ensure the difference is at least 40.

// 		  // Add the random change and handle wrapping around if needed.
// 		  previousRandom = (previousRandom + randomChange + 360) % 360;

// 		  return { previousRandom };
// 		}
// 	  });
// 	},
//   }));
