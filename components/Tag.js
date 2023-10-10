import React from "react";

function Tag({ text, className }) {
	return (
		<div className={`h-5 px-2 rounded-full ring-1 ring-white leading-5 text-xs flex place-content-center ${className}`}>
			<p className="pt-[0.02rem]">{text}</p>
		</div>
	);
}

export default Tag;
