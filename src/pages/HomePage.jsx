import React from 'react'
import { NavLink, Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <NavLink to="/bidingdata">Biding Data</NavLink> */}
            <Link to="/bidingdata">Biding Data</Link>
            <NavLink to="/render-with-map">Render With Map</NavLink>
            <NavLink to="/render-movie">Render Movie</NavLink>
            <NavLink to="/demo-state">Demo State</NavLink>
            <NavLink to="/rendercar">Render Car</NavLink>
            <NavLink to="/render-car-templatestring">Render Car Template String</NavLink>
            <NavLink to="/props">Props</NavLink>
            <NavLink to="/demoredux">Demo Redux</NavLink>
            <NavLink to="/testredux">Test Redux</NavLink>
            <NavLink to="/phoneredux">Phone Redux</NavLink>
            <NavLink to="/movie-booking">Movie Booking</NavLink>
        </div>
    )
}

export default HomePage

