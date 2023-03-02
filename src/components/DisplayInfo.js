import React from "react";
import './DisplayInfo.scss';
//import logo from './../logo.svg'
class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('>>Call me Constructor: 1');
        super(props);
        this.state = {
            isShowing: true,
        }
    }
    componentDidMount() {
        console.log('>>>Call me Component did mount');
        setTimeout(() => {
            document.title = 'BigBee Media';
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>>Call me Component did update', prevProps.listOfUser);
        if (this.props.listOfUser !== prevProps.listOfUser) {
            if (this.props.listOfUser.length === 5)
                alert('You got 5 users');
        }
    }
    handleShowHide = () => {
        this.setState({
            isShowing: !this.state.isShowing,
        })
    }
    render() {
        console.log('>>> Call me Render:')
        const { listOfUser } = this.props;
        return (
            <div className="display-info-container">
                {/* <img src = {logo}/> */}
                <span onClick={() => { this.handleShowHide() }}>{this.state.isShowing === true ? "Hide list users" : "Show list users"}</span>
                {this.state.isShowing &&
                    <>
                        {listOfUser.map((userItem, index) => {
                            return (
                                <div key={userItem.id} className={userItem.age > 18 ? "red" : "green"}>
                                    <div>My id is {userItem.id} </div> <br></br>
                                    <div> My name is {userItem.name} </div> <br></br>
                                    <div>My age is {userItem.age} </div><br></br>
                                    <div>
                                        <button onClick={(event) => { this.props.handleDeleteUser(userItem.id) }}>X</button>
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