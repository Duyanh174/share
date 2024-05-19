import React from 'react'


const ShoesInfoitemDetail = (props) => {
    const { shoeDetail } = props
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-4">
                                <img className='img-fluid' src={shoeDetail.image} alt="" />
                            </div>
                            <div className="col-8" style={{ textAlign: "left" }}>
                                <p className='fw-bold fs-3'>{shoeDetail.name}</p>
                                <p className='mt-3 '>{shoeDetail.description}</p>
                                <p className='mt-3 fw-bold'>${shoeDetail.price}</p>
                                <p className='mt-3'>{shoeDetail.quantity}</p>
                            </div>
                        </div>
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

export default ShoesInfoitemDetail
