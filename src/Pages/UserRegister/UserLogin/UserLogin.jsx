import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiEyeClosedFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";

function UserLogin() {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' })


    // 

    const [visible, setVisibility] = useState(false)

    const inputType = visible ? "text" : "password"

    const toToggleVisibility = () => {
        setVisibility(!visible)

    }

    const loginUser = (x) => {
        console.log(x);
    };






    return (
        <>
            <div className="flex justify-center items-center h-full mb-52">
                <form onSubmit={handleSubmit(loginUser)} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loginFirstName">
                                First Name
                            </label>
                            <input
                                {...register('firstName', { required: true, pattern: /([a-zA-Z]+\s*)+/, maxLength: 10 })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="loginFirstName"
                                type="text"
                                placeholder="First Name"
                                name='firstName'
                            />

                            {errors.firstName && errors.firstName.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.firstName && errors.firstName.type === 'maxLength' && (<p className="text-red-500 text-xs italic">The Max Length is 10....</p>)}
                        </div>
                        <div className="relative  flex flex-wrap w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loginPassword">
                                Password
                            </label>

                            <input
                                {...register('password', {
                                    required: true, pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/
                                })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="loginPassword"
                                type={inputType}
                                placeholder="******************"
                                name='password'
                            />
                            <span className=' absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700 text-2xl mt-4 mr-5  cursor-pointer'>  {visible ? <FaEye onClick={toToggleVisibility} /> : < PiEyeClosedFill onClick={toToggleVisibility} />}</span>

                            {errors.password && errors.password.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.password && errors.password.type === 'pattern' && (<p className="text-red-500 text-xs italic">Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.</p>)}

                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default UserLogin
