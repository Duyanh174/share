import React, { useState } from 'react'
import HeaderDemo from './HeaderDemo'
import RenderShoesStore from "./RenderShoesStore"
import shoesList from "./data.json"
import ShoesInfoitemDetail from "./ShoesInfoitemDetail"
import CartShoes from "./CartShoes"

const DemoProps = () => {
  const [shoeDetail, setShoeDetail] = useState(shoesList[0])

  const [carts, setCarts] = useState([])
  console.log('carts: ', carts);

  const handleShoeDetail = (product) => {
    setShoeDetail(product)
  }

  const handleShoeCart = (product) => {


    setCarts((currentState) => {

      // kiểm tra carts đã tồn tại sản phẩm hay chưa 

      const index = currentState.findIndex((item) => item.id === product.id)
      console.log('index: ', index);

      if (index !== -1) {
        // sản phẩm đã tồn tại tăng số sượng sản phẩm 
        currentState[index].cartsQuantity += 1
      }
      else {
        currentState.push({ ...product, cartsQuantity: 1 })
      }
      return [...currentState]
    })

  }

  const handleDelete = (id) => {
    setCarts((currentState) => {
      //hàm filter sẽ return về một mảng mới 
      return currentState.filter(item => item.id !== id)
    })
  }

  const handleCartsQuantity = (id, quantity) => {
    // quantity:; +1 => button +
    // quantity:; -1 => button -
    setCarts((currentState) => {
      //tìm kiếm sản phẩm muốn tăng giảm số lượng
      const index = currentState.findIndex((item) => item.id === id)

      currentState[index].cartsQuantity = currentState[index].cartsQuantity + quantity || 1

      //currentState[index].cartsQuantity = 1 (-1) = 0 || 1 => 0 = false
      // nếu a || b ( a == false thì sẽ luôn luôn là b ) 

      return [...currentState]
    })
  }
  return (
    <div className='container mt-5'>
      <HeaderDemo background="pink" />
      <HeaderDemo background="yellow" />
      <div className='d-flex justify-content-between'>
        <h1>Demo Props </h1>

        <button className='btn btn-outline-success' data-bs-toggle="modal" data-bs-target="#cartModal">Cart</button>
      </div>



      <RenderShoesStore storeList={shoesList} handleShoeDetail={handleShoeDetail} handleShoeCart={handleShoeCart} />
      {/* modal shoe detail */}

      <ShoesInfoitemDetail shoeDetail={shoeDetail} />

      {/* Modal giỏ hàng */}

      <CartShoes carts={carts} handleCartsQuantity={handleCartsQuantity} handleDelete={handleDelete} />


    </div>
  )
}

export default DemoProps
