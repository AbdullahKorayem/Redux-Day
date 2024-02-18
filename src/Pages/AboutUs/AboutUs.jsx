import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function AboutUs() {
    return (
        <>

            <div className='grid grid-cols-1 place-items-center'>
                <div>   <h1>About Us</h1>
                    <Link to="/About-Us">toValues</Link>
                    <Link to="/About-Us/Vision">toVision</Link></div>
                <Outlet />
            </div>

        </>


    )
}

export default AboutUs
