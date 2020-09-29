import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_ERROR = 'POST_DATA_ERROR';

export const fetchData = () => (dispatch) => {
	dispatch({ type: FETCH_DATA_START });

	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			console.log('pl: actions/index.js: fethData: axios.then: ', res.data);
			dispatch({
				type: FETCH_DATA_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log('error', err);
			dispatch({ type: FETCH_DATA_ERROR, payload: err });
		});
};

export const postData = (smurf) => (dispatch) => {
	dispatch({ type: POST_DATA_START });

	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then((res) => {
			console.log('pl: actions/index.js: postData: axios.then: ', res.data);
			dispatch({
				type: POST_DATA_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log('error', err);
			dispatch({ type: POST_DATA_ERROR, payload: err });
		});
};
