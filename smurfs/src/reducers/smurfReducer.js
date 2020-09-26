import {
	ADD_NEW_SMURF,
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
} from '../actions/actions';

const initialState = [{
	smurfData: {
		name: '',
		age: 0,
		height: '',
	}},
	{
		is_loading: false,
		error: '',
	},
];

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_SMURF:
			return [...state, { smurfData: action.payload }];
		case FETCH_DATA_START:
			return [
				{
					...state,
					is_loading: true,
				},
			];
		case FETCH_DATA_SUCCESS:
			console.log('Smurfs: ', action.payload);
			return [
				...state,
				{ is_loading: false },
				{
					name: action.payload,
					age: action.payload,
					height: action.payload,
				},
			];
		case FETCH_DATA_FAIL:
			return [
				{
					...state,
					is_loading: false,
					error: action.payload,
				},
			];
		default:
			return state;
	}
};
