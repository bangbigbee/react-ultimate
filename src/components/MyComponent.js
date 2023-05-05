import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, name: 'NguyenTriBang', age: 16 },
        { id: 2, name: 'NguyenTriDuan', age: 24 },
        { id: 3, name: 'NguyenKimTien', age: 69 }
    ]);

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUser];
        listUserClone = listUserClone.filter(item => { return (item.id !== userId) }) // using filter to delete an array element
        //another way to above statement: listUserClone = listUserClone.filter(item => item.id !== userId)
        setListUser(listUserClone)

    }
    return (
        <>
            <div className="a">
                <AddUserInfo handleAddNewUser={handleAddNewUser} /> <br></br>
                <DisplayInfo listOfUser={listUser} handleDeleteUser={handleDeleteUser} />
            </div>
            <div className="b">

            </div>
        </>
    )
}
export default MyComponent