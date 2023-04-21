import Link from "next/link";
export default function PrevNext(props) {
	const { prev, next } = props;

	return (
		<div className="z-50 px-9 pt-20 pb-12 flex justify-between text-5xl font-bold">
			<Link
				as={`/projects/${prev.slug}`}
				href="/projects/[slug]"
				scroll={false}
			>
				Prev
			</Link>
			<Link
				as={`/projects/${next.slug}`}
				href="/projects/[slug]"
				scroll={false}
			>
				Next
			</Link>
		</div>
	);
}
