import React from "react";

class Form extends React.Component {
  state = {
    username: "",
    email: "",
    phone: "",
    webUrl: "",
    message: "",
    warning: ""
  };
  handleChange = e => {
    const type = e.target.type;
    const name = e.target.name;
    // console.log(type);
    // console.log(name);
    const value = e.target.value;
    //console.log(value);
    if (
      type === "text" ||
      type === "email" ||
      type === "tel" ||
      type === "url" ||
      type === "textarea"
    ) {
      this.setState({
        [name]: value
      });
    }
  };
  handleState = () => {
    const username = this.state.username;
    const email = this.state.email;
    const phone = this.state.phone;
    const webUrl = this.state.webUrl;
    const message = this.state.message;
    return {
      username,
      email,
      phone,
      webUrl,
      message
    };
  };

  handleSubmit = e => {
    e.preventDefault();

    const showObject = this.handleState();
    console.log(showObject);

    this.setState({
      username: "",
      email: "",
      phone: "",
      webUrl: "",
      message: "",
      warning: "The form has been sent!"
    });
  };
  componentDidUpdate() {
    if (this.state.warning !== "") {
      setTimeout(() => {
        this.setState({
          warning: ""
        });
      }, 2000);
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Contact Form</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Your Email Address"
            />
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="Your Phone Number"
            />
            <input
              type="url"
              name="webUrl"
              value={this.state.webUrl}
              onChange={this.handleChange}
              placeholder="Your Website"
            />
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Awesome page!"
            ></textarea>
            <button>Submit</button>
            {this.state.warning && <h3>{this.state.warning}</h3>}
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
