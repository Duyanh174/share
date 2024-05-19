import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/movieBooking/slice'

const ResultBooking = () => {
  const { chairBooking } = useSelector(state =>
    state.movieBooking
  )
  const dispatch = useDispatch()

  return (
    <div >
      <p>Danh sách ghế đã chọn</p>
      <div>
        <div className='d-flex gap-3'>
          <div className='Chair booked'></div>
          <div>ghế đã đặt</div>
        </div>
        <div className='d-flex gap-3 mt-3 mb-3'>
          <div className='Chair booking'></div>
          <div>ghế đang chọn</div>
        </div>
        <div className='d-flex gap-3'>
          <div className='Chair'></div>
          <div>ghế chưa đặt</div>
        </div>
      </div>
      <table className='table mt-3' style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairBooking.map(chair => (
            <tr key={chair.soGhe}>
              <td>{chair.soGhe}</td>
              <td>{chair.gia}</td>
              <td className='text-danger font-bold fs-4 ' style={{
                cursor: "pointer"
              }} onClick={() => {
                dispatch(movieBookingActions.setChairsBooking(chair))
              }} >X</td>
            </tr>
          ))}

          <tr>
            <td>Tổng tiền cần thanh toán</td>
            <td>
              {
                chairBooking.reduce((total, chair) => {
                  return (total += chair.gia)
                }, 0)
              }
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-success mt-3' onClick={() => {
        dispatch(movieBookingActions.setChairsBooked())
      }} >Thanh toán </button>
    </div>
  )
}

export default ResultBooking
