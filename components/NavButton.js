import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function NavButton({ text }) {
	const letters = Array.from(text);
	const [scope, animate] = useAnimate();
	const [canAnimate, setCanAnimate] = useState(false);

	const onMouseEnter = (e) => {
		if (canAnimate) {
			animate([
				[
					".letter",
					{ y: -24 },
					{
						duration: 0.5,
						type: "spring",
						delay: stagger(0.02),
					},
				],
			]);
		}
	};
	const onMouseLeave = (e) => {
		if (canAnimate) {
			animate([
				// [
				// 	".letter",
				// 	{ y: 0 },
				// 	{
				// 		duration: 0.5,
				// 		type: "spring",
				// 		delay: stagger(0.02),
				// 	},
				// ],
				[
					".letter",
					{ y: 0 },
					{
						duration: 0.00001,
					},
				],
			]);
		}
	};

	const onClick = (e) => {
		setCanAnimate(false);
	};

	useEffect(() => {
		setTimeout(() => {
			setCanAnimate(true);
		}, 300);
	}, []);

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
			ref={scope}
		>
			<button className="relative py-2">
				<span className="block h-6 overflow-hidden">
					{letters.map((letter, index) => (
						<span
							data-letter={letter}
							className="letter relative inline-block h-6 leading-6 after:absolute after:left-0 after:top-full after:h-6 after:content-[attr(data-letter)]"
							key={`${letter}-${index}`}
						>
							{letter}
						</span>
					))}
				</span>
			</button>
		</div>
	);
}
