import React from 'react'
import ProductsList from './ProductsList'
import ProductDetail from './ProductDetail'
import phoneList from "./data.json"
import Cart from './Cart'

const PhoneRedux = () => {
  console.log(phoneList);
  

  return (
    <div className='container'>

      <div className='d-flex justify-content-between mt-5'>
        <h2 className='mt-5'>Phone Redux</h2>

        <button className="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#cartPhone"> Giỏ hàng </button>
      </div>

      <ProductsList phoneList={phoneList} />

      <ProductDetail />

      <Cart />


    </div>
  )
}

export default PhoneRedux
