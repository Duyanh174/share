import React from 'react'
import ProductItems from './ProductItems'

const ProductsList = ({ phoneList }) => {

    return (
        <div className='row'>
            {phoneList.map((phone) => (
              <ProductItems phone={phone} key={phone.maSP}/>
            ))}
        </div>
    )
}

export default ProductsList
