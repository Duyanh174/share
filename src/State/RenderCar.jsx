import React, { useState } from 'react'

const RenderCar = () => {

  const [color, setColorCar] = useState("./images/car/black-car.jpg")

  return (
    <div className=" container row mb-5" >
      <div className='col-9' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {color && (
          <>
            <button className='btn btn-success mb-4' onClick={() => {
              setColorCar("./images/car/black-car.jpg")
            }}>Black car</button>
            <button className='btn btn-success mb-4' onClick={() => {
              setColorCar("./images/car/red-car.jpg")
            }}>red car</button>
            <button className='btn btn-success mb-4' onClick={() => {
              setColorCar("./images/car/silver-car.jpg")
            }} >silver car</button>
            <button className='btn btn-success mb-4' onClick={() => {
              setColorCar("./images/car/steel-car.jpg")
            }} >steel car</button>
          </>
        )}

      </div>
      <div className='col-3'>
        <img src={color} alt="..." style={{ width: "500px" }} />
      </div>
    </div>
  )
}

export default RenderCar
