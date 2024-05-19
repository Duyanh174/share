import React from 'react'
import Chair from './Chair';
import cn from 'classnames'

const ChairList = ({ dataChairList }) => {
    return (
        <div >
            {dataChairList.map(seat => {
                return (
                    <div key={seat.hang} className={cn('d-flex gap-3')} style={{
                        justifyContent: 'center',
                        alignItems: 'center'

                    }} >
                        <p className='mt-3' style={{ width: 30 }}>{seat.hang}</p>
                        {
                            seat.danhSachGhe.map((ghe) => {
                                return (
                                    // <div key={ghe.soGhe} className=' Chair b mt-3' style={{

                                    // }}>{ghe.soGhe}</div>
                                    <Chair className={{
                                        disabled: !seat.hang,
                                    }} ghe={ghe} key={ghe.soGhe} />
                                )
                            })
                        }
                    </div>
                )
            }

            )}
        </div>
    )
}

export default ChairList
