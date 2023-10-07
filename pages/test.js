import Layout from "@components/Layout";
import styles from "@components/styles/test.module.scss";
import TDSplitText from "@components/TDSplitText";

export default function Test() {
	const { text, wrapper, container } = styles;
	return (
		<Layout>
			<div className="min-h-screen">
				<div className={`${container}`}>
					<div className={`mt-28 px-16 textWrap ${wrapper}`}>
						<div className={`${text} text-4xl pointer-events-none`}>
							Lorem Ipsum
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
