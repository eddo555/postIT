// import React, { useState } from "react";
// import List from './List'
// import firestore from "./firestore";

// function App() {
//   const [name, setName] = useState();
//   const [topic, setTopic] = useState();
//   const [message, setMessage] = useState();

//   function submitHandler(e) {
//     e.preventDefault();
//     console.log("submithandler");
//     console.log(name, topic, message);

//     const db = firestore.firestore();
//     // db.settings({
//     //   timestampsInSnapshots: true
//     // });

//     db.collection("postit").add({
//       name: { name },
//       topic: { topic },
//       message: { message },
//     });

//     setName("");
//     setTopic("");
//     setMessage("");
//   }

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const db = firestore.firestore();
//   //     const list = db.collection("postit");
//   //     const snapshot = await list.get();
//   //     snapshot.forEach((doc) => {
//   //       console.log(doc.id, doc.data());
//   //     });
//   //   };
//   //   fetchData();
//   // }, []);

//   return (
//     <div>
//       <div className="form-wrapper">
//         <form onSubmit={submitHandler}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               placeholder="insert name"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label>
//             Topic:
//             <input
//               type="text"
//               name="topic"
//               palceholder="topic"
//               onChange={(e) => setTopic(e.target.value)}
//             />
//           </label>
//           <label>
//             Message:
//             <textarea
//               type="text"
//               name="textarea"
//               placeholder="Enter message"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </label>
//           <input type="submit" value="submit" />
//         </form>
//       </div>

//     </div>

//   );
// }

// export default App;

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

  render() {
    return (
      <UseContextConsumer>
        {({ name, topic, message, postIt }) => (
          <main>
            <div className="form-wrapper">
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
            </div>
            <div className="message-wrapper">
                <p>
                  {topic}
                </p>
                <p>{message}</p>
            </div>
          </main>
        )}
      </UseContextConsumer>
    );
  }
}

export default App;
