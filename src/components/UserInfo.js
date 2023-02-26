import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'BigBee',
        address: 'NhonHoa',
        age: 30,
        hoverCheck: 'hovered'
    }

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value,
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        alert('Submitted!')
        console.log('state:', this.state)
    }
    render() {
        return (
            <div> My name is {this.state.name} and My age is: {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name: </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => { this.handleOnChangeInput(event) }} />
                    <label>Your age: </label>
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => { this.handleOnChangeAge(event) }} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfo