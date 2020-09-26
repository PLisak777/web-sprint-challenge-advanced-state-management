export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })

    fetch('/server')
    .then((res) => {
        console.log('pl: actions.js: fetchData: fetch results: ', res);
        dispatch({ 
            type: FETCH_DATA_SUCCESS,
            payload: res.data
        })
    })
    .catch((err) => {
        console.error('error finding smurfs', err.message);
        dispatch({ 
            type: FETCH_DATA_FAIL,
            payload: `Your smurfs are missing! ${err.message}`
        })
    })
}