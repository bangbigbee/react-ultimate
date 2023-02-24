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
    render() {
        return (
            <div>My First Components
                <button onClick={(event) => { this.handleOnClick(event) }}>Click me</button>
                <button onMouseOver={(event) => { this.handleOnMouseOVer(event) }}>Hover me</button>
                <div>My age is: {this.state.age}</div>
            </div>
        )
    }
}
export default MyComponent