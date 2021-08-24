import React from "react";
import Form from "./Form";
import Login from "./Login";


var isLoggedIn = true;


var userIsRegistered = false;


function App() {
  return (
    <div className="container">
    {/* Ternary Operator ==> conditionTrue ? doThisIfTrue : doThisIfFalse*/}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login/>}   */}
      {userIsRegistered ? <Form/> : <Login/>}
      
    
    </div>
    
  );
}

export default App;
