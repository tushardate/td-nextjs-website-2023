import { SplitText, LineWrapper } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";

export default function TDSplitLines({ children }) {
	return (
		<motion.div>
			<SplitText
				LineWrapper={({ lineIndex, children }) => (
					<motion.span
						className={`inline-block`}
						initial={{ y: 15, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 2,
							ease: [0.33, 1, 0.68, 1],
							delay: lineIndex * 0.4
						}}
					>
						{children}
					</motion.span>
				)}
			>
				{children}
			</SplitText>
		</motion.div>
	);
}
