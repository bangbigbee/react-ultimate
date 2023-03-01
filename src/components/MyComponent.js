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

    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser];
        listUserClone = listUserClone.filter(item => {return (item.id !== userId)}) // using filter to delete an array element
        //another way to above statement: listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone,
        })

    }
    render() {
        return (
            <>
            <div className="a">
                <AddUserInfo handleAddNewUser = {this.handleAddNewUser}/> <br></br>
                <DisplayInfo user={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />
            </div>
            <div className="b">

            </div>
            </>
        )
    }
}
export default MyComponent