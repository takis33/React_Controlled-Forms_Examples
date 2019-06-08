import React, { Component } from "react";
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2>
          Shopping List, Controlled form example for passing AddItem() to child
          component:
        </h2>
        <ShoppingList /> <br />
        <br />
        <hr />
        <h2>Controlled Form with three different fields:</h2>
        <Form />
      </div>
    );
  }
}

export default App;
