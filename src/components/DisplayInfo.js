import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg'
class DisplayInfo extends React.Component {
   state = {
    isShowing: true,
   }
    handleShowHide = () => {
    this.setState ({
        isShowing: !this.state.isShowing,
    })
   }
    render() {
        const { user } = this.props;
        return (
            <div className = "display-info-container">
                {/* <img src = {logo}/> */}
                <span onClick = {() => {this.handleShowHide()}}>{this.state.isShowing === true ? "Hide list users" : "Show list users"}</span>
                {this.state.isShowing &&
                <>
                {user.map((userItem, index) => {
                return (
                    <div key={userItem.id} className = {userItem.age>18? "red": "green"}>
                           <div>My id is {userItem.id} </div> <br></br>
                           <div> My name is {userItem.name} </div> <br></br>
                           <div>My age is {userItem.age} </div><br></br>
                           <div>
                                <button onClick = {(event)=>{this.props.handleDeleteUser(userItem.id)}}>X</button>
                           </div>
                           <hr></hr>        
                    </div>
                )
            })}
            </>
    }
            </div>
        )
    }
}
export default DisplayInfo