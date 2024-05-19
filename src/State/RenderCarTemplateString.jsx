import React, { useState } from 'react'

const RenderCarTemplateString = () => {


    const [color, setColorCar] = useState("./images/car/black-car.jpg")
    const handeCorlor = (name) => {
        setColorCar(`./images/car/${name}-car.jpg`)
    }

    return (
        <div className=" container row mb-5"  >

            <h1>RenderCar with TemplateString</h1>
            <div className='col-9' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {color && (
                    <>
                        <button className='btn btn-success mb-4' onClick={() => {
                            handeCorlor("black")
                        }}>Black car</button>
                        <button className='btn btn-success mb-4' onClick={() => {
                            handeCorlor("red")
                        }}>red car</button>
                        <button className='btn btn-success mb-4' onClick={() => {
                            handeCorlor("silver")
                        }
                        }>silver car</button>
                        <button className='btn btn-success mb-4' onClick={() => { handeCorlor("steel") }
                        }>steel car</button>
                    </>
                )}

            </div>
            <div className='col-3'>
                <img src={color} alt="..." style={{ width: "500px" }} />
            </div>
        </div>
    )
}

export default RenderCarTemplateString
