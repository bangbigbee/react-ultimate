import React, { useState } from "react";
import './DisplayInfo.scss';
//import logo from './../logo.svg'
const DisplayInfo = (props) => {
    const [isShowing, setShowHideState] = useState(true);

    const handleShowHide = () => {
        setShowHideState(!isShowing);
    }

    const { listOfUser } = props;
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => { handleShowHide() }}>{isShowing ? "Hide list of users" : "Show list of users"}</span>
            </div>
            {isShowing &&
                <>
                    {listOfUser.map((userItem, index) => {
                        return (
                            <div key={userItem.id} className={userItem.age > 18 ? "red" : "green"}>
                                <div>My id is {userItem.id} </div> <br></br>
                                <div> My name is {userItem.name} </div> <br></br>
                                <div>My age is {userItem.age} </div><br></br>
                                <div>
                                    <button onClick={(event) => { props.handleDeleteUser(userItem.id) }}>X</button>
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
export default DisplayInfo