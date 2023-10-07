import { useTickerStore } from "./GlobalStore";
import SplitLetters2 from "./SplitLetters2";

const Ticker = () => {
	const { counter, icons, texts } = useTickerStore();
	return (
		<div className="relative h-5 overflow-hidden leading-5 -mb-1">
			{texts &&
				texts.map((text, index) => (
					<SplitLetters2
						key={index}
						text={text}
						show={index === counter}
						className="absolute bottom-0"
						style={{ opacity: 0, y: 20 }}
					/>
				))}
		</div>
	);
};

export default Ticker;
