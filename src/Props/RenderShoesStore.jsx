import React from 'react'
import ShoesItem from "./ShoesItem"


const RenderShoesStore = (props) => {
    const { storeList, handleShoeDetail, handleShoeCart } = props
    return (
        <div className='row'>
            {storeList.map((shoes) =>

            (
                <ShoesItem key={shoes.id} product={shoes} handleShoeDetail={handleShoeDetail} handleShoeCart={handleShoeCart} />


            ))
            }
        </div>
    )
}

export default RenderShoesStore
