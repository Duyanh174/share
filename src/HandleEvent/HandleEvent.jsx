import React from 'react'

const HandleEvent = () => {
    const login = () => {
        alert("hello world")
    }

    const showMessage = (message) => {
        alert(message)
    }
    return (
        <div>
            <h1>Handle Event</h1>
            <button onClick={() => {
                login()
            }}>Login</button>


            <h1>Handle Event có tham số </h1>
            <button onClick={() => { showMessage('show Message') }}>Show message</button>
            <br />
            <h1> anonymus functiom</h1>
            <button className='btn btn-primary' onClick={(event) => { console.log(event.target); }}>Show message 1
                <span>asdasd</span>
            </button>
        </div>
    )
}

export default HandleEvent
