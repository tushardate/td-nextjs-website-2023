import { useState, useEffect, useRef } from "react";
import { motion, spring, useMotionValue, useSpring } from "framer-motion";
import {
	TfiArrowRight,
	TfiArrowLeft,
	TfiControlPlay,
	TfiControlPause,
	TfiEmail,
} from "react-icons/tfi";
import { useCursorStore } from "@components/GlobalStore";

function Cursor() {
	const { cursorType, setCursorType } = useCursorStore();
	const cursorRef = useRef();
	const [cursorText, setCursorText] = useState("email");
	const [cSize, setCSize] = useState(64);
	const mouseX = useMotionValue(-100);
	const mouseY = useMotionValue(-100);
	// const springOptions = { damping: 150, stiffness: 2500 };
	const springOptions = { damping: 110, stiffness: 2500 };
	const springX = useSpring(mouseX, springOptions);
	const springY = useSpring(mouseY, springOptions);
	const scale = useSpring(1, springOptions);

	const variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 4,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 4,
			},
		},
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			mouseX.set(e.clientX - cSize / 2);
			mouseY.set(e.clientY - cSize / 2);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (cursorType === "default") {
			scale.set(0.1875);
		} else {
			scale.set(1);
		}

		const handleMouseDown = () => {
			if (cursorType === "default") {
				scale.set(0.1875);
			} else {
				scale.set(0.9);
			}
		};

		const handleMouseUp = () => {
			if (cursorType === "default") {
				scale.set(0.1875);
			} else {
				scale.set(1);
			}
		};

		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [cursorType]);

	const iconType = () => {
		switch (cursorType) {
			case "arrowBottomRight":
				return <TfiArrowRight className="w-full h-full rotate-45" />;
			case "arrowRight":
				return <TfiArrowRight className="w-full h-full" />;
			case "arrowLeft":
				return <TfiArrowLeft className="w-full h-full" />;
			case "play":
				return <TfiControlPlay className="w-full h-full" />;
			case "pause":
				return <TfiControlPause className="w-full h-full" />;
			case "default":
			default:
				return <></>;
		}
	};

	return (
		<>
			<motion.div
				style={{
					translateX: springX,
					translateY: springY,
					scale: scale,
				}}
				variants={variants}
				className={`cursorDot relative flex justify-center items-center`}
				ref={cursorRef}
				id="cursor-dot"
			>
				<motion.div
					initial="initial"
					animate="animate"
					className="w-1/2 h-1/2 text-black"
				>
					{iconType()}
				</motion.div>
			</motion.div>
		</>
	);
}

export default Cursor;
