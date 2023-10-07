// CounterUpdater.js
import { useEffect } from "react";
import { useTickerStore } from "./GlobalStore";

const TickerCounterUpdater = () => {
	const { setLast, increment } = useTickerStore();

	useEffect(() => {
		const interval = setInterval(() => {
			increment();
		}, 3000);

		const timeOut = setTimeout(() => {
			clearInterval(interval);
			setLast();
		}, 10 * 60 * 1000); // 10 minutes in milliseconds
		return () => {
			clearInterval(interval);
			clearTimeout(timeOut);
		};
	}, [increment]);

	return null;
};

export default TickerCounterUpdater;
