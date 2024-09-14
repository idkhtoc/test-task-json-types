import PropTypes from 'prop-types';

const Answer = ({hide, answer}) => {
	return (
		<div className='answer'>
			{!hide && (
				answer.map(({type, id, value}) => 
					<input key={id + '_answer'} type={type} value={value} readOnly></input>
				)
			)}
		</div>
	);
};

Answer.propTypes = {
	hide: PropTypes.bool,
	answer: PropTypes.arrayOf(PropTypes.object)
};

export default Answer;