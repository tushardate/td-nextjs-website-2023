import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function NavButton({ text, className }) {
	const letters = Array.from(text);
	const [scope, animate] = useAnimate();
	const [canAnimate, setCanAnimate] = useState(false);

	const onMouseEnter = (e) => {
		if (canAnimate) {
			animate([
				[
					".letter",
					{ y: -20 },
					{
						duration: 0.65,
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
				[
					".letter",
					{ y: 0 },
					{
						duration: 0.65,
						type: "spring",
						delay: stagger(0.02),
					},
				],
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
			className={`flex items-center justify-center ${className} px-2 py-1 border-2 border-transparent rounded-full`}
		>
			<button className="relative">
				<span className="block overflow-hidden">
					{letters.map((letter, index) => (
						<span
							data-letter={letter}
							className="letter relative inline-block h-5 leading-5 after:absolute after:left-0 after:top-full after:h-5 after:content-[attr(data-letter)]"
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
