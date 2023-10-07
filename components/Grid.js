import { useState } from "react";

function Grid() {
	const [showGrid, setShowGrid] = useState(false);
	return (
		<>
			{showGrid && <div className="grid-overlay fixed top-0 left-0 bottom-0 right-0 pointer-events-none"></div>}
			<button className="fixed top-0 right-0 bg-red-300 p-1 text-sm" onClick={() => setShowGrid(!showGrid)}>
				X
			</button>
		</>
	);
}

export default Grid;
