import React from "react";
import { data } from "./TextData";
import Sample from "./Sample";

class RandomTextList extends React.Component {
  state = {};

  render() {
    const text = data.content;
    const index = Math.floor(Math.random() * text.length);
    const message = text.map(res => <Sample key={res.id} content={res.text} />);
    return (
      <h2>
        <i>{message[index]}</i>
      </h2>
    );
  }
}

export default RandomTextList;
