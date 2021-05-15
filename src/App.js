import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, login } from "./actions";

function App() {
  const dispatch = useDispatch(); // variable to call usedispatch
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  return (
    <div className="App">
      <h1 style={{ marginLeft: "1rem" }}>Counter : {counter}</h1>
      <label style={{ marginLeft: "1rem" }}>
        {" "}
        <b> Actions : </b>
      </label>
      <button
        style={{ marginLeft: "0.5rem" }}
        onClick={() => dispatch(decrement())}
      >
        - 1
      </button>
      <button
        style={{ marginLeft: "0.5rem" }}
        onClick={() => dispatch(increment(5))}
      >
        + 5
      </button>
      <br />
      <br />
      <button style={{ marginLeft: "1rem" }} onClick={() => dispatch(login())}>
        {isLogged ? "Logout" : "Login"}
      </button>
      {isLogged ? <h3 style={{ marginLeft: "1rem" }}>Imp Info</h3> : ""}
    </div>
  );
}

export default App;
