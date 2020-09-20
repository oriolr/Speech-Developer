import React, { Component } from 'react'
import UserForm from './components/UserForm'
import './App.css'

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                 <UserForm /> 
               </div>
            </div>
        )
    }
}

export default App;
