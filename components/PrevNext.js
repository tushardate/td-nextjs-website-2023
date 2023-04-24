import Link from "next/link";
import { useCursorStore } from "./GlobalStore";

export default function PrevNext(props) {
	const { prev, next } = props;
	const { setCursorType } = useCursorStore();

	return (
		<div className="z-50 px-3 pt-12 pb-6 flex justify-between text-5xl font-bold">
			<Link
				as={`/projects/${prev.slug}`}
				href="/projects/[slug]"
				scroll={false}
				className="p-6"
				onMouseEnter={() => setCursorType("arrowLeft")}
				onMouseLeave={() => setCursorType("default")}
			>
				Prev
			</Link>
			<Link
				as={`/projects/${next.slug}`}
				href="/projects/[slug]"
				scroll={false}
				className="p-6"
				onMouseEnter={() => setCursorType("arrowRight")}
				onMouseLeave={() => setCursorType("default")}
			>
				Next
			</Link>
		</div>
	);
}
