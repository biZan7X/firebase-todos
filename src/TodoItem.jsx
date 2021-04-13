import React from "react";

const TodoItem = ({ title, progress, id }) => {
	return (
		<div className="TodoItem">
			<p>{title}</p>
		</div>
	);
};

export default TodoItem;
