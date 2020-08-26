import React, { createContext, Component } from 'react'

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