import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'BigBee',
        address: 'NhonHoa',
        age: 30,
        hoverCheck: 'hovered'
    }
    handleOnClick() {
        console.log(">>Clicked me!");
        console.log("My age is ", this.state.name);
        this.setState({
            age: Math.floor(Math.random() * 100) + 1,
        })

    }
    handleOnMouseOVer(event) {
        console.log("Hovered me!", event)
    }
    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        alert('Submitted!')
        console.log('state:', this.state)

    }
    render() {
        return (
            <div>My First Components
                <div> My name is {this.state.name} and My age is: {this.state.age}</div>
                <button onClick={(event) => { this.handleOnClick(event) }}>Click me</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default MyComponent