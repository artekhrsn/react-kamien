import React from "react";
import PeopleList from "./PeopleList";

const API_USER = "https://us-central1-react-mspm.cloudfunctions.net/api/people";

class RandomUserList extends React.Component {
  state = {
    userList: [],
    isLoaded: false
  };
  componentDidMount() {
    this.handleDataFetch();
  }
  handleDataFetch = () => {
    fetch(API_USER)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          userList: data,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const users = this.state.userList;
    return (
      <div>
        {this.state.isLoaded ? (
          <PeopleList people={users} />
        ) : (
          <h1>Wczytuje dane...</h1>
        )}
      </div>
    );
  }
}

export default RandomUserList;
