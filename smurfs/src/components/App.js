<<<<<<< HEAD
import React from "react";

import "./App.css";
import SmurfList from "../components/SmurfList";
import AddNewSmurf from "../components/AddNewSmurf";

const App = (props) => {
  return (
    <div className="App">
      <h1>Smurf List</h1>
      <AddNewSmurf />
      <SmurfList />
    </div>
  );
};
=======
import React, { Component } from "react";
// import { fetchData } from '../actions/actions';

import "./App.css";
import { AddSmurfForm } from "./AddSmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurfForm />
      </div>
    );
  }
}
>>>>>>> 121add124d1337086b7195122ea666b1c82a2e63

export default App;