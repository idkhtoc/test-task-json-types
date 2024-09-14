import { useState } from 'react';
import PropTypes from 'prop-types';

import Field from '../field/Field';

import { getTypes } from '../../helpers/get-types.helper';

const Form = ({ showAnswer }) => {
	const [types, setTypes] = useState(getTypes());

	const onSubmit = (e) => {
		e.preventDefault();

		if (!areValid()) return;

		showAnswer(types);
	};

	const addValue = (id, value, isValidated) => {
		setTypes((data) => data.map( (field) => field.id == id ? { ...field, value, valid: isValidated } : field));
	};

	const areValid = () => {
		return types.every((field) => field.valid);
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
				<button type='submit' className='submit'>SUBMIT</button>
			</form>
		</div>
	);
};

Form.propTypes = {
	showAnswer: PropTypes.func
};

export default Form;