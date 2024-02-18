import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

import ErrorSvg from '../../assets/undraw_server_down_s-4-lk.svg'

function NotFound() {

    const error = useRouteError()
  
    return (
        <>
            <div className='flex flex-col gap-2'>404 Not Found</div>
            <Link to="/" className='text-bold from-stone-500'>Home From Link</Link>

            <div className=' flex w-full  justify-center items-center place-content-center'>
                <div><h1 className=' text-2xl text-red-800'>{error}</h1></div>
                <img src={ErrorSvg} alt="" />
            </div >
        </>
    )
}

export default NotFound
