import React from "react";

const LoginInput = ({ 
	label,
	type = 'text',
	placeholder,
}) => {
		return (
			<div>
			<label> {label} </label>
			<input 
				placeholder = {placeholder} 
				type = {type} />
			</div>
		);
};

export default LoginInput;
