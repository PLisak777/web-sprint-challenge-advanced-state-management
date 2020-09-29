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

export default App;