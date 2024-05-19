import React from 'react'

const RenderWithMap = () => {
    const productList = [
        {
            name: "iphone 7+",
            price: 10000000,
            color: "yellow"
        },
        {
            name: "iphone 8+",
            price: 13000000,
            color: "black"
        },
        {
            name: "iphone 10+",
            price: 20000000,
            color: "blue"
        }
    ]

    return (
        <div>
            <h1>RENDER WITH MAP </h1>
            <p> Danh sach sẩn phẩm </p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((values, index) => {
                            return (
                                <tr key={index}>
                                    <td>{values.name}</td>
                                    <td>{values.price}</td>
                                    <td>{values.color}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RenderWithMap
