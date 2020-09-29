import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_ERROR,
	POST_DATA_START,
	POST_DATA_SUCCESS,
	POST_DATA_ERROR,
} from '../actions/actions';

const initialState = {
	smurfs: [],
	is_fetching: false,
	is_posting: false,
	errors: '',
};

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				is_fetching: true,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				is_fetching: false,
			};
		case FETCH_DATA_ERROR:
			return {
				...state,
				is_fetching: false,
				error: action.payload,
			};
		case POST_DATA_START:
			return {
				...state,
				is_posting: true,
				smurfs: [...state.smurfs],
			};
		case POST_DATA_SUCCESS:
			return {
				...state,
				is_posting: false,
				smurfs: action.payload,
			};
		case POST_DATA_ERROR:
			return {
				...state,
				is_posting: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
