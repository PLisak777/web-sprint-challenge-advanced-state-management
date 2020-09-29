import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions/actions';

const AddNewSmurf = (props) => {
	const [smurf, setNewSmurf] = useState({
		name: '',
		age: '',
		height: '',
		id: Date.now(),
	});

	const handleChange = (e) => {
		setNewSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.postData(smurf);

		setNewSmurf({
			name: '',
			age: '',
			height: '',
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Add Smurf</h2>
				<label htmlFor="name">
					Name
					<input
						placeholder="Name"
						type="text"
						name="name"
						value={smurf.name}
						onChange={handleChange}
					/>
				</label>

				<label htmlFor="age">
					Age
					<input
						placeholder="age"
						type="number"
						name="age"
						value={smurf.age}
						onChange={handleChange}
					/>
				</label>

				<label htmlFor="height">
					height
					<input
						placeholder="height"
						type="text"
						name="height"
						value={smurf.height}
						onChange={handleChange}
					/>
				</label>

				<button>Add Smurf</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		is_posting: state.is_posting,
		smurfs: state.smurfs,
		errors: state.error,
	};
};

export default connect(mapStateToProps, { postData })(AddNewSmurf);
