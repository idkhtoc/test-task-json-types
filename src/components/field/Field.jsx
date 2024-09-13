import { useState } from "react";

const Field = ({ 
	default_value,
	min_value, 
	max_value, 
	options, 
	type,
	addValue,
	id
}) => {
	const [value, setValue] = useState(default_value);

	const onInputChange = (e) => {
		const newValue = e.target.value;

		setValue(newValue);

		addValue(id, newValue);
	};
	
	if (type === "dropdown") {
		return (
			<select onChange={onInputChange}>
				{ options.map((value, index) => <option key={id + "_option_" + index} value={value}>{value}</option>) }
			</select>
		);
	}

	return (
		<input 
			type={type} 
			value={value}
			min={min_value}
			max={max_value}
			options={options}
			onChange={onInputChange} 
		/>
	);
};

export default Field;