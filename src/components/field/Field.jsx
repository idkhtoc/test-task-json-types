import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Field = ({ 
	default_value,
	min_value, 
	max_value, 
	options, 
	type,
	validation = '',
	valid,
	addValue,
	id
}) => {
	const [value, setValue] = useState(default_value);
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		validate();
	}, []);

	const validate = () => {
		const regex = new RegExp(validation);
		let isValid = valid;

		if (regex.test(value)) {
			isValid = true;
			setShowError(false);
		}
		else {
			isValid = false;
			setShowError(true);
		}

		addValue(id, value, isValid);
	};

	const onInputChange = (e) => {
		const newValue = e.target.value;

		setValue(newValue);
	};

	const onBlur = () => {
		validate();
	};

	return (
		<label>
			{
				type === 'dropdown' ? (
					<select 
						onChange={onInputChange} 
						onBlur={onBlur}
					>
						{ 
							options.map((value, index) => (
								<option key={id + '_option_' + index} value={value}>{value}</option>
							))
						}
					</select>
				) : (
					<input 
            type={type}
            value={value}
						min={min_value}
						max={max_value}
            onChange={onInputChange} 
            onBlur={onBlur}
          />
				)
			}
      {showError && <span className='invalid'>Invalid input!</span>}
		</label>
	);
};

Field.propTypes = {
	default_value: PropTypes.any,
	min_value: PropTypes.number,
	max_value: PropTypes.number,
	validation: PropTypes.string,
	valid: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
	type: PropTypes.oneOf(['text', 'number', 'dropdown', 'longtext']),
	addValue: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
}

export default Field;