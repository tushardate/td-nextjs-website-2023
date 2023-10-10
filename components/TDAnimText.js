import { motion } from "framer-motion";

function TDAnimText({ text, el: Wrapper = "span", className }) {
	const defaultAnimations = {
		hidden: {
			opacity: 0,
			y: 32,
		},
		visible: {
			opacity: 1,
			y: 0
		},
	};
	return (
		<Wrapper className={className}>
			<motion.span initial="hidden" animate="visible">
				{text.split("").map((char, i) => (
					<motion.span variants={defaultAnimations} key={i}>
						{char}
					</motion.span>
				))}
			</motion.span>
		</Wrapper>
	);
}

export default TDAnimText;
