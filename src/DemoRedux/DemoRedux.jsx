import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { demoReduxActions } from '../store/demoRedux/action';

const DemoRedux = () => {
  // lấy gái trị từ store redux (initialState)

  const { number, age, name } = useSelector((state) => state.demoRedux)
  console.log('demoRedux: ', number, age, name);

  // thay đổi giá trị trên store Redux 
  // Dùng dispatch để gửi lên store 1 action 
  // action là 1 object gồm 2 thuộc tính:
  // + type: string (HẰNG SỐ) ex: "abc"
  // + payload: number, string, boolean , obj, array, function, undefinded, null

  const dispatch = useDispatch()

  return (
    <div>
      <h2 className='container mt-5'>Demo Redux (old)</h2>
      <p>Number : {localStorage.getItem("number", number)}</p>
      <div className="mt-3">
        <button className='btn btn-success me-3' onClick={() => {
          // dispatch({
          //   type: INCREASE_NUMBER,
          //   payload: 1,
          // })
          dispatch(demoReduxActions.increaseNumber(1))

        }}   >+ Number</button>
        <button className='btn btn-danger' onClick={() => {
          // dispatch({
          //   type: DECREASE_NUMBER,
          //   payload: -1,
          // })
          dispatch(demoReduxActions.decreaseNumber(-1))

        }}  >- Number</button>



      </div>
    </div>
  )
}

export default DemoRedux
