import React, { Component } from 'react';


class Registration extends Component {
    state = {
        firstName: "",
        lastName: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        alert(`${this.state.firstName} ${this.state.lastName} Registered Successfully!`)
        console.log(this.state);
        this.setState({
            firstName:"",
            lastName:"",
        })
        event.preventDefault()
        
    }

    render() {
        return (
            <form>
                <label>
                    First name
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Last name
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Registration