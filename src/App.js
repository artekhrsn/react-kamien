import React from "react";
import "./Style/App.css";
import RandomUserList from "./Components/RandomUserList";
import RandomTextList from "./Components/RandomTextList";
import Form from "./Components/Form";

class App extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Form />
        <RandomTextList />
        <img
          src="https://image.shutterstock.com/image-illustration/january-6-2019-caricature-bill-260nw-1275457543.jpg"
          alt="Bill Gates"
        />
        <RandomUserList />
      </React.Fragment>
    );
  }
}

export default App;
