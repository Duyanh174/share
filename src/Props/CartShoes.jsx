import React, { useState } from 'react'

const CartShoes = ({ carts, handleCartsQuantity, handleDelete }) => {
    console.log('carts: ', carts);

    return (
        <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Your Carts</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {/* {carts.lenght ? ( */}

                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts.map((cart, index) => {
                                        return (
                                            <tr key={cart.id}>
                                                <td>{index + 1}</td>
                                                <td>{cart.name}</td>
                                                <td>
                                                    <img className='img-fluid' style={{ width: 80, height: 80 }} src={cart.image} alt="" />
                                                </td>
                                                <td>{cart.price}</td>
                                                <td>1</td>
                                                <td>{cart.cartsQuantity * cart.price}</td>
                                                <td>
                                                    <button className='btn btn-outline-danger' onClick={() => {
                                                        handleCartsQuantity(cart.id, -1)
                                                    }}>-</button>
                                                    <span className='mx-3'>{cart.cartsQuantity}</span>
                                                    <button className='btn btn-outline-success' onClick={() => {
                                                        handleCartsQuantity(cart.id, 1)
                                                    }}>+</button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        handleDelete(cart.id)
                                                    }}>X</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {/* ) :  (
                            <p>Vui lòng chọn sản phẩm</p>
                        )} */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartShoes
