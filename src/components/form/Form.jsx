import { useState } from 'react';
import PropTypes from 'prop-types';

import Field from '../field/Field';

import { getTypes } from '../../helpers/get-types.helper';

const Form = ({ showAnswer }) => {

	const [types, setTypes] = useState(getTypes());
	const [error, setError] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		if (!validate()) {
			showError("Wrong input!");
			return;
		}

		setError("");

		showAnswer(types);
	};

	const validate = () => {
		for (let type of types) {
			if (typeof(type.value) === "string") {
				const regex = new RegExp(type.validation || "");

				if (!regex.test(type.value)) return false;
			}
		}
		
		return true;
	};

	const addValue = (id, value) => {
		setTypes((data) => data.map( (field) => field.id == id ? { ...field, value } : field));
	};

	const showError = (msg) => {
		setError(msg);
	};

	return (
		<div className='form'>
			<form
				onSubmit={onSubmit}
			>
				{
					types.map((data) => (
						<Field 
							key={data.id} 
							addValue={addValue}
							{...data} 
						/>
					))
				}
				<div className='error'>{error}</div>
				<button type='submit' className='submit'>SUBMIT</button>
			</form>
		</div>
	);
};

Form.propTypes = {
	showAnswer: PropTypes.func
};

export default Form;