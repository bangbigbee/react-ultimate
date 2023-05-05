import React, { useState } from "react";

const AddUserInfo = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('NhonHoa');
    const [age, setAge] = useState('')

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div> My name is {name} and My age is: {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => { handleOnChangeInput(event) }} />
                <label>Your age: </label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => { handleOnChangeAge(event) }} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfo