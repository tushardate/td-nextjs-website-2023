import { createContext, useState } from "react";

export const Context = createContext();

const Store = ({ children }) => {
	const [cursorType, setCursorType] = useState("default");

	return (
		<Context.Provider value={[cursorType, setCursorType]}>
			{children}
		</Context.Provider>
	);
};

export default Store;