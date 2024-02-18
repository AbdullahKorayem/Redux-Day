import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function UserRegister() {
    const { register, handleSubmit, getValues, formState: { errors, isValid, isDirty } } = useForm({ mode: 'all' });

    const PasswordValidation = (confirmPass) => {
        const firstPass = getValues('password');

        if (firstPass !== confirmPass) {
            return false

        } else {
            return true;

        }
    }



    const RegisterUser = (x) => {
        console.log(x);
    };





    return (
        <>
            <div className="flex justify-center items-center h-full mb-52">
                <form onSubmit={handleSubmit(RegisterUser)} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gridFirstName">
                                First Name
                            </label>
                            <input
                                {...register('firstName', { required: true, pattern: /([a-zA-Z]+\s*)+/, maxLength: 10 })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="gridFirstName"
                                type="text"
                                placeholder="First Name"
                                name='firstName'
                            />
                            {errors.firstName && errors.firstName.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.firstName && errors.firstName.type === 'maxLength' && (<p className="text-red-500 text-xs italic">The Max Length is 10....</p>)}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="LastName">
                                Last Name
                            </label>
                            <input
                                {...register('lastName', { required: true, pattern: /([a-zA-Z]+\s*)+/, maxLength: 10 })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="LastName"
                                type="text"
                                placeholder="Last Name"
                                name='lastName'
                            />
                            {errors.lastName && errors.lastName.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.lastName && errors.lastName.type === 'maxLength' && (<p className="text-red-500 text-xs italic">The Max Length is 10....</p>)}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="UserName">
                                UserName
                            </label>
                            <input
                                {...register('userName', {
                                    required: true, pattern: /^\S*$/
                                })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="UserName"
                                type="text"
                                placeholder="User-Name"
                                name='userName'
                            />
                            {errors.userName && errors.userName.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.userName && errors.userName.type === 'maxLength' && (<p className="text-red-500 text-xs italic">The Max Length is 10....</p>)}
                            {errors.userName && errors.userName.type === 'pattern' && (<p className="text-red-500 text-xs italic">WTF Man IT contains White Spaces..</p>)}

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Email">
                                Email
                            </label>
                            <input
                                {...register('email', { required: true, pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/ })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="Email"
                                type="email"
                                placeholder="Email"
                                name='email'
                            />
                            {errors.email && errors.email.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.email && errors.email.type === 'pattern' && (<p className="text-red-500 text-xs italic">It Must contains @ character ....</p>)}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="FirstPassword">
                                Password
                            </label>
                            <input
                                {...register('password', {
                                    required: true, pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/
                                })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="FirstPassword"
                                type="password"
                                placeholder="******************"
                                name='password'
                            />
                            {/* {The part that detects spaces is the [^_.] segments These segments are negative character classes, meaning they match any character that is not listed within the square brackets.} */}
                            {errors.password && errors.password.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.password && errors.password.type === 'pattern' && (<p className="text-red-500 text-xs italic">Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.</p>)}

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Confirmepassword">
                                Confirm Password
                            </label>
                            <input
                                {...register('Confirmepassword', {
                                    required: true, validate: PasswordValidation, pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*$/
                                })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="Confirmepassword"
                                type="password"
                                placeholder="******************"
                                name='Confirmepassword'
                            />
                            {errors.Confirmepassword && errors.Confirmepassword.type === 'required' && (<p className="text-red-500 text-xs italic">Please fill out this field.</p>)}
                            {errors.Confirmepassword && errors.Confirmepassword.type === 'validate' && (<p className="text-red-500 text-xs italic">Password Must Match The Password U Provide</p>)}

                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button disabled={!isValid || !isDirty} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 disabled:bg-slate-700" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>

            </div>
        </>
    );
}

export default UserRegister;
