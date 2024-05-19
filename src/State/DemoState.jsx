import React, { useState } from 'react'

const DemoState = () => {
    // let isLogin = true
    // const handleLogin = (login) => {
    //     isLogin = login
    //     console.log('isLogin: ', isLogin);
    // }
    const [isLogin, setIsLogin] = useState(true)

    const [number, setNumber] = useState(1)

    

    const [state, setState] = useState(() => {
        return "A B C"
    })

    const [fontSize, setFontSize] = useState(20)

    console.log('state: ', state);
    const handleNumberPlus = () => {
        setNumber(number + 1)
    }

    const handleNumberMinus = () => {
        setNumber(number - 1)
    }

    return (
        <div style={{
            textAlign: "left"
        }} className='container mb-5'>
            <p className='container mt-5'>Demo State</p>
            {
                isLogin ? (
                    <div>hello <button className='btn btn-danger ms-4' onClick={() => { setIsLogin(false) }}> Đăng xuất</button> </div>
                ) : (
                    <button className='btn btn-success' onClick={() => { setIsLogin(true) }}> đăng nhập </button>
                )
            }

            <h2>Example</h2>

            <p className='fs-4 mt-4'>Number: {number}</p>
            <button className='btn btn-outline-success' onClick={handleNumberPlus}> + Number</button>
            <button className='btn btn-outline-warning ms-5' onClick={handleNumberMinus}> - Number</button>


            <p className='mt-5 mb-5' style={{fontSize}}>Hello world</p>

            <div className='mt-5'>
                <button className='btn btn-success' onClick={() => {
                    setFontSize( fontSize + 5 );
                }}>+ font size</button>
                <button className='btn btn-warning ms-5' onClick={()=>{
                    setFontSize( fontSize - 5 );
                }}>- font size</button>
            </div>


        </div>
    )
}

export default DemoState
