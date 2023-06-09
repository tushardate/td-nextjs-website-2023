import Layout from "@components/Layout";
import TDSplitText from "@components/TDSplitText";

export default function Test() {
	return (
		<Layout>
			<div className="min-h-screen">
				<div className="min-w-screen bg-red-600 h-48"></div>
				<TDSplitText>
					The SplitType class splits the text content of the target
					elements using the provided options. It returns a SplitType
					instance which provides access to the split text nodes. By
					default, text will be split into lines, words, and
					characters, using relative position.
				</TDSplitText>
			</div>
		</Layout>
	);
}
