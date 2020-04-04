import React from "react";
import GetData from "../Service/TextData";

class RandomTextList extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <img
          src="https://image.shutterstock.com/image-illustration/january-6-2019-caricature-bill-260nw-1275457543.jpg"
          alt="Bill Gates"
        />
        <h2>
          <i>{GetData()}</i>
        </h2>
      </div>
    );
  }
}

export default RandomTextList;
