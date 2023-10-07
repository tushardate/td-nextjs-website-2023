"use client";
import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import SplitType from "split-type";
import { SplitText, LineWrapper } from "@cyriacbr/react-split-text";

function TDTextLineReveal2({ children, className, types }) {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { margin: "0% 0% -15% 0%" });
	const [text, setText] = useState(null);

	useEffect(() => {
		if(scope.current !== null) {
			
		}
	}, [scope])

	useEffect(() => {
		if (isInView) {
			let enterAnim = async () => {
				await animate(
					".line",
					{ y: [10, 0], opacity: [0, 1] },
					{
						delay: stagger(0.15),
						duration: 1,
						ease: [0.75, 0, 0, 1.2],
					}
				);
			};
			enterAnim();
		}
	}, [isInView]);

	return (
		<SplitText
			ref={scope}
			LineWrapper={({ lineIndex, children }) => (
				<div className="line">{children}</div>
			)}
			className={className}
		>
			{children}
		</SplitText>
	);
}

export default TDTextLineReveal2;
