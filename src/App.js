import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Style/App.css";
import RandomUserList from "./Components/RandomUserList";
import RandomTextList from "./Components/RandomTextList";
import Form from "./Components/Form";
import Header from "./Components/Header";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/RandomTextList" component={RandomTextList} />
          <Route path="/RandomUserList" component={RandomUserList} />
          <Route path="/Form" component={Form} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
