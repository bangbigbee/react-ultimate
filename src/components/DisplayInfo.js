import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user);
        return (
            user.map((userItem) => {
                return (
                    <div key={user.id}>
                        My id is {userItem.id} <br></br>
                        My name is {userItem.name} <br></br>
                        My age is {userItem.age} <br></br> <hr></hr>
                    </div>
                )
            })

        )
    }
}
export default DisplayInfo