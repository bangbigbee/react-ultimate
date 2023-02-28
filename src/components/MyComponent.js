import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: 'NguyenTriBang', age: 16 },
            { id: 2, name: 'NguyenTriDuan', age: 24 },
            { id: 3, name: 'NguyenKimTien', age: 69 }
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log ('>>>Check user object:', userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }
    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUser = {this.handleAddNewUser}/> <br></br>
                <DisplayInfo user={this.state.listUser} />
            </div>
        )
    }
}
export default MyComponent