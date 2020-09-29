import {
<<<<<<< HEAD
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
=======
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
>>>>>>> 121add124d1337086b7195122ea666b1c82a2e63
		default:
			return state;
	}
};
