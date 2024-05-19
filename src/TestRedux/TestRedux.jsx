import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { testActionsRedux } from '../store/testReducer/actions'


const TestRedux = () => {
    const { test } = useSelector((state) => state.testReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <p>{test}</p>

            <button className='btn btn-outline-danger me-3' onClick={() => {
                dispatch(testActionsRedux.changeName("thay dổi actions thành công "))
            }}  >New Name</button>
            <button className='btn btn-outline-danger' onClick={() => {
                dispatch(testActionsRedux.changeNameDefault("abc"))
            }}  >Default Name</button>
        </div>
    )
}

export default TestRedux
