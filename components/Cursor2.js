import { useEffect, useState } from "react";
import styles from "@components/styles/cursor.module.scss";
import { motion } from "framer-motion";
import { Context } from "./Store";
import { useContext } from "react";

export default function Cursor() {
	const [mousePos, setMousePos] = useState({
		x: 0,
		y: 0,
	});

	const [cursorType, setCursorType] = useContext(Context);

	const variants = {
		default: {
			x: mousePos.x - 8,
			y: mousePos.y - 8,
		},
		large: {
			x: mousePos.x - 40,
			y: mousePos.y - 40,
			width: 80,
			height: 80,
		},
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({
				x: e.clientX,
				y: e.clientY,
			});
		};
		const mouseMove = window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<motion.div
			transition={{ duration: 0.065 }}
			variants={variants}
			animate={cursorType}
			className={styles.cursor}
		></motion.div>
		
	);
}
