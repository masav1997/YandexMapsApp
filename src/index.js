import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/header";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
