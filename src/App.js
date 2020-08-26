import React, { Component } from "react";
import { UseContextConsumer } from "./useContext";

class App extends Component {
  state = {
    newName: "",
    newTopic: "",
    newMessage: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  resetForm = () => {
    this.setState({ newName: "" });
    this.setState({ newTopic: "" });
    this.setState({ newMessage: "" });
  };

  render() {
    return (
      <UseContextConsumer>
        {({ name, topic, message, postIt }) => (
          <main>
            <div
              className="form-wrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50vw",
              }}
            >
              <p>
                {name.length >= 1
                  ? `Hi ${name}`
                  : "Enter your name and message"}
              </p>
              <label>
                Name:
                <input
                  type="text"
                  name="newName"
                  placeholder="name"
                  value={this.state.newName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Topic:
                <input
                  type="text"
                  name="newTopic"
                  placeholder="topic"
                  value={this.state.newTopic}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Message:
                <textarea
                  type="text"
                  name="newMessage"
                  value={this.state.newMessage}
                  onChange={this.handleChange}
                />
              </label>

              <button
                onClick={() =>
                  postIt(
                    this.state.newName,
                    this.state.newTopic,
                    this.state.newMessage
                  )
                }
              >
                submit
              </button>
              <button onClick={() => this.resetForm()}>Reset</button>
            </div>
            {topic ? 
              <div
                className="message-wrapper"
                style={{
                  border: "solid black 0.01",
                  color: "black",
                  backgroundColor: "yellow",
                  width:"10vw"
                }}
              >
                <p>{topic}</p>
                <p>{message}</p>
              </div>
             : null
             }
          </main>
        )}
      </UseContextConsumer>
    );
  }
}

export default App;
