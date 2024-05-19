import React from 'react'
import { useDispatch } from 'react-redux'
import { phoneAction } from '../store/phoneRedux/action'

const ProductItems = ({ phone }) => {
  const dispatch = useDispatch()
  return (
    <div className="col-4">
      <div className="card">
        <img className='img-fluid' style={{ height: 400 }} src={phone.hinhAnh} alt="" />
        <div className="card-body">
          <div className='f-flex justify-content-between'>
            <button className="btn btn-success" onClick={() => {
              dispatch(phoneAction.handleCarts(phone))
            }} >Add to cart</button>
            <button className="btn btn-danger ms-3" onClick={() => {
              dispatch(phoneAction.handlePhoneDetail(phone))
            }}>Detail</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItems
