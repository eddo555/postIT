import React, { createContext, Component } from 'react'
import firestore from './firestore'
const {Provider, Consumer} = createContext()

class UseContextProvider extends Component {
    state= {
        name:"",
        topic:"",
        message:''
    }

    postIt = (name,topic,message) => {
        
        this.setState({name})
        this.setState({topic})
        this.setState({message})
        const db = firestore.firestore();


    db.collection("postit").add({
      name: { name },
      topic: { topic },
      message: { message },
    });

  }
       
    
    

    render() {
        const {name, topic, message} = this.state
        return (
            <Provider value={{ name, topic, message, postIt: this.postIt}}>
                {this.props.children}               
            </Provider>
        )
    }
}

export {UseContextProvider, Consumer as UseContextConsumer}