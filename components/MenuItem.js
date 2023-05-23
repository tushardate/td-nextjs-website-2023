import { useEffect, useRef } from "react";

export default function MenuItem({ text }) {
	const top = useRef(null);
	const bottom = useRef(null);
  let chars = text.split('');
  let html = ''

  chars.forEach((el, idx) => {
    html += `<span style="--index: ${idx};">${el}</span>`
  });

  useEffect(() => {
    top.current.innerHTML = html;
    bottom.current.innerHTML = html;
  }, [])

	return (
		<div className="menu-item">
			<div ref={top} className="menu-item-text top"></div>
			<div ref={bottom} className="menu-item-text bottom"></div>
		</div>
	);
}
