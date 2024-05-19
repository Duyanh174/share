import React from 'react'
import "./index.scss"
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/movieBooking/slice'
import cn from 'classnames'


const Chair = ({ className, ghe }) => {
    const dispatch = useDispatch()
    const { chairBooking, chairBooked } = useSelector(state =>
        state.movieBooking
    )
    console.log('chairBooked: ', chairBooked);
    // console.log('chairBooking: ', chairBooking);
    return (
        <div className={cn(' Chair b mt-3', className, { booking: chairBooking.find(chair => chair.soGhe === ghe.soGhe), booked: chairBooked.find(chair => chair.soGhe === ghe.soGhe) })}
            onClick={() => {
                dispatch(movieBookingActions.setChairsBooking(ghe))

            }}>{ghe.soGhe}</div>
    )
}

export default Chair
