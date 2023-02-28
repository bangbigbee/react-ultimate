import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: 'NguyenTriBang', age: 16 },
            { id: 2, name: 'NguyenTriDuan', age: 24 },
            { id: 3, name: 'NguyenKimTien', age: 69 }
        ]
    }
    render() {
        return (
            <div>
                <UserInfo /> <br></br>
                <DisplayInfo user={this.state.listUser} />
            </div>
        )
    }
}
export default MyComponent