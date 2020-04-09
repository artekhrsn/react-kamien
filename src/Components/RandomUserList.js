import React from "react";
import PeopleList from "./PeopleList";
import Person from "./Person";
import getUsers from "../Service/UserService";

class RandomUserList extends React.Component {
  state = {
    userList: [],
    isLoaded: false,
    isClicked: false,
  };
  componentDidMount() {
    getUsers().then((data) => {
      console.log(data);
      this.setState({
        userList: data,
        isLoaded: true,
        isClicked: false,
        person: null,
      });
    });
  }

  showPerson = (id) => {
    const personId = id;
    console.log("klikam na osobe o id: ", personId);
    const users = this.state.userList;
    const personIndex = users.findIndex((user) => user.id === personId);
    console.log(users[personIndex]);
    this.setState({
      isClicked: true,
      person: users[personIndex],
    });
  };

  render() {
    const users = this.state.userList;
    const myPerson = this.state.person;
    return (
      <div>
        {this.state.isClicked ? (
          <Person person={myPerson} />
        ) : this.state.isLoaded ? (
          <PeopleList people={users} change={this.showPerson} />
        ) : (
          <h1>Wczytuje dane...</h1>
        )}
      </div>
    );
  }
}

export default RandomUserList;
