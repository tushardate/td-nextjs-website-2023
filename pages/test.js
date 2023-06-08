import Layout from "@components/Layout";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import TDCustomSplitText from "@components/TDCustomSplitText";

export default function Test() {
	const [scope, animate] = useAnimate();
	const ref = useRef(null);
	const [isSplit, setIsSplit] = useState(false);

	useEffect(() => {}, []);

	useEffect(() => {
		if (isSplit) {
			scope.current = ref.current;
			animate('.td__word', {y: 100}, {delay: stagger(0.04)})
		}
	}, [isSplit]);

	return (
		<div ref={ref} className="relative">
			<TDCustomSplitText text={"There are"} onComplete={setIsSplit} />
		</div>
	);
}
