import React from 'react'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Main() {

    // const theState = useSelector((state) => state)
    // console.log(theState.Favorite)


    return (

        <>

            <div className="grid grid-cols-1 w-full  gap-4">
                <NavBar />
                <Header />
                {/*  */}
                <Outlet />
                {/*  */}

                <Footer />
            </div>



        </>
    )
}

export default Main
