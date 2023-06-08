import { useRef, useEffect } from "react";
// import { SplitText, LineWrapper } from "@cyriacbr/react-split-text";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { SplitText } from "@components/utils/GSAPSplitText";
import SplitText3 from "@components/utils/SplitText3";
import { gsap } from "gsap";
import Layout from "@components/Layout";

// import { SplitText } from "gsap-trial/SplitText";

export default function Test2() {
	const text = useRef(null);
	useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(() => {
			let title = SplitText3.create(".title", { type: "words" });
			let split = SplitText3.create(".wrapper", { type: "lines" });
			let tl = gsap.timeline();

			tl.from(title.words, {
				y: 25,
				opacity: 0,
				ease: "power3",
				duration: 1,
				stagger: 0.15,
				onComplete: () => title.revert(),
			});
			tl.from(
				split.lines,
				{
					y: 15,
					opacity: 0,
					ease: "power3",
					duration: 1,
					stagger: 0.2,
					onComplete: () => split.revert(),
				},
				">-0.85"
			);
		}, text);
		return () => ctx.revert();
	}, []);

	return (
		<Layout>
			<div ref={text}>
				<div className="title mb-12 mt-32">Title goes here.</div>
				<div className="wrapper w-1/2">
					Within a component based system, you may need more granular
					control over the elements youre targeting. You can pass
					props down to children to adjust class names or data
					atrributes and target specific elements.
				</div>
			</div>
		</Layout>
		// <SplitText
		// 	ref={text}
		// 	className="wrapper"
		// 	LineWrapper={({ lineIndex, children }) => (
		// 		<div className="line">{children}</div>
		// 	)}
		// >
		// 	Within a component based system, you may need more granular control
		// 	over the elements youre targeting. You can pass props down to
		// 	children to adjust class names or data atrributes and target
		// 	specific elements.
		// </SplitText>
	);
}
