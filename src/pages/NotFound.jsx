import React from 'react'
import {useNavigate} from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='fs-4 fw-bold text-danger text-center mt-5 '>
            404 NOT FOUND

            <button className="btn btn-success mt-5" onClick={()=>{
                navigate('/')
            }}>Back Home</button>
        </div>
    )
}

export default NotFound
