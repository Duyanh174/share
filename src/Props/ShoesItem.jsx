import React from 'react'

const ShoesItem = (props) => {

    const { product, handleShoeDetail, handleShoeCart } = props
    return (
        <div className='col-3 mt-3' >
            <div className="card" >
                <img src={product.image} style={{
                    height: 450,

                }} alt="" className='img-fluid' />
                <div className="card-body" style={{
                    textAlign: 'left',
                }} >
                    <p className="card-title fw-bold" style={{
                        heigh: 50
                    }} >{product.name}</p>
                    <p className="card-title fw-bold" style={{
                        heigh: 50
                    }} >${product.price}</p>
                    <p className='fw-3'>{product.description}...</p>
                    <div className='mt-3 d-flex justify-content-between'>
                        <button type='button' className="btn btn-primary" onClick={() => {
                            handleShoeCart(product)
                        }}  > + add to cart
                        </button>
                        <button type='button' className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {

                            handleShoeDetail(product)
                        }} > Detail
                        </button >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoesItem
