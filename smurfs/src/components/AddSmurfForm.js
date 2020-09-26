import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';

export const AddSmurfForm = (props) => {
	const [newSmurf, setNewSmurf] = useState({
		name: '',
		age: 0,
		height: '',
	});

	const handleChange = (e) => {
		e.persist();
		setNewSmurf({
			...props.state,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="container">
			<div className="smurfList">{/* <SmurfList /> */}</div>
			<br />
			<br />
			<form /*onSubmit={handleSubmit}*/>
				<input
					type="text"
					name="name"
					placeholder="Name Your Smurf!"
					// value={props.name}
					// onChange={handleChange}
				/>
				<br />
				<br />
				<input
					type="number"
					name="height"
					placeholder="How old is your smurf?"
					// value={props.age}
					// onChange={handleChange}
				/>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return [{
		smurfData: {
			name: state.name,
			age: state.age,
			height: state.height,
		},
	}];
};

export default connect(mapStateToProps, { fetchData })(AddSmurfForm);
