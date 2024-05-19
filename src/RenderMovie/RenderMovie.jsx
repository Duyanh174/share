import React from 'react'
import filmList from './data.json'



console.log('filmList: ', filmList);
const RenderMovie = () => {
    return (
        <div className='container'>
            <h2> Render Movie </h2>
            <div className="row">
                {filmList.map((film) => (
                    <div className='col-3 mt-3' key={film.maPhim}>
                        <div className="card" >
                            <img src={film.hinhAnh} style={{
                                height: 450,

                            }} alt="" className='img-fluid' />
                            <div className="body" >
                                <p className="card-title fw-bold" style={{
                                    heigh: 50
                                }} >{film.tenPhim}</p>
                                <p className='fw-3'>{film.moTa.substring(0, 50)}...</p>
                                <button type='button' className="btn btn-primary" > Go to trailer
                                </button>
                                <a href={film.trailer} >asdas</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RenderMovie
