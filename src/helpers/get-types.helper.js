import types from '../types.json';

export const getTypes = () => {
	return types.map((type) => ({ ...type, valid: false }));
};
