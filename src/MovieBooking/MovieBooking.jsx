import React from 'react'
import ChairList from './ChairList'
import ResultBooking from './ResultBooking'
import dataChairList from "./data.json"


const MovieBooking = () => {
  return (
    <div className='container'>
      <h1> Movie Booking (redux-toolkit)</h1>
      <div className="row">
        <div className="col-8">
            <div className="p-3 bg-dark text-white mb-3 text-center"> Screen</div>
            <ChairList dataChairList={dataChairList}/>
        </div>
        <div className="col-4">
            <ResultBooking/>
        </div>
      </div>
    </div>
  )
}

export default MovieBooking
